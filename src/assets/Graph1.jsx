import React from "react";

export const Graph1 = ({ data }) => {
  const lowThreshold = data.threshold_low;
  const highThreshold = data.threshold_high;

  let positionPercentage = 0;
  if (data.scale >= lowThreshold && data.scale <= highThreshold) {
    const totalRange = highThreshold - lowThreshold;
    const distanceFromLow = data.scale - lowThreshold;
    positionPercentage = (distanceFromLow / totalRange) * 100;
  } else if (data.scale > highThreshold) {
    positionPercentage = 100;
  }
  return (
    <div className="flex flex-col items-center justify-center px-10  py-8 rounded-md mx-5 my-5  bg-white">
      <div className="w-72">
        <div className="relative">
          <img className="w-full" src={data.image} alt="" />
          <img
            className=" w-6 absolute top-1/2 transform -translate-y-1/2"
            src={data.ptimg}
            alt=""
            style={{ left: `${positionPercentage}%` }}
          />
        </div>

        <div className=" w-full flex items-center justify-between pt-8">
          <span className=" flex items-center flex-col">
            <span className=" text-sm pb-1">
              {`${data.threshold_low} ${data.unit}`}
            </span>
            <span className=" bg-blue-300 text-xs py-1 px-3 rounded-xl text-blue-700">
              {data.low}
            </span>
          </span>
          <span className=" flex items-center justify-center flex-col">
            <span className=" text-sm pb-1">
              {`${data.threshold_medium} ${data.unit}`}
            </span>
            <span className=" bg-yellow-300 text-xs py-1 px-3 rounded-xl text-yellow-700">
              {data.medium}
            </span>
          </span>
          <span className=" flex items-center justify-center flex-col">
            <span className=" text-sm pb-1">
              {`${data.threshold_high} ${data.unit}`}
            </span>
            <span className=" bg-red-300 text-xs py-1 px-3 rounded-xl text-red-700">
              {data.high}
            </span>
          </span>
        </div>
        <div className=" text-center mt-6">{`${data.name} : ${data.scale} ${data.unit}`}</div>
      </div>
    </div>
  );
};
