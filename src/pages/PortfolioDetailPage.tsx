import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const PortfolioDetailPage = () => {
  const { id } = useParams();

  const portfolioData: Record<string, any> = {
    "priya-rahul": {
      title: "Priya & Rahul",
      category: "Wedding",
      date: "December 2023",
      location: "Udaipur, Rajasthan",
      description: "Let's call this our 'Dream Wedding'. We welcomed the new year celebrating with Priya and Rahul and we couldn't have asked for a better beginning. This was quite an experience for us and the 500 guests who flew from all over India for this cross cultural union.",
      details: [
        "Wedding Planned by: Elegant Events",
        "Bride's Outfit: Sabyasachi, Manish Malhotra",
        "Groom's Outfit: Rohit Bal, Tarun Tahiliani",
        "Makeup: Namrata Soni",
        "Hair: Amit Thakur"
      ],
      coverImage: portfolio1,
      images: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6],
      videos: [
        { title: "Wedding Ceremony", thumbnail: portfolio1 },
        { title: "Reception Highlights", thumbnail: portfolio3 },
        { title: "Couple Portraits", thumbnail: portfolio2 }
      ]
    },
    "sara-john": {
      title: "Sara & John",
      category: "Engagement",
      date: "October 2023",
      location: "Goa, India",
      description: "An intimate engagement session capturing the pure joy and excitement of two souls beginning their journey together. Set against the beautiful beaches of Goa.",
      details: [
        "Location: Palolem Beach, Goa",
        "Bride's Outfit: Anita Dongre",
        "Groom's Outfit: Raymond",
        "Styling: Beach Elegance"
      ],
      coverImage: portfolio2,
      images: [portfolio2, portfolio1, portfolio3, portfolio4, portfolio5, portfolio6],
      videos: [
        { title: "Engagement Story", thumbnail: portfolio2 },
        { title: "Beach Moments", thumbnail: portfolio1 },
        { title: "Couple Journey", thumbnail: portfolio3 }
      ]
    },
    "meera-arjun": {
      title: "Meera & Arjun",
      category: "Reception",
      date: "November 2023",
      location: "Mumbai, Maharashtra",
      description: "An elegant reception filled with laughter, dance, and unforgettable moments as families came together in celebration of love and unity.",
      details: [
        "Venue: Taj Lands End, Mumbai",
        "Wedding Planned by: Weddings by Priyanka",
        "Bride's Outfit: Tarun Tahiliani",
        "Groom's Outfit: Raghavendra Rathore"
      ],
      coverImage: portfolio3,
      images: [portfolio3, portfolio1, portfolio2, portfolio4, portfolio5, portfolio6],
      videos: [
        { title: "Reception Highlights", thumbnail: portfolio3 },
        { title: "First Dance", thumbnail: portfolio1 },
        { title: "Family Moments", thumbnail: portfolio2 }
      ]
    },
    "brand-campaign": {
      title: "Brand Campaign",
      category: "Commercial",
      date: "September 2023",
      location: "Mumbai, Maharashtra",
      description: "Professional commercial photography showcasing products and brand identity with creative vision and attention to detail.",
      details: [
        "Client: Premium Fashion Brand",
        "Location: Studio Mumbai",
        "Creative Director: Vishal Sharma",
        "Art Direction: Modern Minimalism"
      ],
      coverImage: portfolio4,
      images: [portfolio4, portfolio1, portfolio2, portfolio3, portfolio5, portfolio6],
      videos: [
        { title: "Brand Story", thumbnail: portfolio4 },
        { title: "Product Showcase", thumbnail: portfolio1 },
        { title: "Behind The Scenes", thumbnail: portfolio2 }
      ]
    },
    "birthday-princess": {
      title: "Little Princess Turns 5",
      category: "Birthday",
      date: "August 2023",
      location: "Bangalore, Karnataka",
      description: "Capturing the magical moments of a special birthday celebration filled with joy, laughter, and precious memories that will last forever.",
      details: [
        "Theme: Fairy Tale Princess",
        "Venue: The Leela Palace, Bangalore",
        "Decor: Magical Moments Events",
        "Cake: Sugar & Spice Bakery"
      ],
      coverImage: portfolio5,
      images: [portfolio5, portfolio1, portfolio2, portfolio3, portfolio4, portfolio6],
      videos: [
        { title: "Birthday Celebration", thumbnail: portfolio5 },
        { title: "Party Highlights", thumbnail: portfolio1 },
        { title: "Special Moments", thumbnail: portfolio2 }
      ]
    },
    "fashion-editorial": {
      title: "Fashion Editorial",
      category: "Model",
      date: "July 2023",
      location: "Delhi, India",
      description: "High-fashion editorial photography showcasing style, elegance, and the art of professional modeling with contemporary aesthetics.",
      details: [
        "Model: Priya Sharma",
        "Agency: Elite Models India",
        "Styling: Fashion Forward Studio",
        "Makeup: MAC Cosmetics"
      ],
      coverImage: portfolio6,
      images: [portfolio6, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
      videos: [
        { title: "Fashion Film", thumbnail: portfolio6 },
        { title: "Behind The Lens", thumbnail: portfolio1 },
        { title: "Editorial Story", thumbnail: portfolio2 }
      ]
    }
  };

  const portfolio = id ? portfolioData[id] : null;

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-playfair text-4xl font-bold mb-4">Portfolio Not Found</h1>
          <Link to="/portfolio" className="text-primary hover:text-accent">
            ← Back to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Create array of 24 images by repeating the portfolio images
  const allImages = Array(24).fill(null).map((_, index) => 
    portfolio.images[index % portfolio.images.length]
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-16">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">{portfolio.category}</Badge>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              {portfolio.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8">
              <span>{portfolio.date}</span>
              <span>•</span>
              <span>{portfolio.location}</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolio.description}
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center space-y-2">
            {portfolio.details.map((detail: string, index: number) => (
              <p key={index} className="text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Images Grid - Single Column */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="space-y-6">
            {allImages.map((image, index) => (
              <div key={index} className="w-full overflow-hidden">
                <img
                  src={image}
                  alt={`${portfolio.title} - Photo ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between">
            <Link 
              to="/portfolio/brand-campaign"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-playfair text-xl">Kiara & Siddharth</span>
            </Link>
            <Link 
              to="/portfolio/sara-john"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <span className="font-playfair text-xl">Sara & John</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
