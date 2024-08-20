import { useTips } from "../../context/TipsContextProvider";
import DropDown from "../../UI/Dropdown";
const DropDownTips = () => {
  const { language, dispatch } = useTips();

  return (
    <>
      <DropDown
        name="languages"
        className="appearance-none rounded-sm px-2 py-1 pr-8 md:px-3 md:py-2 md:pr-10  focus:outline-none bg-custom-arrow-2 bg-no-repeat bg-right bg-custom-size"
        value={language}
        onChange={(e) =>
          dispatch({ type: "setLanguage", payload: e.target.value })
        }
      >
        <DropDown.Option value="all">All</DropDown.Option>
        <DropDown.Option value="java">Java</DropDown.Option>
        <DropDown.Option value="python">Python</DropDown.Option>
        <DropDown.Option value="javascript">Javascript</DropDown.Option>
        <DropDown.Option value="react">React</DropDown.Option>
      </DropDown>
    </>
  );
};

export default DropDownTips;
