import React from 'react';

const Card1 = ({ title, price, features, buttonText }) => {
  return (
    <div className="w-80 h-auto overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg">
      <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-6 text-center rounded-t-lg">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-5xl font-extrabold text-white">
          ${price}<span className="text-lg font-normal">/mo</span>
        </p>
      </div>
      <div className="p-6 bg-white">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-100 rounded-b-lg">
        <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-3 px-4 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card1;
