import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";
import heroImage from "@/assets/banner/home-hero-banner.jpg";
import modernApproach from "@/assets/modern-approach.jpg";
import filmsHeroVideo from "@/assets/films/films-hero-video.jpg";
import portfolio1 from "@/assets/portfolio/priyaAndRahul/image-1.jpg";
import portfolio2 from "@/assets/portfolio/saraAndJohn/image-1.jpg";
import portfolio3 from "@/assets/portfolio/aliaAndRanbir/image-1.jpg";
import portfolio4 from "@/assets/portfolio/kiaraAndSiddharth/image-1.jpg";
import iconic1 from "@/assets/iconic-1.jpg";
import iconic2 from "@/assets/iconic-2.jpg";
import iconic3 from "@/assets/iconic-3.jpg";
import iconic4 from "@/assets/iconic-4.jpg";
import iconic5 from "@/assets/iconic-5.jpg";
import iconic6 from "@/assets/iconic-6.jpg";
import iconic7 from "@/assets/iconic-7.jpg";
import iconic8 from "@/assets/iconic-8.jpg";
import iconic9 from "@/assets/iconic-9.jpg";
import iconic10 from "@/assets/iconic-10.jpg";
import iconic11 from "@/assets/iconic-11.jpg";
import iconic12 from "@/assets/iconic-12.jpg";
import iconic13 from "@/assets/iconic-13.jpg";
import iconic14 from "@/assets/iconic-14.jpg";
import iconic15 from "@/assets/iconic-15.jpg";
import { Play } from "lucide-react";

const Index = () => {
  const iconicImages = [
    iconic1, iconic2, iconic3, iconic4, iconic5,
    iconic6, iconic7, iconic8, iconic9, iconic10,
    iconic11, iconic12, iconic13, iconic14, iconic15
  ];

  const featuredPortfolios = [
    { id: "priya-rahul", image: portfolio1, title: "Priya & Rahul", category: "Indian" },
    { id: "sara-john", image: portfolio2, title: "Sara & John", category: "International" },
    { id: "alia-ranbir", image: portfolio3, title: "Alia & Ranbir", category: "Indian" },
    { id: "kiara-siddharth", image: portfolio4, title: "Kiara & Siddharth", category: "Indian" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-screen w-full pt-20">
        <div className="absolute inset-0">
          <LazyImage
            src={heroImage}
            alt="Black Phoenix Photography - Professional Wedding Photography"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Modern Approach Section */}
      <section className="py-12 sm:py-20 bg-[#E8E3DA] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading - Centered at Top */}
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-[0.2em] leading-tight">
                A MODERN APPROACH
              </h2>
              <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light italic text-foreground mt-1 lg:mt-2">
                to an <span className="font-bold not-italic tracking-[0.2em]">AGE OLD TRADITION</span>
              </p>
            </div>

            {/* Mobile Layout: Stacked Images and Text */}
            <div className="lg:hidden space-y-6">
              <div className="relative aspect-[3/4] overflow-hidden">
                <LazyImage
                  src={modernApproach}
                  alt="Modern photography approach"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4 text-foreground/80 text-sm leading-relaxed px-4">
                <p>
                  Considered to be the epitome of Modern Photography and Filmmaking, HOTC has transformed the Indian Wedding landscape on a regular basis. For almost a decade House On The Clouds has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.
                </p>
                <p>
                  Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards HOTC is the only company listed on IMDB for its award winning films.
                </p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <LazyImage
                  src={modernApproach}
                  alt="Wedding photography tradition"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Desktop Layout: 3 Columns (Image | Text | Images Stack) */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-8 xl:gap-12 lg:items-start">
              {/* Left Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <LazyImage
                  src={modernApproach}
                  alt="Modern photography approach"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Center Text */}
              <div className="flex items-center">
                <div className="space-y-6 text-foreground/80 text-sm xl:text-base leading-relaxed">
                  <p>
                    Considered to be the epitome of Modern Photography and Filmmaking, HOTC has transformed the Indian Wedding landscape on a regular basis. For almost a decade House On The Clouds has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.
                  </p>
                  <p>
                    Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards HOTC is the only company listed on IMDB for its award winning films.
                  </p>
                </div>
              </div>

              {/* Right Side - Two Stacked Images */}
              <div className="space-y-4 relative">
                {/* Top Right Corner Image - Smaller */}
                <div className="relative aspect-[4/3] overflow-hidden ml-auto w-3/4">
                  <LazyImage
                    src={modernApproach}
                    alt="Wedding photography detail"
                    className="h-full w-full object-cover"
                  />
                </div>
                
                {/* Bottom Right Image - Larger */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={modernApproach}
                    alt="Wedding photography tradition"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Magazine Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-12 lg:mt-16 opacity-60">
              <span className="font-serif text-xl sm:text-2xl xl:text-3xl tracking-wider">VOGUE</span>
              <span className="font-bold text-lg sm:text-xl xl:text-2xl tracking-wide">COSMOPOLITAN</span>
              <span className="font-bold text-lg sm:text-xl xl:text-2xl border-2 border-current px-3 py-1">HELLO!</span>
              <span className="font-serif text-xl sm:text-2xl xl:text-3xl tracking-wider">BRIDES<span className="text-xs align-super">TODAY</span></span>
              <span className="font-bold text-base sm:text-lg xl:text-xl border-2 border-current px-3 py-1">TRAVEL+LEISURE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Some of the Most Iconic Images - Responsive Grid with 2px gaps */}
      <section className="py-0 px-[2px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[2px]">
          {iconicImages.map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <LazyImage
                src={img}
                alt={`Iconic moment ${index + 1}`}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Photography Section - 4x1 Layout (No Heading, No Border Radius) */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredPortfolios.map((portfolio) => (
              <Link 
                key={portfolio.id}
                to={`/portfolio/${portfolio.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <LazyImage
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

      {/* Films Section with Video Banner and 2x2 Video Grid */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video Banner Section with "Inspired by Cinema" */}
          <div className="relative h-screen min-h-[600px] overflow-hidden mb-16">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={filmsHeroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80 flex items-center justify-start px-8 sm:px-16 lg:px-24">
              <h2 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic text-white">
                Inspired by Cinema.
              </h2>
            </div>
          </div>

          {/* Content Text */}
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We at HOTC celebrate the wild ones, the rule breakers, the travellers, the new age modern couple who are not afraid to experiment. We believe the ultimate goal of a wedding photographer is to justify the vibe of the wedding and the personalities of the couple. And this approach has helped us experience weddings in a two bedroom apartments to weddings spread over 2 continents.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              Here are some selected weddings from past couple of years to showcase the union of two people in the most authentic way possible.
            </p>
          </div>

          {/* 2x2 Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              { id: "film-1", title: "Alisha & Rahul", location: "Amalfi Coast, Italy", image: portfolio1 },
              { id: "film-2", title: "Saloni & SO", location: "Bangkok", image: portfolio2 },
              { id: "film-3", title: "Zinzan", location: "New Zealand", image: portfolio3 },
              { id: "film-4", title: "Reva & Zach", location: "Udaipur", image: portfolio4 },
            ].map((film) => (
              <Link
                key={film.id}
                to={`/films/${film.id}`}
                className="group"
              >
                <div className="relative aspect-video overflow-hidden mb-4 bg-muted">
                  <LazyImage
                    src={film.image}
                    alt={film.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-1">
                  {film.title}
                </h3>
                <p className="text-muted-foreground">{film.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
