import React from "react";
import TagsList from "./TagsList";
import { formatDate } from "../../utils/helper";

const TipsItem = ({ tip }) => {
  const { title, description, language, tags, creator, postedAt, image } = tip;

  return (
    <li className="space-y-3 bg-slate-950 px-3 py-4 rounded-md ">
      <div className="flex flex-col justify-between h-full p-2">
        <div>
          <div className=" sm:h-16  sm:overflow-hidden">
            <p className="text-xl font-semibold">{title}</p>
          </div>
          <div className="mt-4">
            <img
              src={image}
              alt=""
              className="w-full h-56 object-cover rounded-md"
            />
          </div>

          <div className="mt-4">
            <p className="sm:text-sm tracking-wide">{description}</p>
            <div className="text-sm mt-2 text-slate-400 flex sm:justify-between items-center flex-wrap gap-4 sm:gap-2">
              <p>Creator-{creator}</p>
              <p>{formatDate(new Date(postedAt))}</p>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-between mt-4">
          <ul className="flex space-x-2 text-sky-700 flex-wrap">
            {tags.map((tag, i) => (
              <TagsList key={i} tag={tag} />
            ))}
          </ul>
          <p className="cursor-pointer text-center  bg-sky-950 p-2 rounded-sm inline-block">
            {language}
          </p>
        </div>
      </div>
    </li>
  );
};

export default TipsItem;
