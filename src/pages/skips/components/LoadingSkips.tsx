import React from "react";
import { Skeleton } from "../../../components/ui/skeleton";

function LoadingSkips() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/40 p-4">
      <div className="relative w-48 h-56 mb-8 md:w-56 md:h-64">
        <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-r from-primary to-indigo-600 rounded-lg shadow-xl overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-green-400 to-emerald-500 animate-fill">
            <div className="absolute top-0 left-0 right-0 h-2 bg-white opacity-20 animate-shine"></div>
          </div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-2 w-4 h-4 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/3 right-4 w-3 h-3 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-1/3 left-6 w-5 h-5 border-2 border-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/4">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-primary/80 to-indigo-700 rounded-t-lg"></div>
          <div className="absolute top-full left-0 right-0 h-0 border-t-[20px] border-l-[20px] border-r-[20px] border-t-primary border-l-transparent border-r-transparent"></div>
        </div>

        <div className="absolute top-4 left-4 w-3 h-3 bg-amber-500 rounded-full animate-waste1"></div>
        <div className="absolute top-8 right-6 w-4 h-4 bg-green-500 rounded-full animate-waste2"></div>
        <div className="absolute top-12 left-10 w-2 h-2 bg-red-500 rounded-full animate-waste3"></div>
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-pulse">
          Finding Best Skips
        </h2>
        <p className="text-muted-foreground">
          We're searching our network for the perfect skip sizes in your area
        </p>
      </div>

      <div className="w-full max-w-xs h-2 bg-muted rounded-full overflow-hidden mt-8">
        <div className="h-full bg-gradient-to-r from-primary to-indigo-600 rounded-full animate-progress"></div>
      </div>

      {/* Skeleton cards for loading state */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-background border rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between mb-4">
              <Skeleton className="h-8 w-32 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-full rounded" />
              ))}
            </div>

            <Skeleton className="h-10 w-full rounded-xl mb-5" />

            <div className="grid grid-cols-2 gap-3">
              <Skeleton className="h-16 rounded-lg" />
              <Skeleton className="h-16 rounded-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Animated dots */}
      <div className="mt-8 flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSkips;
