import React from "react";
type ErrorProps = {
  error: Error;
  handleRetry: () => void;
};
function SkipError({ error, handleRetry }: ErrorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>

      {/* Main content */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full">
        <div className="md:flex">
          {/* Illustration side */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute w-full h-3/5 bottom-0 bg-gradient-to-r from-blue-300 to-blue-400 rounded-lg"></div>
              <div className="absolute w-3/4 h-1/4 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-t-lg"></div>

              {/* Warning symbol */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-4 h-16 bg-white rounded-full"></div>
                  <div className="w-4 h-4 bg-white rounded-full absolute bottom-4"></div>
                </div>
              </div>

              {/* Floating debris */}
              <div className="absolute top-8 left-8 w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
              <div
                className="absolute top-12 right-10 w-5 h-5 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute bottom-16 left-12 w-4 h-4 bg-amber-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>

            <h2 className="mt-6 text-white text-2xl font-bold text-center">
              Oops! Something went wrong
            </h2>
          </div>

          {/* Error details */}
          <div className="md:w-3/5 p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Skip Loading Error
              </h1>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-6">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-red-800 font-medium">
                    {error?.message || "An unexpected error occurred"}
                  </p>
                  <p className="text-red-700 mt-2 text-sm">
                    We couldn't load the skip information at this time.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What you can do:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <span>
                    Try reloading the page to see if the problem resolves
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
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
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <span>Check your internet connection and try again</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span>Contact our support team for immediate assistance</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRetry}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Reload Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkipError;
