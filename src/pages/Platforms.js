// src/pages/Platforms.js
import React from 'react';

const platforms = [
  {
    title: 'MetaTrader 4 (MT4)',
    description: 'The world’s most popular Forex trading platform. Advanced charting, technical analysis tools, and expert advisors.',
    image: 'https://source.unsplash.com/featured/?metatrader,charts'
  },
  {
    title: 'MetaTrader 5 (MT5)',
    description: 'Enhanced trading features with more indicators, timeframes, and a built-in economic calendar.',
    image: 'https://source.unsplash.com/featured/?forex,graph'
  },
  {
    title: 'WebTrader',
    description: 'Trade directly from your browser. No download required. Access markets from any device, anytime.',
    image: 'https://source.unsplash.com/featured/?browser,trading'
  },
  {
    title: 'Mobile Apps',
    description: 'Stay connected with our Android and iOS trading apps. Trade on the go with full functionality.',
    image: 'https://source.unsplash.com/featured/?mobile,finance'
  },
];

const Platforms = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Trading Platforms</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={platform.image}
                alt={platform.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{platform.title}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;
