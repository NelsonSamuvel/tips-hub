import React from "react";

const DropDownTips = ({ language, dispatch }) => {
  return (
    <>
      <select
        name="languages"
        className="appearance-none rounded-sm px-2 py-1 pr-8 md:px-3 md:py-2 md:pr-10  focus:outline-none bg-custom-arrow-2 bg-no-repeat bg-right bg-custom-size"
        value={language}
        onChange={(e) =>
          dispatch({ type: "setLanguage", payload: e.target.value })
        }
      >
        <option value="all">All</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="javascript">Javascript</option>
        <option value="react">React</option>
      </select>
    </>
  );
};

export default DropDownTips;
