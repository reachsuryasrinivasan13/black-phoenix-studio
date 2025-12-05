import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ScrollAnimation";
// Priya & Rahul images
import priya1 from "@/assets/portfolio/priyaAndRahul/image-1.jpg";
import priya2 from "@/assets/portfolio/priyaAndRahul/image-2.jpg";
import priya3 from "@/assets/portfolio/priyaAndRahul/image-3.jpg";
import priya4 from "@/assets/portfolio/priyaAndRahul/image-4.jpg";
import priya5 from "@/assets/portfolio/priyaAndRahul/image-5.jpg";
import priya6 from "@/assets/portfolio/priyaAndRahul/image-6.jpg";
import priya7 from "@/assets/portfolio/priyaAndRahul/image-7.jpg";
import priya8 from "@/assets/portfolio/priyaAndRahul/image-8.jpg";
import priya9 from "@/assets/portfolio/priyaAndRahul/image-9.jpg";
import priya10 from "@/assets/portfolio/priyaAndRahul/image-10.jpg";
import priya11 from "@/assets/portfolio/priyaAndRahul/image-11.jpg";
import priya12 from "@/assets/portfolio/priyaAndRahul/image-12.jpg";
import priya13 from "@/assets/portfolio/priyaAndRahul/image-13.jpg";
import priya14 from "@/assets/portfolio/priyaAndRahul/image-14.jpg";
import priya15 from "@/assets/portfolio/priyaAndRahul/image-15.jpg";
import priya16 from "@/assets/portfolio/priyaAndRahul/image-16.jpg";
import priya17 from "@/assets/portfolio/priyaAndRahul/image-17.jpg";
import priya18 from "@/assets/portfolio/priyaAndRahul/image-18.jpg";
import priya19 from "@/assets/portfolio/priyaAndRahul/image-19.jpg";
import priya20 from "@/assets/portfolio/priyaAndRahul/image-20.jpg";

// Sara & John images
import sara1 from "@/assets/portfolio/saraAndJohn/image-1.jpg";
import sara2 from "@/assets/portfolio/saraAndJohn/image-2.jpg";
import sara3 from "@/assets/portfolio/saraAndJohn/image-3.jpg";
import sara4 from "@/assets/portfolio/saraAndJohn/image-4.jpg";
import sara5 from "@/assets/portfolio/saraAndJohn/image-5.jpg";
import sara6 from "@/assets/portfolio/saraAndJohn/image-6.jpg";
import sara7 from "@/assets/portfolio/saraAndJohn/image-7.jpg";
import sara8 from "@/assets/portfolio/saraAndJohn/image-8.jpg";
import sara9 from "@/assets/portfolio/saraAndJohn/image-9.jpg";
import sara10 from "@/assets/portfolio/saraAndJohn/image-10.jpg";
import sara11 from "@/assets/portfolio/saraAndJohn/image-11.jpg";
import sara12 from "@/assets/portfolio/saraAndJohn/image-12.jpg";
import sara13 from "@/assets/portfolio/saraAndJohn/image-13.jpg";
import sara14 from "@/assets/portfolio/saraAndJohn/image-14.jpg";
import sara15 from "@/assets/portfolio/saraAndJohn/image-15.jpg";
import sara16 from "@/assets/portfolio/saraAndJohn/image-16.jpg";
import sara17 from "@/assets/portfolio/saraAndJohn/image-17.jpg";
import sara18 from "@/assets/portfolio/saraAndJohn/image-18.jpg";
import sara19 from "@/assets/portfolio/saraAndJohn/image-19.jpg";
import sara20 from "@/assets/portfolio/saraAndJohn/image-20.jpg";

