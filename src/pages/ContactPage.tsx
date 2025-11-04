import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import contactBanner from "@/assets/banner/contact-hero-banner.jpg";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner with Image */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={contactBanner}
            alt="Contact us banner"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Please fill in the form below and provide as much details as possible to help us create an accurate quote.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We will try to get back within 48hrs, give us a call on the number below if you don't hear from us or if it's a last minute enquiry.
            </p>
            
            <div className="pt-8 space-y-4">
              <a 
                href="mailto:contact@blackphoenixphotography.com" 
                className="block text-foreground hover:text-primary transition-colors text-lg font-medium"
              >
                contact@blackphoenixphotography.com
              </a>
              <a 
                href="tel:+919876543210" 
                className="block text-foreground hover:text-primary transition-colors text-lg font-medium"
              >
                +91 98765 43210
              </a>
              <p className="text-muted-foreground text-lg">
                Chennai . Bangalore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="pb-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
