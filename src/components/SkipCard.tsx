import React from "react";
type SkipCardProps = {
  size: number;
  price: number;
  isPopular: boolean;
};
const SkipCard = ({ size, price, isPopular }: SkipCardProps) => {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isPopular ? "ring-2 ring-green-500" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 transform rotate-12 translate-x-2 -translate-y-2 font-bold text-sm">
          POPULAR
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-gray-800">{size} Yard Skip</h3>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            14 day hire
          </div>
        </div>

        <div className="my-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-700">WE WANT MATE</span>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Dimensions:</span>
              <span className="font-medium">Approx. {size * 1.5}m x 1.8m</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">Capacity:</span>
              <span className="font-medium">{size * 15} bin bags</span>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-4">
          <div className="text-4xl font-bold text-gray-900">£{price}</div>
          <p className="text-gray-500 text-sm mt-1">
            Includes delivery & collection
          </p>
        </div>

        <button
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
            isPopular
              ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
          }`}
        >
          Select This Skip
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
