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
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          {/* Header Section */}
          <div className="p-6 sm:p-8 border-b border-animated">
            <div className="text-center mb-8 animate-fadeIn">
              {/* Tricolor Stripe */}
              <div className="flex h-2 mb-6 rounded-full overflow-hidden shadow-soft">
                <div className="flex-1 bg-saffron"></div>
                <div className="flex-1 bg-indian-white"></div>
                <div className="flex-1 bg-indian-green"></div>
              </div>

              {/* Logo and Title */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20 shadow-soft">
                  <span className="text-3xl">🇮🇳</span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    जन जागृति सेवा समिति
                  </h1>
                  <p className="text-lg sm:text-xl text-primary font-semibold">
                    JAN JAGRITI SEVA SAMITI
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Member Registration Form • सदस्य पंजीकरण प्रपत्र
                  </p>
                </div>
              </div>

              {/* Decorative Divider */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>
            </div>
          </div>

          {/* Jotform Container */}
          <div 
            ref={formContainerRef}
            className="min-h-[600px] p-4 sm:p-6"
          >
            {/* Loading state while Jotform loads */}
            <div className="flex h-[500px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary/30 border-t-primary"></div>
                <p className="mt-4 text-sm text-muted-foreground">Loading registration form...</p>
                <p className="mt-1 text-xs text-muted-foreground">पंजीकरण फॉर्म लोड हो रहा है...</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-animated bg-muted/30">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Jan Jagriti Seva Samiti • जन जागृति सेवा समिति
              </p>
              {/* Small tricolor bar */}
              <div className="flex h-1 mt-3 rounded-full overflow-hidden max-w-[100px] mx-auto">
                <div className="flex-1 bg-saffron"></div>
                <div className="flex-1 bg-indian-white"></div>
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
