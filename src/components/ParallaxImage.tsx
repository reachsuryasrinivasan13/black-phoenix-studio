import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ParallaxImage = ({ src, alt, className = "" }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setIsPortrait(img.naturalHeight > img.naturalWidth);
    setIsLoaded(true);
  };

  // Determine sizing classes based on orientation
  const getSizeClasses = () => {
    if (isPortrait === null) return "max-w-full max-h-[90vh]";
    if (isPortrait) {
      // Portrait: taller, limit width more
      return "max-w-[50%] md:max-w-[40%] lg:max-w-[35%] max-h-[90vh]";
    }
    // Landscape: wider, use more horizontal space
    return "max-w-full md:max-w-[85%] lg:max-w-[80%] max-h-[75vh]";
  };

  return (
    <div ref={ref} className="w-full flex justify-center overflow-hidden">
      <motion.div
        style={{ y, scale, opacity }}
        className="overflow-hidden"
      >
        <img
          src={src}
          alt={alt}
          className={`w-auto h-auto object-contain transition-all duration-700 ${getSizeClasses()} ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};
