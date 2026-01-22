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

  // Determine sizing styles based on orientation with min/max constraints
  const getSizeStyles = (): React.CSSProperties => {
    if (isPortrait === null) {
      return { maxWidth: "100%", maxHeight: "90vh" };
    }
    if (isPortrait) {
      // Portrait: narrower with min/max width constraints
      return {
        minWidth: "280px",
        maxWidth: "min(450px, 50vw)",
        maxHeight: "85vh",
      };
    }
    // Landscape: wider with min/max width constraints
    return {
      minWidth: "320px",
      maxWidth: "min(900px, 85vw)",
      maxHeight: "70vh",
    };
  };

  return (
    <div ref={ref} className="w-full flex justify-center items-center overflow-hidden">
      <motion.div
        style={{ y, scale, opacity }}
        className="overflow-hidden flex justify-center"
      >
        <img
          src={src}
          alt={alt}
          style={getSizeStyles()}
          className={`w-auto h-auto object-contain transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};
