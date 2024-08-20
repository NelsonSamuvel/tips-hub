import React, { useEffect, useReducer, useState } from "react";
import FilterBox from "./FilterBox";
import TipsList from "./TipsList";
import { getTips } from "../../services/api.tips";
import Loader from "../../ui/Loader";
import { filterItems } from "../../utils/helper";
import SearchBarTips from "./SearchBarTips";
import DropDownTips from "./DropDownTips";
import TipsNotFound from "./TipsNotFound";
import { useTips } from "../../context/TipsContextProvider";

function TipsLayout() {
  const { filteredTips, searchBy, status } = useTips();

  return (
    <div className="px-3 py-4">
      <div className="relative">
        {status === "loading" && <Loader />}
        {!filteredTips.length ? (
          <TipsNotFound searchBy={searchBy} />
        ) : (
          <TipsList tips={filteredTips} />
        )}
      </div>
    </div>
  );
}

export default TipsLayout;
