import { Play } from "lucide-react";

const Films = () => {
  return (
    <section id="films" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8">
            Cinematic Films
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg mb-12">
            <p>
              Every wedding is unique and so are our films. We create cinematic stories that 
              capture the emotions, traditions, and unforgettable moments of your special day.
            </p>
            <p>
              Our films go beyond documentation - they are artistic narratives that preserve 
              the essence of your celebration, allowing you to relive those precious memories 
              for years to come.
            </p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Play className="h-10 w-10 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-background/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Films;
