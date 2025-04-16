// src/pages/Markets.js
import React from 'react';

const markets = [
  {
    title: 'Forex',
    description: 'Trade major, minor, and exotic currency pairs with competitive spreads and fast execution.',
    image: 'https://source.unsplash.com/featured/?forex,finance'
  },
  {
    title: 'Commodities',
    description: 'Access gold, silver, oil, and more. Diversify your portfolio with global commodities.',
    image: 'https://source.unsplash.com/featured/?gold,oil'
  },
  {
    title: 'Indices',
    description: 'Trade global indices like S&P 500, NASDAQ, FTSE 100, and more.',
    image: 'https://source.unsplash.com/featured/?stocks,index'
  },
  {
    title: 'Crypto',
    description: 'Explore the world of cryptocurrency with Bitcoin, Ethereum, and other digital assets.',
    image: 'https://source.unsplash.com/featured/?crypto,bitcoin'
  },
];

const Markets = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Markets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {markets.map((market, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition duration-300"
            >
              <img
                src={market.image}
                alt={market.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{market.title}</h3>
                <p className="text-gray-600">{market.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Markets;
