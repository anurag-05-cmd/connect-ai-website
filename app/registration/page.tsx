import { PageLayout } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    <PageLayout>
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
              <div key={index} className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${tier.highlighted ? 'border-primary/50 bg-gradient-to-b from-primary/[0.08] to-transparent shadow-xl shadow-primary/10' : 'border-foreground/[0.08] bg-foreground/[0.02] hover:bg-foreground/[0.04]'} flex flex-col`}>
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2 text-foreground">{tier.name}</h3>
                <p className="text-muted-foreground mb-6 h-12 text-sm leading-relaxed">{tier.description}</p>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-bold font-display text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground font-medium">/person</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${tier.highlighted ? 'bg-primary/20 text-primary' : 'bg-foreground/10 text-foreground/70'}`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-foreground/80 font-medium text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full h-12 rounded-xl text-base font-bold transition-all shadow-sm ${tier.highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md' : 'bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10 hover:border-foreground/20'}`}
                >
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
