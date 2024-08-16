import React from "react";
import TagsList from "./TagsList";
import { formatDate } from "../../utils/helper";

const TipsItem = ({ tip }) => {
  const { title, description, language, tags, creator, postedAt } = tip;

  return (
    <li className="space-y-3 bg-slate-950 px-3 py-4 rounded-md  flex flex-col justify-between">
      <p className="text-xl font-semibold">{title}</p>
      <div className="">
        <p className="sm:text-sm tracking-wide">{description}</p>
      </div>
      <div>
        <div className="text-sm text-slate-400 flex sm:justify-between items-center flex-wrap gap-4 sm:gap-2">
          <p>Creator-@{creator}</p>
          <p>{formatDate(new Date(postedAt))}</p>
        </div>
        <ul className="flex space-x-2 text-sky-700 flex-wrap mt-2">
          {tags.map((tag, i) => (
            <TagsList key={i} tag={tag} />
          ))}
        </ul>
      </div>
        <div className="bg-sky-950 p-2 rounded-sm ml-auto">
          <p className="cursor-pointer text-center ">
            {language}
          </p>
        </div>
    </li>
  );
};

export default TipsItem;
