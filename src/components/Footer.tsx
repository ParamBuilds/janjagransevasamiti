const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8 text-secondary-foreground">
      <div className="container">
        {/* Tricolor Top Border */}
        <div className="-mt-8 mb-6 flex h-1">
          <div className="flex-1 bg-primary" />
          <div className="flex-1 bg-card" />
          <div className="flex-1 bg-accent" />
        </div>
        
        <div className="text-center">
          {/* Organization Name */}
          <h4 className="font-heading text-lg font-bold md:text-xl">
            JAN JAGRITI SEVA SAMITI
          </h4>
          
          <p className="mt-2 text-sm text-secondary-foreground/80">
            Dedicated to Social Service & Nation Building
          </p>
          
          {/* Divider */}
          <div className="mx-auto my-4 h-px w-24 bg-secondary-foreground/20" />
          
          {/* Copyright */}
          <p className="text-xs text-secondary-foreground/70 md:text-sm">
            © {currentYear} JAN JAGRITI SEVA SAMITI — All Rights Reserved
          </p>
          
          <p className="mt-2 text-xs text-secondary-foreground/50">
            A registered social service organization committed to public welfare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
