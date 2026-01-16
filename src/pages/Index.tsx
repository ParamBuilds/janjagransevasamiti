import { useEffect } from "react";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  useEffect(() => {
    // Update document title and meta for SEO
    document.title = "JAN JAGRITI SEVA SAMITI - Member Registration | सदस्य पंजीकरण";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Official member registration portal of JAN JAGRITI SEVA SAMITI (जन जागृति सेवा समिति) – a social service organization dedicated to nation-building and public welfare in India."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Official member registration portal of JAN JAGRITI SEVA SAMITI (जन जागृति सेवा समिति) – a social service organization dedicated to nation-building and public welfare in India.";
      document.head.appendChild(meta);
    }
  }, []);

  return <RegistrationForm />;
};

export default Index;
