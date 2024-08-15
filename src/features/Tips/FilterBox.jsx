import React from "react";
import SearchBarTips from "./SearchBarTips";
import DropDownTips from "./DropDownTips";

function FilterBox({ children }) {
  return (
    <div className="flex items-center flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 bg-slate-800 h-[170px] text-stone-600 px-4">
        {children}
    </div>
  );
}

export default FilterBox;