// Alia & Ranbir images
import alia1 from "@/assets/portfolio/aliaAndRanbir/image-1.jpg";
import alia2 from "@/assets/portfolio/aliaAndRanbir/image-2.jpg";
import alia3 from "@/assets/portfolio/aliaAndRanbir/image-3.jpg";
import alia4 from "@/assets/portfolio/aliaAndRanbir/image-4.jpg";
import alia5 from "@/assets/portfolio/aliaAndRanbir/image-5.jpg";
import alia6 from "@/assets/portfolio/aliaAndRanbir/image-6.jpg";
import alia7 from "@/assets/portfolio/aliaAndRanbir/image-7.jpg";
import alia8 from "@/assets/portfolio/aliaAndRanbir/image-8.jpg";
import alia9 from "@/assets/portfolio/aliaAndRanbir/image-9.jpg";
import alia10 from "@/assets/portfolio/aliaAndRanbir/image-10.jpg";
import alia11 from "@/assets/portfolio/aliaAndRanbir/image-11.jpg";
import alia12 from "@/assets/portfolio/aliaAndRanbir/image-12.jpg";
import alia13 from "@/assets/portfolio/aliaAndRanbir/image-13.jpg";
import alia14 from "@/assets/portfolio/aliaAndRanbir/image-14.jpg";
import alia15 from "@/assets/portfolio/aliaAndRanbir/image-15.jpg";
import alia16 from "@/assets/portfolio/aliaAndRanbir/image-16.jpg";
import alia17 from "@/assets/portfolio/aliaAndRanbir/image-17.jpg";
import alia18 from "@/assets/portfolio/aliaAndRanbir/image-18.jpg";
import alia19 from "@/assets/portfolio/aliaAndRanbir/image-19.jpg";
import alia20 from "@/assets/portfolio/aliaAndRanbir/image-20.jpg";

// Kiara & Siddharth images
import kiara1 from "@/assets/portfolio/kiaraAndSiddharth/image-1.jpg";
import kiara2 from "@/assets/portfolio/kiaraAndSiddharth/image-2.jpg";

// Deepika & Ranveer images
import deepika1 from "@/assets/portfolio/deepikaAndRanveer/image-1.jpg";
import deepika2 from "@/assets/portfolio/deepikaAndRanveer/image-2.jpg";

// Priyanka & Nick images
import priyanka1 from "@/assets/portfolio/priyankaAndNick/image-1.jpg";
import priyanka2 from "@/assets/portfolio/priyankaAndNick/image-2.jpg";

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
      coverImage: priya1,
      images: [priya1, priya2, priya3, priya4, priya5, priya6, priya7, priya8, priya9, priya10, priya11, priya12, priya13, priya14, priya15, priya16, priya17, priya18, priya19, priya20]
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
      coverImage: sara1,
      images: [sara1, sara2, sara3, sara4, sara5, sara6, sara7, sara8, sara9, sara10, sara11, sara12, sara13, sara14, sara15, sara16, sara17, sara18, sara19, sara20]
    },
    "alia-ranbir": {
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
      images: [alia1, alia2, alia3, alia4, alia5, alia6, alia7, alia8, alia9, alia10, alia11, alia12, alia13, alia14, alia15, alia16, alia17, alia18, alia19, alia20]
    },
    "kiara-siddharth": {
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
    "deepika-ranveer": {
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
    "priyanka-nick": {
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
  const portfolioOrder = ["priya-rahul", "sara-john", "alia-ranbir", "kiara-siddharth", "deepika-ranveer", "priyanka-nick"];
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

  // Use all 20 images from the portfolio
  const allImages = portfolio.images;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {portfolio.description}
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            {portfolio.details.map((detail: string, index: number) => (
              <p key={index} className="text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Images Gallery - Centered with Auto Size */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            {allImages.map((image, index) => (
              <ScrollAnimation 
                key={index} 
                delay={0.1}
                direction="up"
                className="w-full flex justify-center"
              >
                <div className="overflow-hidden">
                  <LazyImage
                    src={image}
                    alt={`${portfolio.title} - Photo ${index + 1}`}
                    className="w-auto h-auto max-w-full max-h-[90vh] object-contain hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </ScrollAnimation>
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
