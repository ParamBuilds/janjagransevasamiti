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
    <section className="relative ashoka-watermark py-8 md:py-16" id="register">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-6 text-center md:mb-10">
          <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">
            Member Registration Form
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill in your details to join our mission
          </p>
        </div>

        {/* Form Card */}
        <div className="animate-scale-in mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-card opacity-0 shadow-elevated">
          {/* Form Header Strip */}
          <div className="flex h-1.5">
            <div className="flex-1 bg-primary" />
            <div className="flex-1 bg-card" />
            <div className="flex-1 bg-accent" />
          </div>
          
          {/* Jotform Container */}
          <div 
            ref={formContainerRef}
            className="min-h-[500px] p-4 md:p-6"
          >
            {/* Loading state while Jotform loads */}
            <div className="flex h-[400px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
                <p className="mt-4 text-sm text-muted-foreground">Loading registration form...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
