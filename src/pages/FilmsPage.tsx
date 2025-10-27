import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Films from "@/components/Films";

const FilmsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Films
            </h1>
            <p className="text-muted-foreground text-xl">
              Cinematic storytelling that captures the magic of your special moments
            </p>
          </div>
        </div>
      </section>

      {/* Films Component */}
      <div className="py-12">
        <Films />
      </div>

      <Footer />
    </div>
  );
};

export default FilmsPage;
