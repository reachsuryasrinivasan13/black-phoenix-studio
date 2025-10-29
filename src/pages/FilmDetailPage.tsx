import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";

const FilmDetailPage = () => {
  const { id } = useParams();

  // Film data - in a real app this would come from an API or database
  const films = {
    "film-1": {
      title: "Alisha & Rahul",
      location: "Amalfi Coast, Italy",
      description: "An evening of love, style and blend of two cultures in the heart of Italy.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgxcQ",
      details: "Every wedding is unique and so are our films. We create cinematic stories that capture the emotions, traditions, and unforgettable moments of your special day.",
      credits: {
        "Wedding Planned by": "Seven Steps Weddings",
        "Bride's Outfit": "Tarun Tahiliani, Galia Lahv",
        "Groom's Outfit": "Rohit Bal, Brioni",
        "Stylist": "Mohit Rai and Aastha Sharma",
        "Makeup": "Savleen Manchanda",
        "Hair": "Amit Thakur"
      }
    },
    "film-2": {
      title: "Saloni & SO",
      location: "Bangkok",
      description: "A vibrant celebration of love in the heart of Bangkok.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgxcQ",
      details: "Our films go beyond documentation - they are artistic narratives that preserve the essence of your celebration.",
      credits: {}
    },
    "film-3": {
      title: "Zinzan",
      location: "New Zealand",
      description: "An intimate celebration in the breathtaking landscapes of New Zealand.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgxcQ",
      details: "Capturing timeless moments through modern filmmaking.",
      credits: {}
    },
    "film-4": {
      title: "Reva & Zach",
      location: "Udaipur",
      description: "A House On The Clouds Film showcasing the royal beauty of Udaipur.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgxcQ",
      details: "Exactly today last year we celebrated Reva and Zach's wedding. We called it our Happy New Year wedding and we couldn't have asked for a better beginning for the new year.",
      credits: {}
    }
  };

  const film = films[id as keyof typeof films] || films["film-1"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <section className="pt-28 pb-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/films"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Films
          </Link>
        </div>
      </section>

      {/* Film Content - Full Width Video, Single Column Content */}
      <section className="pb-20 bg-background">
        <div className="w-full">
          {/* Title - with side padding */}
          <div className="max-w-4xl mx-auto px-8 sm:px-16 lg:px-24 mb-8 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
              {film.title}
            </h1>
            <p className="text-muted-foreground text-xl">{film.location}</p>
          </div>

          {/* Video Player - Full Width (no side padding) */}
          <div className="relative aspect-video mb-12 overflow-hidden group cursor-pointer bg-muted">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Play className="h-10 w-10 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            <img
              src={portfolio1}
              alt={film.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Description - with side padding */}
          <div className="max-w-4xl mx-auto px-8 sm:px-16 lg:px-24">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
              <p>{film.description}</p>
              <p>{film.details}</p>
            </div>

            {/* Credits */}
            {Object.keys(film.credits).length > 0 && (
              <div className="border-t border-border pt-8">
                <div className="space-y-3">
                  {Object.entries(film.credits).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:gap-4">
                      <span className="text-foreground font-medium min-w-[180px]">{key}:</span>
                      <span className="text-muted-foreground">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            <Link 
              to="/films/film-4"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-playfair text-xl">Reva & Zach</span>
            </Link>
            <Link 
              to="/films/film-2"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <span className="font-playfair text-xl">Saloni & SO, Bangkok</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FilmDetailPage;
