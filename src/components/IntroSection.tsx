import { Users, Heart, Flag } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="relative hero-bg py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Heading */}
          <h2 className="animate-fade-up font-heading text-2xl font-bold leading-tight text-foreground opacity-0 md:text-4xl">
            Serving the Nation,{" "}
            <span className="text-primary">Empowering Communities</span>
          </h2>
          
          {/* Description */}
          <p className="animate-fade-up stagger-1 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground opacity-0 md:mt-6 md:text-lg">
            <strong className="text-foreground">JAN JAGRITI SEVA SAMITI</strong> is committed to 
            social service, public awareness, and nation-building. We work tirelessly to uplift 
            communities and create a brighter future for all citizens of India.
          </p>
          
          {/* Feature Icons */}
          <div className="animate-fade-up stagger-2 mt-8 grid grid-cols-3 gap-4 opacity-0 md:mt-12 md:gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 md:h-16 md:w-16">
                <Users className="h-6 w-6 text-primary md:h-8 md:w-8" />
              </div>
              <span className="text-xs font-medium text-muted-foreground md:text-sm">Community Service</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 md:h-16 md:w-16">
                <Heart className="h-6 w-6 text-accent md:h-8 md:w-8" />
              </div>
              <span className="text-xs font-medium text-muted-foreground md:text-sm">Public Welfare</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 md:h-16 md:w-16">
                <Flag className="h-6 w-6 text-secondary md:h-8 md:w-8" />
              </div>
              <span className="text-xs font-medium text-muted-foreground md:text-sm">Nation Building</span>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="animate-fade-up stagger-3 mt-8 opacity-0 md:mt-12">
            <p className="text-sm font-medium text-foreground md:text-base">
              Please complete the registration form below to become an official member.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Divider */}
      <div className="mt-8 flex items-center justify-center gap-4 md:mt-12">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50 md:w-24" />
        <div className="h-2 w-2 rotate-45 bg-primary" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50 md:w-24" />
      </div>
    </section>
  );
};

export default IntroSection;
