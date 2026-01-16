import { Shield, Lock, FileText } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="bg-muted/50 py-8 md:py-12">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {/* Trust Badges */}
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Lock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Secure & Confidential</p>
                <p className="text-xs text-muted-foreground">Your data is protected</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Official Registration</p>
                <p className="text-xs text-muted-foreground">Verified membership</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                <FileText className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Legal Compliance</p>
                <p className="text-xs text-muted-foreground">NGO registered entity</p>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 rounded-lg border border-border bg-card/50 p-4 text-center md:mt-8">
            <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
              <strong className="text-foreground">Disclaimer:</strong> All information collected 
              through this registration form is used exclusively for official NGO purposes. 
              Your personal data is handled in accordance with applicable data protection 
              regulations and will not be shared with third parties without your consent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
