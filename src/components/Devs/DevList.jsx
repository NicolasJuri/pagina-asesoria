import React from "react";
import DevCard from "./DevCard";

const DevList = ({ devsToShow }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {devsToShow.map((dev) => (
        <DevCard dev={dev} key={dev.id} />
      ))}
    </div>
  );
};

export default DevList;