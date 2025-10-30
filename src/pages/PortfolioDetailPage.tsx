import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import priya1 from "@/assets/portfolio/priyaAndRahul/image-1.jpg";
import priya2 from "@/assets/portfolio/priyaAndRahul/image-2.jpg";
import priya3 from "@/assets/portfolio/priyaAndRahul/image-3.jpg";
import sara1 from "@/assets/portfolio/saraAndJohn/image-1.jpg";
import sara2 from "@/assets/portfolio/saraAndJohn/image-2.jpg";
import sara3 from "@/assets/portfolio/saraAndJohn/image-3.jpg";
import alia1 from "@/assets/portfolio/aliaAndRanbir/image-1.jpg";
import alia2 from "@/assets/portfolio/aliaAndRanbir/image-2.jpg";
import kiara1 from "@/assets/portfolio/kiaraAndSiddharth/image-1.jpg";
import kiara2 from "@/assets/portfolio/kiaraAndSiddharth/image-2.jpg";
import deepika1 from "@/assets/portfolio/deepikaAndRanveer/image-1.jpg";
import deepika2 from "@/assets/portfolio/deepikaAndRanveer/image-2.jpg";
import priyanka1 from "@/assets/portfolio/priyankaAndNick/image-1.jpg";
import priyanka2 from "@/assets/portfolio/priyankaAndNick/image-2.jpg";

const PortfolioDetailPage = () => {
  const { id } = useParams();

  const portfolioData: Record<string, any> = {
    "priyaAndRahul": {
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
      coverImage: priya1,
      images: [priya1, priya2, priya3, priya1, priya2, priya3, priya1, priya2, priya3, priya1, priya2, priya3, priya1, priya2, priya3, priya1, priya2, priya3, priya1, priya2]
    },
    "saraAndJohn": {
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
      coverImage: sara1,
      images: [sara1, sara2, sara3, sara1, sara2, sara3, sara1, sara2, sara3, sara1, sara2, sara3, sara1, sara2, sara3, sara1, sara2, sara3, sara1, sara2]
    },
    "aliaAndRanbir": {
      title: "Alia & Ranbir",
      category: "Reception",
      date: "November 2023",
      location: "Mumbai, Maharashtra",
      description: "An unprecedented scoop of this generation decided to get married in the simplest possible way - in their balcony surrounded by only 30 of their closest friends and family members.",
      details: [
        "Venue: Private Residence, Mumbai",
        "Wedding Planned by: Intimate Affairs",
        "Bride's Outfit: Sabyasachi",
        "Groom's Outfit: Custom Designer"
      ],
      coverImage: alia1,
      images: [alia1, alia2, alia1, alia2, alia1, alia2, alia1, alia2, alia1, alia2, alia1, alia2, alia1, alia2, alia1, alia2, alia1, alia2, alia1, alia2]
    },
    "kiaraAndSiddharth": {
      title: "Kiara & Siddharth",
      category: "Wedding",
      date: "September 2023",
      location: "Mumbai, Maharashtra",
      description: "Professional commercial photography showcasing products and brand identity with creative vision and attention to detail.",
      details: [
        "Venue: The Taj, Mumbai",
        "Wedding Planned by: Grand Events",
        "Bride's Outfit: Manish Malhotra",
        "Groom's Outfit: Rohit Bal"
      ],
      coverImage: kiara1,
      images: [kiara1, kiara2, kiara1, kiara2, kiara1, kiara2, kiara1, kiara2, kiara1, kiara2, kiara1, kiara2, kiara1, kiara2, kiara1, kiara2, kiara1, kiara2, kiara1, kiara2]
    },
    "deepikaAndRanveer": {
      title: "Deepika & Ranveer",
      category: "Wedding",
      date: "August 2023",
      location: "Lake Como, Italy",
      description: "Capturing the magical moments of a special celebration filled with joy, laughter, and precious memories that will last forever.",
      details: [
        "Location: Villa del Balbianello, Lake Como",
        "Wedding Planned by: Destination Dreams",
        "Bride's Outfit: Sabyasachi, Anita Dongre",
        "Groom's Outfit: Rohit Bal"
      ],
      coverImage: deepika1,
      images: [deepika1, deepika2, deepika1, deepika2, deepika1, deepika2, deepika1, deepika2, deepika1, deepika2, deepika1, deepika2, deepika1, deepika2, deepika1, deepika2, deepika1, deepika2, deepika1, deepika2]
    },
    "priyankaAndNick": {
      title: "Priyanka & Nick",
      category: "International Wedding",
      date: "July 2023",
      location: "Jodhpur, Rajasthan",
      description: "High-fashion editorial photography showcasing style, elegance, and the art of professional cross-cultural wedding celebrations.",
      details: [
        "Venue: Umaid Bhawan Palace, Jodhpur",
        "Wedding Planned by: Elite Destinations",
        "Bride's Outfit: Ralph Lauren, Sabyasachi",
        "Groom's Outfit: Zegna, Raghavendra Rathore"
      ],
      coverImage: priyanka1,
      images: [priyanka1, priyanka2, priyanka1, priyanka2, priyanka1, priyanka2, priyanka1, priyanka2, priyanka1, priyanka2, priyanka1, priyanka2, priyanka1, priyanka2, priyanka1, priyanka2, priyanka1, priyanka2, priyanka1, priyanka2]
    }
  };

  // Define portfolio order
  const portfolioOrder = ["priyaAndRahul", "saraAndJohn", "aliaAndRanbir", "kiaraAndSiddharth", "deepikaAndRanveer", "priyankaAndNick"];
  const currentIndex = portfolioOrder.indexOf(id || "");
  const prevPortfolio = currentIndex > 0 ? portfolioOrder[currentIndex - 1] : null;
  const nextPortfolio = currentIndex < portfolioOrder.length - 1 ? portfolioOrder[currentIndex + 1] : null;

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
            {prevPortfolio ? (
              <Link 
                to={`/portfolio/${prevPortfolio}`}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
              >
                <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-playfair text-xl">{portfolioData[prevPortfolio].title}</span>
              </Link>
            ) : (
              <div></div>
            )}
            {nextPortfolio ? (
              <Link 
                to={`/portfolio/${nextPortfolio}`}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
              >
                <span className="font-playfair text-xl">{portfolioData[nextPortfolio].title}</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
