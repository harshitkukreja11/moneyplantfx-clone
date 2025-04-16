// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">About MoneyPlantFX</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              At <strong>MoneyPlantFX</strong>, we are committed to empowering traders and investors with the tools, education, and support they need to thrive in global financial markets.
            </p>
            <p className="text-gray-600">
              Our platform offers state-of-the-art trading technologies, fast execution, tight spreads, and a wide range of instruments — including Forex, indices, commodities, and cryptocurrencies.
            </p>
            <p className="text-gray-600">
              We prioritize transparency, security, and innovation. Whether you're a beginner or an experienced trader, our resources are built to help you grow and succeed.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Regulated & Secure</li>
              <li>24/7 Customer Support</li>
              <li>Educational Webinars & Tutorials</li>
              <li>Real-Time Trading Tools</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div>
            <img
              src="https://source.unsplash.com/600x400/?forex,finance"
              alt="About MoneyPlantFX"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
