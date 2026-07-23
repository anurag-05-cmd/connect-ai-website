import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-primary/[0.05] to-transparent border border-foreground/[0.05] overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="relative z-10 px-6 py-20 lg:py-24 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-foreground">
            Ready to Shape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Join thousands of researchers, engineers, and industry leaders at ConnectAI 2027. Secure your pass before early-bird registration closes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mt-4">
            <Button 
              size="lg" 
              asChild
              className="w-full sm:w-auto btn-3d-primary px-8 h-14 text-lg font-semibold group rounded-full text-white"
            >
              <a href="/registration">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="w-full sm:w-auto btn-3d-secondary h-14 px-8 text-lg font-semibold rounded-full border-none"
            >
              <a href="/call-for-papers">Submit a Paper</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
