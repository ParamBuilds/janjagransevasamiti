import { useEffect } from "react";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import RegistrationForm from "@/components/RegistrationForm";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title and meta for SEO
    document.title = "JAN JAGRITI SEVA SAMITI - Official Member Registration Portal";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Official member registration portal of JAN JAGRITI SEVA SAMITI – a social service organization dedicated to nation-building and public welfare in India."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Official member registration portal of JAN JAGRITI SEVA SAMITI – a social service organization dedicated to nation-building and public welfare in India.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 tricolor-bg">
        <IntroSection />
        <RegistrationForm />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
