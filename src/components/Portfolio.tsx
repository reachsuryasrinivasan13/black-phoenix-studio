import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolioItems = [
    {
      src: portfolio1,
      alt: "Traditional Indian wedding ceremony",
      title: "Priya & Rahul",
      category: "Wedding",
      description: "A beautiful celebration of love with traditional ceremonies and vibrant colors capturing the essence of Indian wedding traditions.",
    },
    {
      src: portfolio2,
      alt: "Romantic engagement photoshoot",
      title: "Sara & John",
      category: "Engagement",
      description: "An intimate engagement session capturing the pure joy and excitement of two souls beginning their journey together.",
    },
    {
      src: portfolio3,
      alt: "Grand wedding reception celebration",
      title: "Meera & Arjun",
      category: "Reception",
      description: "An elegant reception filled with laughter, dance, and unforgettable moments as families came together in celebration.",
    },
    {
      src: portfolio4,
      alt: "Professional commercial photography",
      title: "Brand Campaign",
      category: "Commercial",
      description: "Professional commercial photography showcasing products and brand identity with creative vision and attention to detail.",
    },
    {
      src: portfolio5,
      alt: "Birthday celebration photography",
      title: "Little Princess Turns 5",
      category: "Birthday",
      description: "Capturing the magical moments of a special birthday celebration filled with joy, laughter, and precious memories.",
    },
    {
      src: portfolio6,
      alt: "Professional model portfolio shoot",
      title: "Fashion Editorial",
      category: "Model",
      description: "High-fashion editorial photography showcasing style, elegance, and the art of professional modeling.",
    },
  ];

  const categories = ["All", "Wedding", "Engagement", "Reception", "Birthday", "Commercial", "Model"];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A glimpse into our work showcasing authentic moments and timeless memories
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="font-playfair text-xl">
                    {item.title}
                  </CardTitle>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-primary hover:text-accent transition-colors font-medium">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
