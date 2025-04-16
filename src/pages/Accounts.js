// src/pages/Accounts.js
import React from 'react';

const accountsData = [
  {
    title: "Standard Account",
    features: [
      "Low spreads from 1.2 pips",
      "Leverage up to 1:500",
      "No commissions",
      "Minimum deposit: $100"
    ]
  },
  {
    title: "ECN Account",
    features: [
      "Ultra-low spreads from 0.0 pips",
      "Leverage up to 1:500",
      "Commission: $7/lot",
      "Minimum deposit: $200"
    ]
  },
  {
    title: "Demo Account",
    features: [
      "Real market conditions",
      "Unlimited usage",
      "Risk-free trading environment",
      "Best for beginners"
    ]
  }
];

const Accounts = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Account Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accountsData.map((account, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{account.title}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {account.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                Open {account.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
