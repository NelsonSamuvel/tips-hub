
import SearchBarTips from "./SearchBarTips";
import DropDownTips from "./DropDownTips";

function FilterBox() {
  return (
    <div className="flex items-center flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 bg-slate-800 h-[170px] text-stone-600 px-4">
         <SearchBarTips />
         <DropDownTips />
    </div>
  );
}

export default FilterBox; 
