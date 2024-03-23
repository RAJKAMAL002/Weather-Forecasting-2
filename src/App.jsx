import React, { useEffect, useState } from "react";
import { Navbar } from "./assets/Navbar";
import { Graph1 } from "./assets/Graph1";
import bar1 from "./image/bar1.svg";
import bar2 from "./image/bar2.svg";
import bar3 from "./image/bar3.svg";
import bar4 from "./image/bar4.svg";
import pointer from "./image/pointer.svg";
function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("mumbai");
  const dataReciever = (data) => setCity(data);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=c022df1170e7135160c2c3c77a189a61`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setData(err));
  }, [city]);
  const dataForChart = [
    {
      name: "Temperature",
      image: bar1,
      ptimg: pointer,
      scale: data?.main?.temp,
      high: "Hot",
      medium: "Medium",
      low: "Chill",
      threshold_high: 50,
      threshold_medium: 15,
      threshold_low: -20,
      unit: `°C`,
    },
    {
      name: "Pressure",
      image: bar2,
      ptimg: pointer,
      scale: data?.main?.pressure,
      high: "High",
      medium: "Medium",
      low: "Low",
      threshold_high: 1084,
      threshold_medium: 1000,
      threshold_low: 870,
      unit: "mb",
    },
    {
      name: "Humidity",
      image: bar3,
      ptimg: pointer,
      scale: data?.main?.humidity,
      high: "High",
      medium: "Medium",
      low: "Low",
      threshold_high: 100,
      threshold_medium: 50,
      threshold_low: 1,
      unit: "%",
    },
    {
      name: "Wind Speed",
      image: bar4,
      ptimg: pointer,
      scale: data?.wind?.speed,
      high: "High",
      medium: "Medium",
      low: "Low",
      threshold_high: 20,
      threshold_medium: 10,
      threshold_low: 0,
      unit: "km/h",
    },
  ];

  return (
    <>
      <Navbar dataHandeler={dataReciever} />
      <div className=" w-full flex flex-col items-center justify-center bg-slate-100">
        <div className=" text-center py-5 font-medium text-lg">{city}</div>
        <div className=" grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto">
          {dataForChart.map((val) => {
            return (
              <div className=" flex items-center justify-center">
                <Graph1 data={val} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
