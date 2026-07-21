import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function SpeakersPage() {
  const speakers = [
    { name: "Dr. Alan Turing", role: "AI Pioneer", company: "Institute of Compute", image: "AT" },
    { name: "Ada Lovelace", role: "Chief Scientist", company: "Algorithmic Future", image: "AL" },
    { name: "Grace Hopper", role: "VP of Engineering", company: "Compiler Systems", image: "GH" },
    { name: "John McCarthy", role: "Director of AI", company: "LISP Dynamics", image: "JM" },
    { name: "Marvin Minsky", role: "Head of Research", company: "Cognitive Machines", image: "MM" },
    { name: "Claude Shannon", role: "Information Theorist", company: "Bit Communications", image: "CS" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Visionaries
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            Keynote <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Speakers</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-16">
            Hear from the brightest minds shaping the future of connected intelligence.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="group p-6 border border-foreground/10 rounded-2xl bg-background hover:border-primary/50 transition-all duration-300 hover-lift">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6">
                  {speaker.image}
                </div>
                <h3 className="text-2xl font-bold mb-2 font-display">{speaker.name}</h3>
                <p className="text-primary font-medium mb-1">{speaker.role}</p>
                <p className="text-muted-foreground text-sm">{speaker.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
