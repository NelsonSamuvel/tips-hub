import Button from "../../UI/Button";
import DropDown from "../../ui/Dropdown";
import FormRow from "../../UI/FormRow";
import { HiMiniXMark, HiXMark } from "react-icons/hi2";

function AddTipsModal() {
  return (
    <div className="bg-slate-300/30 fixed inset-0 z-50">
      <form className=" bg-slate-200 w-1/2 rounded-md mx-auto mt-24  text-stone-800 p-4 ">
        <button className="mb-4 w-full">
          <HiXMark className="text-slate-700 text-xl stroke-2 ml-auto" />
        </button>
        <FormRow label="Title">
          <input
            type="text"
            id="title"
            className="border border-slate-300 px-2 py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4"
          />
        </FormRow>

        <FormRow label="Image-Url">
          <input
            type="text"
            id="image"
            className="border border-slate-300 px-2 py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 "
          />
        </FormRow>

        <FormRow label="Description">
          <textarea
            id="desc"
            className="border border-slate-300 px-2 py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4"
          ></textarea>
        </FormRow>

        <FormRow label="creator">
          <input
            type="text"
            id="creator"
            className="border border-slate-300 px-2 py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4"
          />
        </FormRow>

        <FormRow label="tags">
          <input
            type="text"
            id="tags"
            className="border border-slate-300 px-2 py-1.5 grow focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4"
          />
        </FormRow>
        <Button>Add New Tip</Button>
      </form>
    </div>
  );
}

export default AddTipsModal;
