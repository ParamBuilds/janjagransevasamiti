import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-center gap-3 md:h-20">
        {/* Ashoka Chakra Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary md:h-12 md:w-12">
          <Shield className="h-5 w-5 text-secondary-foreground md:h-6 md:w-6" />
        </div>
        
        {/* Organization Name */}
        <div className="text-center">
          <h1 className="font-heading text-lg font-bold tracking-tight text-foreground md:text-2xl">
            JAN JAGRITI SEVA SAMITI
          </h1>
          <p className="text-xs font-medium text-primary md:text-sm">
            Official Member Registration Portal
          </p>
        </div>
      </div>
      
      {/* Tricolor Stripe */}
      <div className="flex h-1">
        <div className="flex-1 bg-primary" />
        <div className="flex-1 bg-card" />
        <div className="flex-1 bg-accent" />
      </div>
    </header>
  );
};

export default Header;
