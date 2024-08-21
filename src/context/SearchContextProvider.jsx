import { createContext, useContext, useState } from "react";

const SearchFilterContext = createContext();

function SearchContextProvider({ children }) {
  const [searchedTip, setSearchedTip] = useState("");
  const [searchBy, setSearchBy] = useState("any");

  function handleSearch(e) {
    setSearchedTip(e.target.value);
  }

  function handleSearchBy(e) {
    setSearchBy(e.target.value);
  }

  return (
    <SearchFilterContext.Provider
      value={{
        searchedTip,
        handleSearch,
        searchBy,
        handleSearchBy,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
}

export function useSearchFilter() {
  const searchVal = useContext(SearchFilterContext);
  if (searchVal === undefined) throw new Error("Values could not be get");

  return searchVal;
}

export default SearchContextProvider;
