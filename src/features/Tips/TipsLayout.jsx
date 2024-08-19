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
    id: 1,
    title: "Use the Enhanced For Loop",
    description:
      "The enhanced for loop, introduced in Java 5, provides a concise and efficient way to iterate over arrays and collections. Instead of using traditional for loops with index variables, you can simply iterate over the elements directly. This improves code readability and reduces the chance of off-by-one errors.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6Lij7SUMh2jIUJvw-X7TRPshrETNU8_4vQ&s",
    tags: ["java", "beginner"],
    keywords: ["tip", "java", "beginner", "tipsandtricks"],
    language: "java",
    creator: "John Doe",
    postedAt: "2023-11-22T10:35:24Z",
  },

  {
    id: 2,
    title: "Use List Comprehensions for Faster Iteration",
    description:
      "List comprehensions are a powerful Python feature that allows you to create lists in a concise and efficient way. Instead of using a for loop to iterate over a list, you can use a list comprehension to achieve the same result in just one line of code.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrvIq5jcIPiJ2DeeFtVKVPb8fhR1Tlg3RZA&s",
    tags: ["python", "beginner", "py", "coding"],
    keywords: ["tip", "python"],
    language: "python",
    creator: "kratos",
    postedAt: "2023-11-22T10:35:24Z",
  },
  {
    id: 3,
    title: "Spread and Rest Operators",
    description:
      "The spread (`...`) and rest (`...`) operators are like magic wands for working with groups of things. They make copying, mixing, and taking things out easier.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--zu4-A2IE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/c70ctxtv3x374zv4jfrc.png",
    tags: ["javascript", "beginner", "js"],
    keywords: ["tip", "javascript", "beginner", "vanillaJs"],
    language: "javascript",
    creator: "tony stark",
    postedAt: "2023-11-22T10:35:24Z",
  },
  {
    id: 4,
    title: "Redux for state management",
    description:
      "Redux is a popular library for managing app state. It follows a unidirectional data flow and simplifies complex data interactions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVusns6I7uPn4_Fn-G8VgR3uL6-gloU8v7w&s",
    tags: ["javascript", "intermediate", "react", "js"],
    keywords: ["tip", "javascript", "react", "intermediate", "reactJs"],
    language: "react",
    creator: "tyler durden",
    postedAt: "2023-11-22T10:35:24Z",
  },

  {
    id: 5,
    title: "Take Advantage of Python's Built-In Functions",
    description:
      "Python has many built-in functions that can save you time and effort when coding. Functions like map(), filter(), and reduce() can help you perform common operations on lists, dictionaries, and other data structures with just a few lines of code.",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220522015612/10-Python-In-Built-Functions-You-Should-Know.jpg",
    tags: ["python", "intermediate", "py"],
    keywords: ["tip", "python"],
    language: "python",
    creator: "kai",
    postedAt: "2023-11-22T10:35:24Z",
  },

  {
    id: 6,
    title: "Promises and Async/Await",
    description:
      "Promises and async/await make it easier to do tricky things in your code that happen at different times. They're like a friendly helper for hard work.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpImg-MBB2iMcZzs5klwX5BhEWcVVcO3MIA&s",
    tags: ["javascript", "advanced", "js"],
    keywords: ["tip", "javascript", "advanced", "vanillaJs"],
    language: "javascript",
    creator: "thanos",
    postedAt: "2023-11-22T10:35:24Z",
  },
  {
    id: 7,
    title:
      "Container and Presentational Component",
    description:
      "Promises and async/await make it easier to do tricky things in your code that happen at different times. They're like a friendly helper for hard work.",
    image: "https://javascriptpatterns.vercel.app/ogimage1.png",
    tags: ["javascript", "beginner", "react", "js"],
    keywords: ["tip", "javascript", "react", "beginner", "reactJs"],
    language: "react",
    creator: "dr.doom",
    postedAt: "2023-11-22T10:35:24Z",
  },
  {
    id: 8,
    title: "Use const and let Instead of `var",
    description:
      " JavaScript has some new words like const and let for making things in your code. They're better than the old word var because they work more safely.",
    image: "https://i.ytimg.com/vi/wtbZCWnZIyQ/maxresdefault.jpg",
    tags: ["javascript", "beginner", "js"],
    keywords: ["tip", "javascript", "beginner", "vanillaJs"],
    language: "javascript",
    creator: "bruce wayne",
    postedAt: "2023-11-22T10:35:24Z",
  },
  {
    id: 9,
    title: "Take Advantage of Generics",
    description:
      "Generics allow you to create reusable code that can work with different data types. By using generics, you can ensure type safety and eliminate the need for explicit type casting. This leads to more robust and maintainable code.",
    image: "https://i.ytimg.com/vi/JY8-UMQ7vmY/maxresdefault.jpg",
    tags: ["java", "intermediate"],
    keywords: ["tip", "java", "intermediate"],
    language: "java",
    creator: "John wick",
    postedAt: "2023-11-22T10:35:24Z",
  },
  {
    id: 10,
    title: " Component composition",
    description:
      "This pattern involves building user interfaces, creating reusable and smaller components, and composing them to form a complete UI.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsUdletMlnibL1OwICIcKlpvlArNvUJZofw&s",
    tags: ["javascript", "intermediate", "react", "js"],
    keywords: ["tip", "javascript", "react", "intermediate", "reactJs"],
    language: "react",
    creator: "bane",
    postedAt: "2023-11-22T10:35:24Z",
  },
  {
    id: 11,
    title: "Use StringBuilder for String Manipulation",
    description:
      "When you need to concatenate multiple strings or perform frequent string modifications, using the StringBuilder class is more efficient than using the '+' operator or concatenation methods. StringBuilder is mutable and provides methods for efficient string manipulation.",
    image:
      "https://miro.medium.com/v2/resize:fit:612/1*EjU6SG3AtCMvkVRJfgy5qg.jpeg",
    tags: ["java", "advanced"],
    keywords: ["tip", "java", "advanced"],
    language: "java",
    creator: "steve",
    postedAt: "2024-07-25T10:35:24Z",
  },
  {
    id: 12,
    title: "Unpacking",
    description:
      "Unpacking in python enables you to take individual elements out of iterables, such lists or tuples, and put them into variables. When you have data sets and wish to access their individual components independently, you frequently use it..",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDDSmGBqWHCl8lvZwwx_0qeC6d1YmGRfIuA&s",
    tags: ["python", "advanced", "py", "programming", "coding"],
    keywords: ["tip", "python"],
    language: "python",
    creator: "flash",
    postedAt: "2023-11-22T10:35:24Z",
  },
];

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
  if (language !== "all")
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
