import React, { useEffect, useReducer, useState } from "react";
import FilterBox from "./FilterBox";
import TipsList from "./TipsList";
import { getTips } from "../../services/api.tips";
import Loader from "../../UI/Loader";
import { filterItems } from "../../utils/helper";
import SearchBarTips from "./SearchBarTips";
import DropDownTips from "./DropDownTips";
import TipsNotFound from "./TipsNotFound";


const initialTips = [
  {
    "id": 1,
    "title": "Use the Enhanced For Loop",
    "description": "The enhanced for loop, introduced in Java 5, provides a concise and efficient way to iterate over arrays and collections. Instead of using traditional for loops with index variables, you can simply iterate over the elements directly. This improves code readability and reduces the chance of off-by-one errors.",
    "tags": ["java", "beginner"],
    "keywords": ["tip", "java", "beginner"],
    "language": "java",
    "creator": "John Doe",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 2,
    "title": " Component composition",
    "description": "This pattern involves building user interfaces, creating reusable and smaller components, and composing them to form a complete UI.",
    "tags": ["javascript", "intermediate", "react"],
    "keywords": ["tip", "javascript", "react", "intermediate", "reactJs"],
    "language": "react",
    "creator": "bane",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 3,
    "title": "Spread and Rest Operators",
    "description": "The spread (`...`) and rest (`...`) operators are like magic wands for working with groups of things. They make copying, mixing, and taking things out easier.",
    "tags": ["javascript", "beginner"],
    "keywords": ["tip", "javascript", "beginner", "vanillaJs"],
    "language": "javascript",
    "creator": "tony stark",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 4,
    "title": "Redux for state management",
    "description": "Redux is a popular library for managing app state. It follows a unidirectional data flow and simplifies complex data interactions.",
    "tags": ["javascript", "intermediate", "react"],
    "keywords": ["tip", "javascript", "react", "intermediate", "reactJs"],
    "language": "react",
    "creator": "tyler durden",
    "postedAt": "2023-11-22T10:35:24Z"
  },

  {
    "id": 5,
    "title": "Use StringBuilder for String Manipulation",
    "description": "When you need to concatenate multiple strings or perform frequent string modifications, using the StringBuilder class is more efficient than using the '+' operator or concatenation methods. StringBuilder is mutable and provides methods for efficient string manipulation.",
    "tags": ["java", "advanced"],
    "keywords": ["tip", "java", "advanced"],
    "language": "java",
    "creator": "steve",
    "postedAt": "2024-07-25T10:35:24Z"
  },

  {
    "id": 6,
    "title": "Promises and Async/Await",
    "description": "Promises and async/await make it easier to do tricky things in your code that happen at different times. They're like a friendly helper for hard work.",
    "tags": ["javascript", "advanced"],
    "keywords": ["tip", "javascript", "advanced", "vanillaJs"],
    "language": "javascript",
    "creator": "thanos",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 7,
    "title": "Container and Presentational Components (Smart and Dumb Components)",
    "description": "Promises and async/await make it easier to do tricky things in your code that happen at different times. They're like a friendly helper for hard work.",
    "tags": ["javascript", "beginner", "react"],
    "keywords": ["tip", "javascript", "react", "beginner", "reactJs"],
    "language": "react",
    "creator": "dr.doom",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 8,
    "title": "Use const and let Instead of `var",
    "description": " JavaScript has some new words like const and let for making things in your code. They're better than the old word var because they work more safely.",
    "tags": ["javascript", "beginner"],
    "keywords": ["tip", "javascript", "beginner", "vanillaJs"],
    "language": "javascript",
    "creator": "bruce wayne",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 9,
    "title": "Take Advantage of Generics",
    "description": "Generics allow you to create reusable code that can work with different data types. By using generics, you can ensure type safety and eliminate the need for explicit type casting. This leads to more robust and maintainable code.",
    "tags": ["java", "intermediate"],
    "keywords": ["tip", "java", "intermediate"],
    "language": "java",
    "creator": "John wick",
    "postedAt": "2023-11-22T10:35:24Z"
  }
]

const initialState = {
  tips: initialTips,
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

  const isSearchTip = searchedTip.length > 0;

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

  // useEffect(() => {
  //   async function getData() {
  //     dispatch({ type: "tipsLoading" });
  //     const data = await getTips();
  //     dispatch({ type: "getTips", payload: data });
  //   }
  //   getData();
  // }, []);

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
          <TipsNotFound searchBy={searchBy} />
        ) : (
          <TipsList tips={filteredTips} />
        )}
      </div>
    </div>
  );
}

export default TipsLayout;
