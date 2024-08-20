import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "../../UI/Button";
import DropDown from "../../ui/Dropdown";
import FormRow from "../../UI/FormRow";
import { HiMiniXMark, HiXMark } from "react-icons/hi2";

function AddTipsModal({ onClose }) {
  const ref = useOutsideClick(onClose);

  return (
    <div className="bg-slate-300/30 absolute inset-0 z-50">
      <form
        ref={ref}
        className=" bg-gray-900 md:w-1/2 md:rounded-md mx-auto mt-8  text-stone-800 px-6 pt-4 pb-8"
      >
        <button className="mb-4 w-full" onClick={onClose}>
          <HiXMark className="text-slate-300 text-xl stroke-2 ml-auto" />
        </button>
        <FormRow label="Title">
          <input
            type="text"
            id="title"
            className="font-semibold border border-slate-300 p-1  md:px-2 md:py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          />
        </FormRow>

        <FormRow label="Image-Url">
          <input
            type="text"
            id="image"
            className="font-semibold  border border-slate-300 p-1  md:px-2 md:py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          />
        </FormRow>

        <FormRow label="Description">
          <textarea
            id="desc"
            className="font-semibold  border border-slate-300 p-1  md:px-2 md:py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          ></textarea>
        </FormRow>

        <FormRow label="creator">
          <input
            type="text"
            id="creator"
            className="font-semibold  border border-slate-300 p-1  md:px-2 md:py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          />
        </FormRow>

        <FormRow label="tags">
          <input
            type="text"
            id="tags"
            className="font-semibold  border border-slate-300 p-1  md:px-2 md:py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          />
        </FormRow>
        <div className="">
        <Button>Add New Tip</Button>
        </div>
      </form>
    </div>
  );
}

export default AddTipsModal;
