import { useTips } from "../context/TipsContextProvider";
import Button from "./Button";

function Header() {
  const { dispatch } = useTips();

  function handleModal() {
    dispatch({ type: "toggleModal" });
  }

  return (
    <div className="px-6 sm:px-5 py-4 flex justify-between items-center gap-2">
      <div className="text-lg sm:text-xl font-semibold tracking-widest">
        <p>TipsHub</p>
      </div>
      <div className="text-sm sm:text-lg italic tracking-wider hidden sm:block">
        <p>Learn to Code Better</p>
      </div>
      <div className="flex gap-4 items-center text-lg">
        <p className="text-base">Tips</p>
        <Button onClick={handleModal} type="primary">
          Create
        </Button>
      </div>
    </div>
  );
}

export default Header;
