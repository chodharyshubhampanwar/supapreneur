import React from "react";
import { NewsItem as NewsItemType } from "../types/types";

const NewsItem: React.FC<NewsItemType> = ({ title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block mb-4 hover:bg-gray-100 p-2 rounded transition-colors"
  >
    <div>
      <h5 className="font-bold">{title}</h5>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </a>
);

export default NewsItem;
