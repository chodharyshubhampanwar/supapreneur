import React from "react";

interface NewsCardProps {
  title: string;
  time: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, time, link }) => {
  return (
    <div className="py-2 border-b border-gray-200">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="font-medium text-base text-gray-700">{title}</h2>
      </a>
      <div className="flex items-center text-gray-500 text-sm">
        <span className="mr-2">{time}</span>
        {/* <span>&bull;</span> */}
        {/* <span className="ml-2">{readers} readers</span> */}
      </div>
    </div>
  );
};

export default NewsCard;
