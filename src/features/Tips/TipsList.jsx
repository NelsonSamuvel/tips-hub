import React from "react";
import TipsItem from "./TipsItem";



const TipsList = ({tips}) => {
  return (
    <ul className="mt-4 px-2 sm:px-4 grid sm:grid-cols-2 lg:grid-cols-3">
      {tips.map((tip) => (
        <TipsItem key={tip.id} tip={tip} />
      ))}
    </ul>
  );
};

export default TipsList;
