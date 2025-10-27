import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
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
      category: "Wedding",
      excerpt: "A beautiful celebration of love with traditional ceremonies and vibrant colors capturing the essence of Indian wedding traditions.",
    },
    {
      id: "sara-john",
      src: portfolio2,
      alt: "Romantic engagement photoshoot",
      title: "Sara & John",
      category: "Engagement",
      excerpt: "An intimate engagement session capturing the pure joy and excitement of two souls beginning their journey together.",
    },
    {
      id: "meera-arjun",
      src: portfolio3,
      alt: "Grand wedding reception celebration",
      title: "Meera & Arjun",
      category: "Reception",
      excerpt: "An elegant reception filled with laughter, dance, and unforgettable moments as families came together in celebration.",
    },
    {
      id: "brand-campaign",
      src: portfolio4,
      alt: "Professional commercial photography",
      title: "Brand Campaign",
      category: "Commercial",
      excerpt: "Professional commercial photography showcasing products and brand identity with creative vision and attention to detail.",
    },
    {
      id: "birthday-princess",
      src: portfolio5,
      alt: "Birthday celebration photography",
      title: "Little Princess Turns 5",
      category: "Birthday",
      excerpt: "Capturing the magical moments of a special birthday celebration filled with joy, laughter, and precious memories.",
    },
    {
      id: "fashion-editorial",
      src: portfolio6,
      alt: "Professional model portfolio shoot",
      title: "Fashion Editorial",
      category: "Model",
      excerpt: "High-fashion editorial photography showcasing style, elegance, and the art of professional modeling.",
    },
  ];

  const categories = ["All", "Wedding", "Engagement", "Reception", "Birthday", "Commercial", "Model"];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Portfolio
            </h1>
            <p className="text-muted-foreground text-xl mb-8">
              A glimpse into our work showcasing authentic moments and timeless memories
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all font-medium ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-primary/10 border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-playfair text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <span className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center">
                      View Gallery →
                    </span>
                  </div>
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
