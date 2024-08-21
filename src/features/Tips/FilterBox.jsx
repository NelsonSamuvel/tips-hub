import SearchBarTips from "./SearchBarTips";
import Filter from "../../UI/Filter";

function FilterBox() {
  return (
    <div className="flex items-center flex-col md:flex-row flex-wrap justify-center gap-6 sm:gap-8 bg-slate-800 h-[170px] text-stone-600 px-4">
      <SearchBarTips />
      <Filter
        options={[
          { value: "all", label: "All" },
          { value: "java", label: "Java" },
          { value: "javascript", label: "Javascript" },
          { value: "react", label: "React" },
          { value: "python", label: "Python" },
        ]}
      />
    </div>
  );
}

export default FilterBox;
