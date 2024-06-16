import React from "react";
import { convertStringCase } from "../utils/string-conversion";

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-white-200 text-gray-800 text-sm font-normal mr-2 mb-2  rounded-full border px-2 border-gray-300"
        >
          {convertStringCase(tag, "capital")}
        </span>
      ))}
    </div>
  );
};

export default Tags;
