import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
  return (
    <div className="bg-slate-500/20 backdrop-blur-sm absolute inset-0 flex justify-center">
      <div className="mt-24">
        <MoonLoader color="white" size={50} speedMultiplier={1} />
      </div>
    </div>
  );
};

export default Loader;
