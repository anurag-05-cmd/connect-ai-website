import { PageLayout } from "@/components/ui/page-layout";
import { MapPin, Navigation, Train, Plane } from "lucide-react";

export default function VenuePage() {
  return (
    <PageLayout>
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Location
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Venue</span>
          </h1>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start mt-16">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4 text-foreground">Institute of Engineering & Management (IEM)</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  ConnectAI 2027 will be hosted at the IEM campus in Salt Lake, Kolkata, featuring world-class facilities designed for collaboration and technical showcases.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05] flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Salt Lake Electronics Complex<br />
                      Sector V, Kolkata<br />
                      West Bengal 700091, India
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05] flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Plane className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Airport Access</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      15 km from Netaji Subhash Chandra Bose International Airport (CCU). Approx 30 mins by taxi.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05] flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Train className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Public Transit</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Accessible via East-West Metro (Salt Lake Sector V Station) and major bus routes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 aspect-square lg:aspect-auto lg:h-[700px] rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/[0.05] overflow-hidden relative group p-2">
              <div className="w-full h-full rounded-[2rem] bg-foreground/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                
                {/* Mock Map Marker */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="w-16 h-16 rounded-full bg-background shadow-xl flex items-center justify-center mb-2 border border-foreground/10">
                    <Navigation className="w-8 h-8 text-primary fill-primary/20" />
                  </div>
                  <div className="px-4 py-2 bg-background border border-foreground/10 rounded-full shadow-lg">
                    <span className="font-semibold text-sm">IEM Kolkata</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-foreground/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-foreground">Interactive Map</h4>
                    <p className="text-sm text-muted-foreground">Explore the surrounding area</p>
                  </div>
                  <button className="px-6 py-2.5 bg-foreground text-background rounded-full font-medium text-sm hover:bg-foreground/90 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
