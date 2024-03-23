import React, { useState } from "react";

export const Navbar = (props) => {
  const [city, setCity] = useState("mumbai");
  return (
    <div className=" w-full h-16 shadow-lg flex items-center relative">
      <div className="absolute right-5">
        <input
          className=" px-4 py-2 outline-none rounded-xl bg-slate-200"
          type="text"
          placeholder="Search..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={() => props.dataHandeler(city)}
          className=" shadow-sm bg-blue-500 text-white py-2 px-5 rounded-xl ml-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};
