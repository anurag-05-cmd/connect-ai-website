import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function VenuePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Location
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Venue</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">West Bengal</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                ConnectAI 2027 will be hosted at the state-of-the-art Global Innovation Center, featuring world-class facilities designed for collaboration and technical showcases.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-muted-foreground">Kolkata<br />Salt Lake</p>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            <div className="aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl bg-foreground/5 border border-foreground/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-500" />
              {/* Placeholder for Map/Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground font-mono">[Interactive Map Area]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
