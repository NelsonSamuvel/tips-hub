import { useState } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import TipsLayout from "../features/Tips/TipsLayout";
import FilterBox from "../features/Tips/FilterBox";
import TipsContextProvider, { useTips } from "../context/TipsContextProvider";
import AddTipsModal from "../features/Tips/AddTipsModal";
import SearchContextProvider from "../context/SearchContextProvider";

function HomePage() {
  return (
    <SearchContextProvider>
      <div className="relative">
        <FilterBox />
        <AddTipsModal />
        <TipsLayout />
      </div>
    </SearchContextProvider>
  );
}

export default HomePage;
