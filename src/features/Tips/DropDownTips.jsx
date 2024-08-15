import React from "react";

const DropDownTips = ({ language, dispatch }) => {
  return (
    <>
      <select
        name="languages"
        className="rounded-sm px-2 py-1 md:px-3 md:py-2  focus:outline-none"
        value={language}
        onChange={(e) =>
          dispatch({ type: "setLanguage", payload: e.target.value })
        }
      >
        <option value="all">All</option>
        <option value="java">Java</option>
        <option value="javascript">Javascript</option>
        <option value="react">React</option>
      </select>
    </>
  );
};

export default DropDownTips;
