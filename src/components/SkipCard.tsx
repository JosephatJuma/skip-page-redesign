import React from "react";
type SkipCardProps = {
  skip: any;
  isSelected?: boolean;
  handleSelect?: (skip: any) => void;
};

/**
 * A card component for displaying skip details.
 *
 * @prop {Object} skip - An object containing the skip details.
 * @prop {boolean} [isSelected=false] - Whether the skip is currently selected.
 * @prop {function} [handleSelect] - A function to call when the skip is selected.
 * @returns {JSX.Element}
 */

const SkipCard = ({
  skip,
  isSelected = false,
  handleSelect,
}: SkipCardProps) => {
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));

  // Calculate dimensions based on skip size
  const dimensions = {
    width:
      skip.size <= 6 ? `${skip.size * 0.9 + 2.5}m` : `${skip.size * 0.75 + 3}m`,
    height: skip.size <= 6 ? "1.8m" : "2.2m",
    depth: skip.size <= 6 ? "1.5m" : "2.0m",
  };

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        isSelected ? "ring-4 ring-green-500" : "ring-1 ring-gray-200"
      }`}
    >
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {skip.size} Yard Skip
            </h3>
            <p className="text-gray-600 mt-1">
              Perfect for {getSkipUseCase(skip.size)}
            </p>
          </div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
            {skip.hire_period_days} day hire
          </div>
        </div>

        <div className="mb-5 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="font-medium">Home Use</span>
            </div>

            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
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
              <span className="font-medium">Includes VAT</span>
            </div>

            {skip.allowed_on_road && (
              <div className="flex items-center">
                <div className="bg-amber-100 p-2 rounded-lg mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Road Permit</span>
              </div>
            )}

            {skip.allows_heavy_waste && (
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <span className="font-medium">Heavy Waste</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 mb-5">
          <div className="text-4xl font-bold text-gray-900 mb-1">
            £{totalPrice}
          </div>
          <p className="text-gray-500 text-sm">
            Includes delivery & collection
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm mb-5">
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="text-gray-500">Dimensions</div>
            <div className="font-medium">
              {dimensions.width} × {dimensions.height} × {dimensions.depth}
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="text-gray-500">Capacity</div>
            <div className="font-medium">~{skip.size * 15} bin bags</div>
          </div>
        </div>

        <button
          className={`w-full py-3 px-4 rounded-xl font-bold transition-all ${
            isSelected
              ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl"
              : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white hover:shadow-lg"
          }`}
          onClick={() => handleSelect?.(skip)}
        >
          {isSelected ? "Selected" : "Select this skip"}
        </button>
      </div>
    </div>
  );
};

// Helper function to generate use cases based on skip size
const getSkipUseCase = (size) => {
  if (size <= 4) return "small home projects";
  if (size <= 6) return "medium renovations";
  if (size <= 10) return "large home projects";
  if (size <= 14) return "construction sites";
  return "commercial projects";
};

export default SkipCard;
