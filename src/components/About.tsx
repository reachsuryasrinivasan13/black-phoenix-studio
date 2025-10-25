const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8">
            About Us
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg">
            <p>
              Black Phoenix Photography is dedicated to capturing the essence of modern photography 
              and filmmaking. We specialize in creating photographs and films that are timeless and 
              have been etched in the memories of countless people forever.
            </p>
            <p>
              Our approach combines artistic vision with technical excellence, delivering stunning 
              visuals that tell your unique story. From intimate moments to grand celebrations, 
              we document every precious detail with passion and precision.
            </p>
            <p>
              We celebrate authenticity and creativity, working with couples who aren't afraid to 
              express their true selves. Our goal is to create images that not only capture moments 
              but evoke the emotions and atmosphere of your special day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
