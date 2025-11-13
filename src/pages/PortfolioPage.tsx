import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
import portfolio1 from "@/assets/portfolio/priyaAndRahul/image-1.jpg";
import portfolio2 from "@/assets/portfolio/saraAndJohn/image-1.jpg";
import portfolio3 from "@/assets/portfolio/aliaAndRanbir/image-1.jpg";
import portfolio4 from "@/assets/portfolio/kiaraAndSiddharth/image-1.jpg";
import portfolio5 from "@/assets/portfolio/deepikaAndRanveer/image-1.jpg";
import portfolio6 from "@/assets/portfolio/priyankaAndNick/image-1.jpg";

const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: "priya-rahul",
      src: portfolio1,
      alt: "Traditional Indian wedding ceremony",
      title: "Priya & Rahul",
      category: "wedding",
      excerpt: "Let's call this our 'Happy New Year Wedding'. We welcomed 2024 partying with Reva and Zach and we couldn't have asked for a better beginning for the new year.",
    },
    {
      id: "sara-john",
      src: portfolio2,
      alt: "Romantic engagement photoshoot",
      title: "Sara & John",
      category: "engagement",
      excerpt: "An evening of love, style and blend of two cultures in the heart of Singapore.",
    },
    {
      id: "alia-ranbir",
      src: portfolio3,
      alt: "Grand wedding reception celebration",
      title: "Alia & Ranbir",
      category: "wedding",
      excerpt: "An unprecedented scoop of this generation decided to get married in the simplest possible way - in their balcony surrounded by only 30 of their closest friends and family members.",
    },
    {
      id: "kiara-siddharth",
      src: portfolio4,
      alt: "Wedding reception photography",
      title: "Kiara & Siddharth",
      category: "wedding reception",
      excerpt: "A grand celebration of love with stunning décor, joyful moments, and unforgettable memories captured in every frame.",
    },
    {
      id: "deepika-ranveer",
      src: portfolio5,
      alt: "Birthday celebration photography",
      title: "Deepika & Ranveer",
      category: "birthday",
      excerpt: "Capturing the magical moments of a special birthday celebration filled with joy, laughter, and precious memories.",
    },
    {
      id: "priyanka-nick",
      src: portfolio6,
      alt: "Engagement photoshoot",
      title: "Priyanka & Nick",
      category: "engagement",
      excerpt: "High-fashion engagement photography showcasing style, elegance, and the beginning of a beautiful journey together.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground">
              Photography
            </h1>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - 4 Columns with White Background */}
      <section className="py-8">
        <div className="bg-card mx-4 sm:mx-8 lg:mx-16 p-8 sm:p-12 lg:p-16 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <LazyImage
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
