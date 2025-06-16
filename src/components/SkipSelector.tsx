import React, { useState } from "react";
import SkipCard from "./SkipCard";
const SkipSelector = ({ skips, selectedSkip, handleSelect }) => {
  const [sortOption, setSortOption] = useState("size");
  // Sort skips based on selected option
  const sortedSkips = [...skips].sort((a, b) => {
    if (sortOption === "size") return a.size - b.size;
    if (sortOption === "price") return a.price_before_vat - b.price_before_vat;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Skip Size
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect skip size for your project. All skips include a
            14-day hire period.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-full shadow-sm px-4 py-2 flex items-center">
              <span className="text-gray-600 mr-2">Sort by:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent border-none focus:ring-0 font-medium text-blue-600"
              >
                <option value="size">Size (Smallest First)</option>
                <option value="price">Price (Lowest First)</option>
              </select>
            </div>

            <div className="bg-white rounded-full shadow-sm px-4 py-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Postcode: NR32</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedSkips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={skip.id === selectedSkip?.id}
              handleSelect={handleSelect}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need help choosing?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Our skip experts are ready to help you select the perfect size
                for your project.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-xl mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Call Us</h3>
                    <p className="opacity-90">0800 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-xl mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Live Chat</h3>
                    <p className="opacity-90">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-xl mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Skip Guide</h3>
                    <p className="opacity-90">Find the right size</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelector;
