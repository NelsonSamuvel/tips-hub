import { createContext, useContext, useReducer } from "react";
import { filterItems, searchFilterTip } from "../utils/helper";
import { useSearchParams } from "react-router-dom";

const TipsContext = createContext();

const initialTips = [
  {
    "id": 1,
    "title": "Use the Enhanced For Loop",
    "description": "The enhanced for loop, introduced in Java 5, provides a concise and efficient way to iterate over arrays and collections. Instead of using traditional for loops with index variables, you can simply iterate over the elements directly. This improves code readability and reduces the chance of off-by-one errors.",
    "image": "https://avatars.mds.yandex.net/i?id=1389db21fef2ca8d41b3d1d37b2ed94dec90cf8a-10805353-images-thumbs&n=13",
    "tags": ["java", "beginner"],
    "keywords": ["tip", "java", "beginner"],
    "language": "java",
    "creator": "John Doe",
    "postedAt": "2023-11-22T10:35:24Z"
  },

  {
    "id": 2,
    "title": "Use List Comprehensions for Faster Iteration",
    "description": "List comprehensions are a powerful Python feature that allows you to create lists in a concise and efficient way. Instead of using a for loop to iterate over a list, you can use a list comprehension to achieve the same result in just one line of code.",
    "image": "https://avatars.mds.yandex.net/i?id=fa30fd5aafc65bc07da7aa5004368f154c818c54-9222271-images-thumbs&n=13",
    "tags": ["python", "beginner", "py", "coding"],
    "keywords": ["tip", "python", "py"],
    "language": "python",
    "creator": "kratos",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 3,
    "title": "Spread and Rest Operators",
    "description": "The spread (`...`) and rest (`...`) operators are like magic wands for working with groups of things. They make copying, mixing, and taking things out easier.",
    "image": "https://avatars.mds.yandex.net/i?id=d62648d0eb8dc764a80589b505337f49b3744450-9222747-images-thumbs&n=13",
    "tags": ["javascript", "beginner", "js"],
    "keywords": ["tip", "javascript", "beginner", "vanillaJs", "js"],
    "language": "javascript",
    "creator": "tony stark",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 4,
    "title": "Redux for state management",
    "description": "Redux is a popular library for managing app state. It follows a unidirectional data flow and simplifies complex data interactions.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVusns6I7uPn4_Fn-G8VgR3uL6-gloU8v7w&s",
    "tags": ["javascript", "intermediate", "react", "js"],
    "keywords": [
      "tip",
      "javascript",
      "react",
      "intermediate",
      "reactJs",
      "js"
    ],
    "language": "react",
    "creator": "tyler durden",
    "postedAt": "2023-11-22T10:35:24Z"
  },

  {
    "id": 5,
    "title": "Take Advantage of Python's Built-In Functions",
    "description": "Python has many built-in functions that can save you time and effort when coding. Functions like map(), filter(), and reduce() can help you perform common operations on lists, dictionaries, and other data structures with just a few lines of code.",
    "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220522015612/10-Python-In-Built-Functions-You-Should-Know.jpg",
    "tags": ["python", "intermediate", "py"],
    "keywords": ["tip", "python", "py"],
    "language": "python",
    "creator": "kai",
    "postedAt": "2023-11-22T10:35:24Z"
  },

  {
    "id": 6,
    "title": "Promises and Async/Await",
    "description": "Promises and async/await make it easier to do tricky things in your code that happen at different times. They're like a friendly helper for hard work.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpImg-MBB2iMcZzs5klwX5BhEWcVVcO3MIA&s",
    "tags": ["javascript", "advanced", "js"],
    "keywords": ["tip", "javascript", "vanillaJs", "js"],
    "language": "javascript",
    "creator": "thanos",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 7,
    "title": "Container and Presentational Components (Smart and Dumb Components)",
    "description": "Promises and async/await make it easier to do tricky things in your code that happen at different times. They're like a friendly helper for hard work.",
    "image": "https://javascriptpatterns.vercel.app/ogimage1.png",
    "tags": ["javascript", "beginner", "react", "js"],
    "keywords": ["tip", "javascript", "react", "beginner", "reactJs", "js"],
    "language": "react",
    "creator": "dr.doom",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 8,
    "title": "Use const and let Instead of `var",
    "description": " JavaScript has some new words like const and let for making things in your code. They're better than the old word var because they work more safely.",
    "image": "https://i.ytimg.com/vi/wtbZCWnZIyQ/maxresdefault.jpg",
    "tags": ["javascript", "beginner", "js"],
    "keywords": ["tip", "javascript", "beginner", "vanillaJs", "js"],
    "language": "javascript",
    "creator": "bruce wayne",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 9,
    "title": "Take Advantage of Generics",
    "description": "Generics allow you to create reusable code that can work with different data types. By using generics, you can ensure type safety and eliminate the need for explicit type casting. This leads to more robust and maintainable code.",
    "image": "https://i.ytimg.com/vi/JY8-UMQ7vmY/maxresdefault.jpg",
    "tags": ["java", "intermediate"],
    "keywords": ["tip", "java"],
    "language": "java",
    "creator": "John wick",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 10,
    "title": " Component composition",
    "description": "This pattern involves building user interfaces, creating reusable and smaller components, and composing them to form a complete UI.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsUdletMlnibL1OwICIcKlpvlArNvUJZofw&s",
    "tags": ["javascript", "intermediate", "react", "js"],
    "keywords": ["tip", "javascript", "react", "reactJs", "js"],
    "language": "react",
    "creator": "bane",
    "postedAt": "2023-11-22T10:35:24Z"
  },
  {
    "id": 11,
    "title": "Use StringBuilder for String Manipulation",
    "description": "When you need to concatenate multiple strings or perform frequent string modifications, using the StringBuilder class is more efficient than using the '+' operator or concatenation methods. StringBuilder is mutable and provides methods for efficient string manipulation.",
    "image": "https://miro.medium.com/v2/resize:fit:612/1*EjU6SG3AtCMvkVRJfgy5qg.jpeg",
    "tags": ["java", "advanced"],
    "keywords": ["tip", "java"],
    "language": "java",
    "creator": "steve",
    "postedAt": "2024-07-25T10:35:24Z"
  },
  {
    "id": 12,
    "title": "Unpacking",
    "description": "Unpacking in python enables you to take individual elements out of iterables, such lists or tuples, and put them into variables. When you have data sets and wish to access their individual components independently, you frequently use it..",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDDSmGBqWHCl8lvZwwx_0qeC6d1YmGRfIuA&s",
    "tags": ["python", "advanced", "py", "programming", "coding"],
    "keywords": ["tip", "python", "py"],
    "language": "python",
    "creator": "flash",
    "postedAt": "2023-11-22T10:35:24Z"
  }
];

const initialState = {
  tips: initialTips,
  status: "idle",
  searchBy: "any",
};

function reducer(state, action) {
  switch (action.type) {
    case "tipsLoading":
      return { ...state, status: "loading" };
    case "getTips":
      return { ...state, tips: action.payload, status: "idle" };
    case "setSearchBy":
      return { ...state, searchBy: action.payload };
    case "addNewTip":
      return { ...state,status:"" , tips: [action.payload, ...state.tips] };
    case "toggleModal":
      return { ...state, status: state.status === "show" ? "" : "show" };
    default:
      return state;
  }
}

const TipsContextProvider = ({ children }) => {
  const [{ tips, status, searchBy }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <TipsContext.Provider
      value={{
        tips,
        status,
        searchBy,
        dispatch,
      }}
    >
      {children}
    </TipsContext.Provider>
  );
};

export function useTips() {
  const contextVal = useContext(TipsContext);
  if (contextVal === "undefined") {
    throw new Error("Values is used outside of context");
  }

  return contextVal;
}

export default TipsContextProvider;
