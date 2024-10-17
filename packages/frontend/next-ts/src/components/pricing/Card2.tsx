import React from 'react';

const Card2 = ({ title, price, features, buttonText }) => {
  const selectPlan = () => {
    console.log(`Selected plan: ${title}`);
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{title}</h3>
      <p className="text-4xl font-bold text-gray-800 mb-6">
        {price}<span className="text-lg font-medium text-gray-500">/ month</span>
      </p>
      <ul className="space-y-3 mb-8 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={selectPlan}
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card2;
