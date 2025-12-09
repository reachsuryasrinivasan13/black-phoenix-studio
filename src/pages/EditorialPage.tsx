import { useState, useEffect, useRef, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import editorial images
import editorial1 from "@/assets/editorial/editorial-1.jpg";
import editorial2 from "@/assets/editorial/editorial-2.jpg";
import editorial3 from "@/assets/editorial/editorial-3.jpg";
import editorial4 from "@/assets/editorial/editorial-4.jpg";
import editorial5 from "@/assets/editorial/editorial-5.jpg";
import editorial6 from "@/assets/editorial/editorial-6.jpg";
import editorial7 from "@/assets/editorial/editorial-7.jpg";
import editorial8 from "@/assets/editorial/editorial-8.jpg";
import editorial9 from "@/assets/editorial/editorial-9.jpg";
import editorial10 from "@/assets/editorial/editorial-10.jpg";
import editorial11 from "@/assets/editorial/editorial-11.jpg";
import editorial12 from "@/assets/editorial/editorial-12.jpg";
import editorial13 from "@/assets/editorial/editorial-13.jpg";
import editorial14 from "@/assets/editorial/editorial-14.jpg";
import editorial15 from "@/assets/editorial/editorial-15.jpg";
import editorial16 from "@/assets/editorial/editorial-16.jpg";
import editorial17 from "@/assets/editorial/editorial-17.jpg";
import editorial18 from "@/assets/editorial/editorial-18.jpg";
import editorial19 from "@/assets/editorial/editorial-19.jpg";
import editorial20 from "@/assets/editorial/editorial-20.jpg";
import editorial21 from "@/assets/editorial/editorial-21.jpg";
import editorial22 from "@/assets/editorial/editorial-22.jpg";
import editorial23 from "@/assets/editorial/editorial-23.jpg";
import editorial24 from "@/assets/editorial/editorial-24.jpg";

const EditorialPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [columnHeights, setColumnHeights] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const editorialImages = [
    editorial1, editorial2, editorial3, editorial4, editorial5, editorial6,
    editorial7, editorial8, editorial9, editorial10, editorial11, editorial12,
    editorial13, editorial14, editorial15, editorial16, editorial17, editorial18,
    editorial19, editorial20, editorial21, editorial22, editorial23, editorial24
  ];

  // Calculate columns based on screen size
  const getColumnCount = useCallback(() => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 768) return 3;
    if (window.innerWidth < 1024) return 4;
    return 5;
  }, []);

  const [columnCount, setColumnCount] = useState(getColumnCount());

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getColumnCount]);

  // Distribute images into columns (masonry layout)
  const getColumns = useCallback(() => {
    const columns: string[][] = Array.from({ length: columnCount }, () => []);
    const heights: number[] = Array(columnCount).fill(0);
    
    // Assign random heights for masonry effect
    const imageHeights = [200, 250, 300, 350, 280, 320];
    
    editorialImages.forEach((img, index) => {
      const shortestColumn = heights.indexOf(Math.min(...heights));
      columns[shortestColumn].push(img);
      heights[shortestColumn] += imageHeights[index % imageHeights.length];
    });
    
    return columns;
  }, [columnCount, editorialImages]);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? editorialImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === editorialImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  const getImageIndex = (img: string) => editorialImages.indexOf(img);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Editorial
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A curated collection of fashion and lifestyle editorial photography showcasing our artistic vision and creative storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-20 bg-background">
        <div className="px-2 sm:px-4 lg:px-8" ref={containerRef}>
          <div className="flex gap-2 sm:gap-3 lg:gap-4">
            {getColumns().map((column, colIndex) => (
              <div key={colIndex} className="flex-1 flex flex-col gap-2 sm:gap-3 lg:gap-4">
                {column.map((img, imgIndex) => {
                  const globalIndex = getImageIndex(img);
                  // Varying aspect ratios for masonry effect
                  const aspectRatios = ['aspect-[3/4]', 'aspect-[2/3]', 'aspect-[4/5]', 'aspect-square', 'aspect-[3/5]'];
                  const aspectRatio = aspectRatios[(colIndex + imgIndex) % aspectRatios.length];
                  
                  return (
                    <div 
                      key={`${colIndex}-${imgIndex}`}
                      className={`${aspectRatio} overflow-hidden cursor-pointer group`}
                      onClick={() => setSelectedImage(globalIndex)}
                    >
                      <LazyImage
                        src={img}
                        alt={`Editorial ${globalIndex + 1}`}
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Viewer Modal with Thumbnail Strip */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors z-10"
            aria-label="Close viewer"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Main Image Area */}
          <div className="flex-1 flex items-center justify-center relative">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            {/* Image */}
            <div className="max-w-7xl max-h-[calc(100vh-140px)] px-16">
              <img
                src={editorialImages[selectedImage]}
                alt={`Editorial ${selectedImage + 1}`}
                className="max-w-full max-h-[calc(100vh-140px)] object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="h-24 bg-black/80 border-t border-white/10 px-4 py-2 overflow-x-auto">
            <div className="flex gap-2 h-full justify-center">
              {editorialImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`h-full aspect-[3/4] flex-shrink-0 overflow-hidden transition-all duration-200 ${
                    selectedImage === index 
                      ? "ring-2 ring-white opacity-100" 
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {editorialImages.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EditorialPage;
