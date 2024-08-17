import React from "react";

const TipsNotFound = ({searchBy}) => {
  const isOther = searchBy==="tags" || searchBy === "creator"
  return (
    <div className="flex justify-center h-48 items-center text-center flex-col gap-2">
      <p>Tips Not Found😓</p>
      {isOther && <p>
        There is no tip that is relevant to <span className="text-yellow-600 uppercase">{searchBy}📝</span>  based on your search try different...🔍
      </p> }
    </div>
  );
};

export default TipsNotFound;
