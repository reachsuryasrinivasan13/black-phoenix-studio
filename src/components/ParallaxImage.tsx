import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LazyImage } from "./LazyImage";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ParallaxImage = ({ src, alt, className = "" }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <div ref={ref} className="w-full flex justify-center overflow-hidden">
      <motion.div
        style={{ y, scale, opacity }}
        className="overflow-hidden"
      >
        <LazyImage
          src={src}
          alt={alt}
          className={className}
        />
      </motion.div>
    </div>
  );
};
