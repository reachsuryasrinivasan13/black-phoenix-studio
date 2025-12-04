import { Instagram, Facebook, Twitter, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const googleMapsUrl = "https://maps.google.com/?q=Chennai,India";

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
              Black Phoenix Photography
            </h3>
            <p className="text-muted-foreground text-sm">
              Capturing timeless moments since {currentYear}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Location"
            >
              <MapPin className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {currentYear} Black Phoenix Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
