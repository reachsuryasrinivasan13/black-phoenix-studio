import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutBanner from "@/assets/about-banner.jpg";
import sunilPhoto from "@/assets/sunil-photo.jpg";
import narasimmanPhoto from "@/assets/narasimman-photo.jpg";

const AboutPage = () => {
  const team = [
    {
      name: "Sunil",
      role: "Lead Photographer",
      photo: sunilPhoto,
      description: "With over 10 years of experience in photography, Sunil specializes in capturing authentic moments and emotions. His artistic vision brings stories to life through his lens.",
      expertise: ["Wedding Photography", "Portrait Photography", "Commercial Photography"]
    },
    {
      name: "Narasimman",
      role: "Cinematographer & Editor",
      photo: narasimmanPhoto,
      description: "Narasimman brings a cinematic approach to every project. His expertise in videography and post-production ensures every film tells a compelling story.",
      expertise: ["Wedding Films", "Event Videography", "Creative Editing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner with Image */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={aboutBanner}
            alt="About us banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4">
                About Us
              </h1>
              <p className="text-foreground text-xl">
                Capturing timeless moments with passion and precision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 text-muted-foreground text-lg">
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
              We celebrate authenticity and creativity, working with clients who aren't afraid to 
              express their true selves. Our goal is to create images that not only capture moments 
              but evoke the emotions and atmosphere of your special day.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Photo Section */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={`${member.name} - ${member.role}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary text-lg font-medium">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
