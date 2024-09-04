import React from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    title: "Blue Tokai raises $35 million",
    time: "52m ago",
    readers: 13389,
    link: "https://entrackr.com/2024/08/blue-tokai-raises-35-mn-in-series-c-led-by-verlinvest/",
  },
  {
    title: "What's next for India's space tech",
    time: "10h ago",
    readers: 1668,
    link: "https://entrackr.com/2024/08/blue-tokai-raises-35-mn-in-series-c-led-by-verlinvest/",
  },
  {
    title: "Floods claim several lives",
    time: "43m ago",
    readers: 2000,
    link: "https://entrackr.com/2024/08/blue-tokai-raises-35-mn-in-series-c-led-by-verlinvest/",
  },
  // Add more news items here...
];

const NewsList: React.FC = () => {
  return (
    <div className="max-w-md mx-auto   rounded-lg px-4 py-4">
      <h1 className="text-lg font-bold text-gray-900 mb-2">What's Happening</h1>
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          time={news.time}
          link={news.link}
        />
      ))}
    </div>
  );
};

export default NewsList;
