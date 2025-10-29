import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolioItems = [
    {
      id: "priya-rahul",
      src: portfolio1,
      alt: "Traditional Indian wedding ceremony",
      title: "Priya & Rahul",
      category: "Indian",
      excerpt: "Let's call this our 'Happy New Year Wedding'. We welcomed 2024 partying with Reva and Zach and we couldn't have asked for a better beginning for the new year.",
    },
    {
      id: "sara-john",
      src: portfolio2,
      alt: "Romantic engagement photoshoot",
      title: "Sara & John",
      category: "International",
      excerpt: "An evening of love, style and blend of two cultures in the heart of Singapore.",
    },
    {
      id: "meera-arjun",
      src: portfolio3,
      alt: "Grand wedding reception celebration",
      title: "Alia & Ranbir, Mumbai",
      category: "Indian",
      excerpt: "An unprecedented scoop of this generation decided to get married in the simplest possible way - in their balcony surrounded by only 30 of their closest friends and family members.",
    },
    {
      id: "brand-campaign",
      src: portfolio4,
      alt: "Professional photography",
      title: "Kiara & Siddharth",
      category: "Indian",
      excerpt: "Professional commercial photography showcasing products and brand identity with creative vision and attention to detail.",
    },
    {
      id: "birthday-princess",
      src: portfolio5,
      alt: "Birthday celebration photography",
      title: "Deepika & Ranveer",
      category: "Indian",
      excerpt: "Capturing the magical moments of a special birthday celebration filled with joy, laughter, and precious memories.",
    },
    {
      id: "fashion-editorial",
      src: portfolio6,
      alt: "Professional model portfolio shoot",
      title: "Priyanka & Nick",
      category: "International",
      excerpt: "High-fashion editorial photography showcasing style, elegance, and the art of professional modeling.",
    },
  ];

  const categories = ["All", "International", "Indian"];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4">
              Photography
            </h1>
            <div className="mb-8">
              <p className="text-muted-foreground text-lg">
                Select: {" "}
                <span className="inline-flex gap-1">
                  {categories.map((category, index) => (
                    <span key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`hover:text-foreground transition-colors ${
                          selectedCategory === category
                            ? "text-foreground font-medium underline"
                            : "text-muted-foreground"
                        }`}
                      >
                        {category}
                      </button>
                      {index < categories.length - 1 && <span className="text-muted-foreground"> | </span>}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - 4 Columns with White Background */}
      <section className="py-20">
        <div className="bg-card mx-4 sm:mx-8 lg:mx-16 p-8 sm:p-12 lg:p-16 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
