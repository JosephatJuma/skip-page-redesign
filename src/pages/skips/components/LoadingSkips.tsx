import { Skeleton } from "@/components/ui/skeleton";

function LoadingSkips() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/40 p-4">
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
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
        {[...Array(8)].map((_, i) => (
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
