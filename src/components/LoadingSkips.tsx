function LoadingSkips() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Animated skip bin */}
      <div className="relative w-48 h-56 mb-8">
        {/* Skip body */}
        <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-xl overflow-hidden">
          {/* Filling animation */}
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-green-400 to-emerald-500 animate-fill">
            <div className="absolute top-0 left-0 right-0 h-2 bg-white opacity-20 animate-shine"></div>
          </div>

          {/* Bin pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-2 w-4 h-4 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/3 right-4 w-3 h-3 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-1/3 left-6 w-5 h-5 border-2 border-white rounded-full"></div>
          </div>
        </div>

        {/* Skip opening */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/4">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-lg"></div>
          <div className="absolute top-full left-0 right-0 h-0 border-t-[20px] border-l-[20px] border-r-[20px] border-t-blue-600 border-l-transparent border-r-transparent"></div>
        </div>

        {/* Moving waste animation */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-amber-500 rounded-full animate-waste1"></div>
        <div className="absolute top-8 right-6 w-4 h-4 bg-green-500 rounded-full animate-waste2"></div>
        <div className="absolute top-12 left-10 w-2 h-2 bg-red-500 rounded-full animate-waste3"></div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 animate-pulse">
          Finding Best Skips
        </h2>
        <p className="text-gray-600 max-w-md">
          We're searching our network for the perfect skip sizes in your area
        </p>
      </div>

      {/* Progress indicator */}
      <div className="w-full max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden mt-8">
        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-progress"></div>
      </div>

      {/* Additional decorative elements */}
      <div className="mt-8 flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSkips;
