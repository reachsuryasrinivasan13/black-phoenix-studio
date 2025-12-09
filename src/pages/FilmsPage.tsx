import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";
import { LazyVideo } from "@/components/LazyVideo";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Play } from "lucide-react";
import filmsBanner from "@/assets/films/films-hero-video.jpg";
import portfolio1 from "@/assets/portfolio/priyaAndRahul/image-1.jpg";
import portfolio2 from "@/assets/portfolio/saraAndJohn/image-1.jpg";
import portfolio3 from "@/assets/portfolio/aliaAndRanbir/image-1.jpg";
import portfolio4 from "@/assets/portfolio/kiaraAndSiddharth/image-1.jpg";

const FilmsPage = () => {
  const films = [
    { 
      id: "film-1", 
      title: "Alisha & Rahul", 
      location: "Amalfi Coast, Italy",
      category: "New Age Modern",
      date: "11/20/24",
      image: portfolio1,
      description: "Vedika and Omair gave a new meaning to the concept of 'do as ye will'. It felt like a ceremony of athereal beings who knew the power ones' words holds. As if the words are enough to convey and seal the potent connection they have with one another."
    },
    { 
      id: "film-2", 
      title: "Saloni & SO", 
      location: "Bangkok",
      category: "New Age Modern",
      date: "1/5/25",
      image: portfolio2,
      description: "A vibrant celebration of love across cultures in the heart of Bangkok, bringing together traditions and modern romance."
    },
    { 
      id: "film-3", 
      title: "Zinzan", 
      location: "New Zealand",
      category: "New Age Modern",
      date: "11/28/24",
      image: portfolio3,
      description: "An intimate celebration set against the breathtaking landscapes of New Zealand, where nature became part of the ceremony."
    },
    { 
      id: "film-4", 
      title: "Reva & Zach", 
      location: "Udaipur",
      category: "Classic Story Telling",
      date: "4/9/25",
      image: portfolio4,
      description: "Exactly today last year we celebrated Reva and Zach's wedding. We called it our Happy New Year wedding and we couldn't have asked for a better beginning for the new year."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner with Video */}
      <section className="relative pt-20">
        <ScrollAnimation direction="fade">
          <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
            <LazyVideo
              src={filmsBanner}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background flex items-center justify-start px-8 sm:px-16 lg:px-24">
              <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic text-white">
                Inspired by Cinema.
              </h1>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Films Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {films.map((film, index) => (
              <ScrollAnimation key={film.id} direction="up" delay={index * 0.1}>
                <Link
                  to={`/films/${film.id}`}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
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
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{film.category} • {film.date}</p>
                    <h3 className="font-playfair text-2xl font-semibold text-foreground">
                      {film.title}
                    </h3>
                    <p className="text-muted-foreground">{film.location}</p>
                    <p className="text-muted-foreground text-sm line-clamp-3 mt-2">
                      {film.description}
                    </p>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FilmsPage;
