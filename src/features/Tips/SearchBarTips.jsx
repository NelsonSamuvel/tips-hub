import React from "react";

const SearchBarTips = ({ searchedTip, dispatch, searchBy }) => {
  return (
    <div className="relative">
      <input
        className="px-2 py-1 md:px-3 md:py-2 w-[300px] rounded-sm focus:outline-none placeholder:font-normal sm:w-[350px] focus:md:w-[450px] focus:transition-w duration-100"
        type="text"
        placeholder={`search tips by ${searchBy}`}
        value={searchedTip}
        onChange={(e) =>
          dispatch({ type: "setSearchedTip", payload: e.target.value })
        }
      />
      <div className="absolute top-0 right-0">
        <select

          value={searchBy}
          onChange={(e) =>
            dispatch({ type: "setSearchBy", payload: e.target.value })
          }
          className="text-center appearance-none text-slate-200 bg-slate-700  px-2 py-1 border-none md:px-2.5 md:py-2 focus:outline-none focus:shadow-md"
        >
          <option value="any" className="">Any</option>
          <option value="tags">Tags</option>
          <option value="creator">Creators</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBarTips;
