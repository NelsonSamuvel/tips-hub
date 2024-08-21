import React from "react";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";

function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const langVal = searchParams.get("lang") || "all";

  function handleClick(value) {
    searchParams.set("lang", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2 mt-4 sm:mt-0">
      {options.map((option) => (
        <Button
          type="secondary"
          isActive={option.value === langVal}
          key={option.value}
          optValue={option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
