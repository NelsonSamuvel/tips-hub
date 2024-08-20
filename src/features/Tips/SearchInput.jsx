import {useTips} from "../../context/TipsContextProvider"

const SearchInput = () => {

    const { searchedTip, dispatch, searchBy } = useTips();

  return (
    <input
        className="px-2 py-1 md:px-3 md:py-2 w-[300px] rounded-sm focus:outline-none placeholder:font-normal sm:w-[350px] focus:md:w-[450px] focus:transition-w duration-100"
        type="text"
        placeholder={`search tips by ${searchBy}`}
        value={searchedTip}
        onChange={(e) =>
          dispatch({ type: "setSearchedTip", payload: e.target.value })
        }
      />
  )
}

export default SearchInput