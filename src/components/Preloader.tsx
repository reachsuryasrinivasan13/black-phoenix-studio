import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Minimum display time to show the preloader
    const minLoadTime = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation before removing
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 1500);

    return () => clearTimeout(minLoadTime);
  }, []);

  if (!isLoading && !isExiting) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700",
        isExiting ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="text-center space-y-6">
        {/* Logo or Brand Name */}
        <div className="animate-fade-in">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-wider">
            Black Phoenix
          </h1>
          <p className="font-playfair text-lg sm:text-xl text-muted-foreground mt-2 italic">
            Photography & Films
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-2 animate-pulse">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isExiting ? "100%" : "0%",
              transitionDelay: "0ms"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
