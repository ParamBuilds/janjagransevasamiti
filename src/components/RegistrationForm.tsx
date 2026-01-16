import { useEffect, useRef } from "react";

const RegistrationForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load Jotform script
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/260152228199054";
    script.type = "text/javascript";
    script.async = true;

    if (formContainerRef.current) {
      // Clear loading state
      formContainerRef.current.innerHTML = '';
      formContainerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (formContainerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen tricolor-bg py-6 px-4 sm:py-10">
      <div className="max-w-2xl mx-auto">
        {/* Main Card with hover effect */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden hover-lift">
          {/* Header Section */}
          <div className="p-6 sm:p-8 border-b border-animated bg-warm-white">
            <div className="text-center animate-fadeIn">
              {/* Tricolor Stripe with shimmer effect */}
              <div className="flex h-2.5 mb-8 rounded-full overflow-hidden shadow-soft">
                <div className="flex-1 bg-saffron"></div>
                <div className="flex-1 bg-warm-white"></div>
                <div className="flex-1 bg-indian-green"></div>
              </div>

              {/* Logo with floating animation */}
              <div className="flex flex-col items-center gap-5">
                <div className="animate-float">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/30 shadow-glow hover-glow cursor-pointer transition-all duration-300">
                    <span className="text-4xl">🇮🇳</span>
                  </div>
                </div>
                
                {/* Title with staggered animation */}
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground animate-fadeInUp opacity-0 delay-100">
                    जन जागृति सेवा समिति
                  </h1>
                  <p className="text-lg sm:text-xl text-primary font-semibold animate-fadeInUp opacity-0 delay-200">
                    JAN JAGRITI SEVA SAMITI
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 animate-fadeInUp opacity-0 delay-300">
                    Member Registration Form • सदस्य पंजीकरण प्रपत्र
                  </p>
                </div>
              </div>

              {/* Interactive Decorative Divider */}
              <div className="mt-8 flex items-center justify-center gap-3 animate-fadeIn opacity-0 delay-400">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/30 to-primary/60"></div>
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-soft shadow-glow"></div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary/30 to-primary/60"></div>
              </div>

              {/* Interactive Step Indicator Preview */}
              <div className="mt-8 animate-fadeInUp opacity-0 delay-500">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-white rounded-full border border-primary/20 shadow-soft">
                  <div className="flex items-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">1</span>
                    <span className="text-xs font-medium text-primary">Personal</span>
                  </div>
                  <div className="w-4 h-px bg-border"></div>
                  <div className="flex items-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-warm-white border-2 border-border text-muted-foreground text-xs font-bold flex items-center justify-center">2</span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">Address</span>
                  </div>
                  <div className="w-4 h-px bg-border"></div>
                  <div className="flex items-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-warm-white border-2 border-border text-muted-foreground text-xs font-bold flex items-center justify-center">3</span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">Bank</span>
                  </div>
                  <div className="w-4 h-px bg-border"></div>
                  <div className="flex items-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-warm-white border-2 border-border text-muted-foreground text-xs font-bold flex items-center justify-center">4</span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jotform Container */}
          <div 
            ref={formContainerRef}
            className="min-h-[600px] p-4 sm:p-6 bg-warm-white"
          >
            {/* Loading state while Jotform loads */}
            <div className="flex h-[500px] items-center justify-center">
              <div className="text-center animate-fadeIn">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary shadow-glow"></div>
                <p className="mt-5 text-sm font-medium text-foreground">Loading registration form...</p>
                <p className="mt-1 text-xs text-muted-foreground">पंजीकरण फॉर्म लोड हो रहा है...</p>
              </div>
            </div>
          </div>

          {/* Footer with warm styling */}
          <div className="p-5 border-t border-animated bg-gradient-to-b from-warm-white to-muted/30">
            <div className="text-center">
              <p className="text-xs text-muted-foreground font-medium">
                © {new Date().getFullYear()} Jan Jagriti Seva Samiti • जन जागृति सेवा समिति
              </p>
              {/* Animated tricolor bar */}
              <div className="flex h-1.5 mt-4 rounded-full overflow-hidden max-w-[120px] mx-auto shadow-soft hover-glow cursor-pointer transition-all duration-300">
                <div className="flex-1 bg-saffron"></div>
                <div className="flex-1 bg-warm-white"></div>
                <div className="flex-1 bg-indian-green"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
