import { useState } from "react";
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

  const editorialImages = [
    editorial1, editorial2, editorial3, editorial4, editorial5, editorial6,
    editorial7, editorial8, editorial9, editorial10, editorial11, editorial12,
    editorial13, editorial14, editorial15, editorial16, editorial17, editorial18,
    editorial19, editorial20, editorial21, editorial22, editorial23, editorial24
  ];

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

      {/* Editorial Grid - 6 Columns with 2px margins like Iconic */}
      <section className="pb-20 bg-background">
        <div className="px-[2px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[2px]">
            {editorialImages.map((img, index) => (
              <div 
                key={index} 
                className="aspect-[3/4] overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <LazyImage
                  src={img}
                  alt={`Editorial ${index + 1}`}
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
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

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] px-16">
            <img
              src={editorialImages[selectedImage]}
              alt={`Editorial ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
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

          {/* Image Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {editorialImages.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EditorialPage;
