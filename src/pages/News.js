// src/pages/News.js
import React from 'react';

const newsItems = [
  {
    title: "Global Markets Surge After Economic Reports",
    date: "April 12, 2025",
    summary: "Stocks and currencies rallied after stronger-than-expected employment data boosted investor sentiment.",
    image: "https://source.unsplash.com/featured/?news,stocks"
  },
  {
    title: "Oil Prices Hit New Highs",
    date: "April 10, 2025",
    summary: "Brent crude continues to climb as supply concerns mount amid geopolitical tensions.",
    image: "https://source.unsplash.com/featured/?oil,market"
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">{news.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                <p className="text-gray-600">{news.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
