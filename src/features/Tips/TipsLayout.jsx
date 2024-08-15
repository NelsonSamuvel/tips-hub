import React, { useEffect, useReducer, useState } from "react";
import FilterBox from "./FilterBox";
import TipsList from "./TipsList";
import { getTips } from "../../services/api.tips";
import Loader from "../../UI/Loader";
import { filterItems } from "../../utils/helper";
import SearchBarTips from "./SearchBarTips";
import DropDownTips from "./DropDownTips";
import TipsNotFound from "./TipsNotFound";

const initialState = {
  tips: [],
  status: "idle",
  language: "all",
  searchedTip: "",
  searchBy: "any",
};

function reducer(state, action) {
  switch (action.type) {
    case "tipsLoading":
      return { ...state, status: "loading" };
    case "getTips":
      return { ...state, tips: action.payload, status: "idle" };
    case "setLanguage":
      return { ...state, language: action.payload };
    case "setSearchedTip":
      return { ...state, searchedTip: action.payload };
    case "setSearchBy":
      return { ...state, searchBy: action.payload };
    default:
      return state;
  }
}

function TipsLayout() {
  const [{ tips, status, language, searchedTip, searchBy }, dispatch] =
    useReducer(reducer, initialState);

  const isSearchTip = searchedTip.length > 2;

  let filteredTips = tips;
  if (language === "java" || language === "javascript" || language === "react")
    filteredTips = filterItems(tips, "language", language);

  if (isSearchTip) {
    let checkString;
    if (searchBy === "tags" || searchBy === "creator") {
      filteredTips = filteredTips.filter((tip) => {
        checkString = tip[searchBy].toString();
        return checkString.toLowerCase().includes(searchedTip.toLowerCase());
      });
    } else {
      filteredTips = filteredTips.filter((tip) => {
        const { title, description, tags, keywords, language, creator } = tip;
        checkString = `${title} ${description} ${language} ${tags.join(
          " "
        )} ${keywords.join(" ")}  ${creator}`;
        return checkString.toLowerCase().includes(searchedTip.toLowerCase());
      });
    }
  }

  useEffect(() => {
    async function getData() {
      dispatch({ type: "tipsLoading" });
      const data = await getTips();
      dispatch({ type: "getTips", payload: data });
    }
    getData();
  }, []);

  return (
    <div className="px-3 py-4">
      <FilterBox>
        <SearchBarTips
          searchedTip={searchedTip}
          dispatch={dispatch}
          searchBy={searchBy}
        />
        <DropDownTips language={language} dispatch={dispatch} />
      </FilterBox>
      <div className="relative">
        {status === "loading" && <Loader />}
        {!filteredTips.length ? (
          <TipsNotFound />
        ) : (
          <TipsList tips={filteredTips} />
        )}
      </div>
    </div>
  );
}

export default TipsLayout;
