import { PageLayout } from "@/components/ui/page-layout";
import { Globe, MessageCircle } from "lucide-react";

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
    <PageLayout>
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {speakers.map((speaker, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05] hover:bg-foreground/[0.03] transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-6 shadow-xl shadow-primary/20 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                        {speaker.image}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 font-display text-foreground">{speaker.name}</h3>
                  <p className="text-primary font-medium mb-3">{speaker.role}</p>
                  <p className="text-muted-foreground text-sm font-medium">{speaker.company}</p>
                  
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-foreground/[0.05] w-full justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 rounded-full bg-foreground/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-foreground/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors">
                      <Globe className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
