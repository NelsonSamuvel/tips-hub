import DropDown from "../../UI/DropDown";
import { useSearchFilter } from "../../context/SearchContextProvider";
import { useTips } from "../../context/TipsContextProvider";

const SearchBarDropdown = () => {
  const { handleSearchBy, searchBy } = useSearchFilter();
  return (
    <div className="absolute top-0 right-0">
      <DropDown
        value={searchBy}
        onChange={handleSearchBy}
        className="appearance-none bg-custom-arrow-1 bg-no-repeat bg-right bg-custom-size text-slate-200  bg-slate-700  px-2 py-1 pr-8 border-none md:px-2.5 md:py-2 md:pr-10 focus:outline-none focus:shadow-md"
      >
        <DropDown.Option value="any" className="">
          Any
        </DropDown.Option>
        <DropDown.Option value="tags">Tags</DropDown.Option>
        <DropDown.Option value="creator">Creators</DropDown.Option>
      </DropDown>
    </div>
  );
};

export default SearchBarDropdown;
