import DropDown from "../../UI/DropDown";
import { useTips } from "../../context/TipsContextProvider";

const SearchBarDropdown = () => {
  const { dispatch, searchBy } = useTips();
  return (
    <div className="absolute top-0 right-0">
      <DropDown
        value={searchBy}
        onChange={(e) =>
          dispatch({ type: "setSearchBy", payload: e.target.value })
        }
        className="appearance-none bg-custom-arrow-1 bg-no-repeat bg-right bg-custom-size text-slate-200  bg-slate-700  px-2 py-1 pr-8 border-none md:px-2.5 md:py-2 md:pr-10 focus:outline-none focus:shadow-md"
      >
        <option value="any" className="">
          Any
        </option>
        <option value="tags">Tags</option>
        <option value="creator">Creators</option>
      </DropDown>
    </div>
  );
};

export default SearchBarDropdown;
