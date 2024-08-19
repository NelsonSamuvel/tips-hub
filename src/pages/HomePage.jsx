import React, { useReducer } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import TipsLayout from "../features/Tips/TipsLayout";
import FilterBox from "../features/Tips/FilterBox";
import SearchBarTips from "../features/Tips/SearchBarTips";
import DropDownTips from "../features/Tips/DropDownTips";
import { filterItems } from "../utils/helper";
import TipsContextProvider, { useTips } from "../context/TipsContextProvider";

function HomePage() {
  return (
    <TipsContextProvider>
      <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
        <Header />
        <FilterBox>
          <SearchBarTips />
          <DropDownTips />
        </FilterBox>
        <TipsLayout />
        <Footer />
      </div>
    </TipsContextProvider>
  );
}

export default HomePage;
