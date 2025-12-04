import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { LazyImage } from "@/components/LazyImage";
import contactBanner from "@/assets/banner/contact-hero-banner.jpg";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner with Image */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <LazyImage
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

      {/* Google Maps Location */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
              Find Us
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Black Phoenix Photography Studio<br />
              T. Nagar, Chennai, Tamil Nadu 600017
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9969898657044!2d80.22746237507821!3d13.040433087277953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650f95bde97%3A0x9ad7c6fba6f90c3d!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin&markers=color:red%7Clabel:B%7C13.040433,80.229657"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Black Phoenix Photography Studio - T. Nagar, Chennai"
              />
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
