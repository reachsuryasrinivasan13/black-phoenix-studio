import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImage from "@/assets/home-hero-banner.jpg";
import modernApproach from "@/assets/modern-approach.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Index = () => {
  const collageImages = [
    portfolio1, portfolio2, portfolio3, portfolio4, portfolio5,
    portfolio6, portfolio1, portfolio2, portfolio3, portfolio4,
    portfolio5, portfolio6, portfolio1, portfolio2, portfolio3
  ];

  const featuredPortfolios = [
    { id: "priya-rahul", image: portfolio1, title: "Priya & Rahul", category: "Indian" },
    { id: "sara-john", image: portfolio2, title: "Sara & John", category: "International" },
    { id: "meera-arjun", image: portfolio3, title: "Meera & Arjun", category: "Indian" },
    { id: "brand-campaign", image: portfolio4, title: "Brand Campaign", category: "Commercial" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-screen w-full pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Black Phoenix Photography - Professional Wedding Photography"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>
      </section>

      {/* Modern Approach Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                Modern Approach
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Considered to be the epitome of Modern Photography and Filmmaking, Black Phoenix has transformed the Indian Wedding landscape on a regular basis. For almost a decade Black Phoenix has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.
                </p>
                <p>
                  Awarded as the Wedding Filmmaker of the year for multiple consecutive years along with numerous other awards, Black Phoenix is recognized for its award winning films and exceptional photography.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={modernApproach}
                alt="Modern photography approach"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Collage Section - 5x3 Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
            {collageImages.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Section - 4x1 Layout */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-center mb-12">
            Photography
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredPortfolios.map((portfolio) => (
              <Link 
                key={portfolio.id}
                to={`/portfolio/${portfolio.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                  {portfolio.title}
                </h3>
                <p className="text-muted-foreground">{portfolio.category}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/portfolio"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Photography Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
