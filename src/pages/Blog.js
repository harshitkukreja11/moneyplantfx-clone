// src/pages/Blog.js
import React from 'react';

const blogPosts = [
  {
    title: "Top 5 Tips for New Forex Traders",
    author: "Team MoneyPlantFX",
    excerpt: "Starting your trading journey? Learn essential strategies to manage risk and stay ahead in the forex game.",
    image: "https://source.unsplash.com/featured/?forex,trading"
  },
  {
    title: "Understanding Technical Analysis",
    author: "John Doe",
    excerpt: "Dive into chart patterns, indicators, and how to apply them to real-world trading scenarios.",
    image: "https://source.unsplash.com/featured/?charts,technical"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-3">By {post.author}</p>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
