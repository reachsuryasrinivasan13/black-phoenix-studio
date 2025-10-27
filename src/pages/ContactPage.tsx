import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-xl">
              Let's create something beautiful together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <div className="py-12">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
