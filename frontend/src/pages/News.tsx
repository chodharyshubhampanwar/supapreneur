// import React, { useState, useEffect } from "react";
// import { NewsItem as NewsItemType } from "../types/types";
// import { getNews } from "../api/api";
// import NewsItem from "../components/NewsItem";

// const News: React.FC = () => {
//   const [newsItems, setNewsItems] = useState<NewsItemType[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchNewsItem = async () => {
//       try {
//         const data = await getNews();
//         setNewsItems(data.news);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch news item");
//         setIsLoading(false);
//       }
//     };

//     fetchNewsItem();
//   }, []);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!newsItems.length) return null;

//   return (
//     <>
//       {newsItems.map((item: NewsItemType, index: number) => (
//         <NewsItem
//           key={index}
//           newsItem={item}
//           titleSize="2rem"
//           descriptionSize="1.2rem"
//         />
//       ))}
//     </>
//   );
// };

// export default News;
