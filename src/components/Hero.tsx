import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Black Phoenix Photography - Professional Wedding Photography"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in">
            Black Phoenix
            <span className="block text-primary mt-2">Photography</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Capturing timeless moments through modern photography and filmmaking
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
