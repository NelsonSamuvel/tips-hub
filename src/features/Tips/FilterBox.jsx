import React from "react";

function FilterBox() {
  return (
    <div className="flex items-center justify-center gap-4 bg-slate-800 h-[100px] text-stone-600 px-4">
      <input
        className="px-2 py-1 rounded-sm focus:outline-none placeholder:font-normal sm:w-[250px] focus:sm:w-[350px] focus:transition-all duration-300"
        type="text"
        placeholder="search tips here..."
      />
      <select
        name="languages"
        className="rounded-sm px-2 py-1  focus:outline-none"
      >
        <option value="java">Java</option>
        <option value="java">Javascript</option>
        <option value="java">C</option>
        <option value="java">C++</option>
      </select>
    </div>
  );
}

export default FilterBox;
