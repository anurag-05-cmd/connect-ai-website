import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";

export default function RegistrationPage() {
  const tiers = [
    {
      name: "Student Pass",
      price: "$199",
      description: "For currently enrolled students with valid ID.",
      features: ["Full conference access", "Workshop entry", "Digital proceedings", "Networking events"],
      highlighted: false
    },
    {
      name: "Professional Pass",
      price: "$599",
      description: "Standard access for industry professionals.",
      features: ["Full conference access", "All workshops & tutorials", "Printed proceedings", "Gala dinner included", "VIP Networking lounge"],
      highlighted: true
    },
    {
      name: "Virtual Pass",
      price: "$99",
      description: "Access the conference from anywhere in the world.",
      features: ["Live stream of keynotes", "On-demand sessions", "Virtual networking", "Digital proceedings"],
      highlighted: false
    }
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Tickets
            <span className="w-8 h-px bg-primary" />
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Spot</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            Choose the pass that best fits your needs and join us for three days of innovation and discovery.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative p-8 rounded-3xl border ${tier.highlighted ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/20' : 'border-foreground/10 bg-background'} flex flex-col`}>
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-6 h-12">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold font-display">{tier.price}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full h-12 rounded-full text-base font-bold ${tier.highlighted ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90' : 'bg-foreground text-background hover:bg-foreground/90'}`}
                >
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
