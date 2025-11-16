import { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  blurDataURL?: string;
}

export const LazyImage = ({ src, alt, className, skeletonClassName, blurDataURL }: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Generate a simple blur placeholder
  const placeholderStyle = blurDataURL
    ? {
        backgroundImage: `url(${blurDataURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div ref={imgRef} className="relative w-full h-full overflow-hidden" style={placeholderStyle}>
      {/* Blur placeholder background */}
      {isLoading && (
        <div className="absolute inset-0 pointer-events-none">
          <Skeleton className={cn("w-full h-full", skeletonClassName)} />
        </div>
      )}
      
      {/* Actual image - only load when in viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            className,
            "transition-all duration-700 ease-out",
            isLoading ? "opacity-0 scale-105 blur-lg" : "opacity-100 scale-100 blur-0"
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          loading="lazy"
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted pointer-events-none">
          <p className="text-muted-foreground text-sm">Failed to load image</p>
        </div>
      )}
    </div>
  );
};
