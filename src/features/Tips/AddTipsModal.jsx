import { useForm } from "react-hook-form";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "../../UI/Button";
import FormRow from "../../UI/FormRow";
import { HiXMark } from "react-icons/hi2";
import DropDown from "../../UI/DropDown";
import { v4 as uuidv4 } from "uuid";
import { generateDate } from "../../utils/helper";
import { useTips } from "../../context/TipsContextProvider";

function AddTipsModal({ onClose }) {
  const { dispatch } = useTips();

  const ref = useOutsideClick(onClose);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const { title, image, description, creator, language, tags } = data;
    const postedAt = generateDate();

    const newTip = {
      id: uuidv4(),
      title,
      image,
      description,
      creator,
      language,
      tags: tags.split(","),
      postedAt,
    };
    dispatch({ type: "addNewTip", payload: newTip });
    onClose();
  }

  return (
    <div className="bg-slate-300/30 absolute inset-0 z-50 backdrop-blur-sm">
      <form
        ref={ref}
        className=" bg-gray-900 md:w-1/2 md:rounded-md mx-auto mt-16 sm:mt-4  text-stone-800 px-6 pt-4 pb-8"
      >
        <button className="mb-4 w-full" onClick={onClose}>
          <HiXMark className="text-slate-300 text-xl stroke-2 ml-auto" />
        </button>
        <FormRow label="Title" error={errors?.title?.message}>
          <input
            type="text"
            id="title"
            placeholder="Title"
            {...register("title", {
              required: "This field is required",
            })}
            className="font-semibold border w-full  rounded-sm border-slate-300 p-1  md:px-2 md:py-1.5  focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          />
        </FormRow>

        <FormRow label="Image-Url" error={errors?.image?.message}>
          <input
            type="text"
            id="image"
            placeholder="Image Url"
            {...register("image", {
              required: "This field is required",
            })}
            className="font-semibold  border w-full rounded-sm border-slate-300 p-1  md:px-2 md:py-1.5  focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          />
        </FormRow>

        <FormRow label="Description" error={errors?.description?.message}>
          <textarea
            placeholder="Description about post"
            id="desc"
            {...register("description", {
              required: "This field is required",
            })}
            className="font-semibold  border w-full rounded-sm border-slate-300 p-1  md:px-2 md:py-1.5  focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          ></textarea>
        </FormRow>

        <FormRow label="creator">
          <input
            type="text"
            id="creator"
            placeholder="creator"
            {...register("creator")}
            className="font-semibold  border w-full rounded-sm border-slate-300 p-1  md:px-2 md:py-1.5  focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          />
        </FormRow>

        <FormRow label="tags">
          <input
            type="text"
            id="tags"
            {...register("tags")}
            placeholder="tags"
            className="font-semibold  border w-full rounded-sm border-slate-300 p-1  md:px-2 md:py-1.5  focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          />
        </FormRow>

        <FormRow label="Language">
          <DropDown
            name="language"
            register={register}
            className="font-semibold  border w-full rounded-sm border-slate-300 p-1  md:px-2 md:py-1.5  focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-4 transition-all duration-300"
          >
            <DropDown.Option value="java">Java</DropDown.Option>
            <DropDown.Option value="python">Python</DropDown.Option>
            <DropDown.Option value="javascript">Javascript</DropDown.Option>
            <DropDown.Option value="React">React</DropDown.Option>
          </DropDown>
        </FormRow>

        <div className="">
          <Button onClick={handleSubmit(onSubmit)}>Add New Tip</Button>
        </div>
      </form>
    </div>
  );
}

export default AddTipsModal;
