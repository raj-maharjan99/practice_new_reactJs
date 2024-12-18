import React from "react";
import { regionName } from "./data";

const RegionButton = ({ setRegion }) => {
  return (
    <div className="flex gap-3 justify-center mt-5">
      {regionName.map((regions) => (
        <button
          key={regions.id}
          onClick={() => setRegion(`${regions.value}`)}
          className={`border border-black px-2 rounded-md text-white ${regions.bgColor}`}
        >
          {regions.name}
        </button>
      ))}
    </div>
  );
};

export default RegionButton;
