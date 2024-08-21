import { useState } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import TipsLayout from "../features/Tips/TipsLayout";
import FilterBox from "../features/Tips/FilterBox";
import TipsContextProvider, { useTips } from "../context/TipsContextProvider";
import AddTipsModal from "../features/Tips/AddTipsModal";

function HomePage() {

  

  return (

        <div className="relative">
          <FilterBox />
          <AddTipsModal/>
          <TipsLayout />
        </div>
  );
}

export default HomePage;
