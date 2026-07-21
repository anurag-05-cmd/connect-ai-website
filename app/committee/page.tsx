import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export default function CommitteePage() {
  const committees = [
    {
      title: "Organizing Committee",
      members: [
        { name: "Dr. Elena Rostova", role: "General Chair" },
        { name: "Prof. James Lin", role: "Program Chair" },
        { name: "Sarah Jenkins", role: "Local Arrangements Chair" },
      ]
    },
    {
      title: "Advisory Board",
      members: [
        { name: "Dr. Michael Chen", role: "AI Research Director" },
        { name: "Prof. Anna Müller", role: "Dean of Computer Science" },
        { name: "David O'Connor", role: "VP of Digital Transformation" },
      ]
    }
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Leadership
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            Organizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Committee</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-16">
            Meet the dedicated individuals behind ConnectAI 2027.
          </p>
          
          <div className="space-y-16">
            {committees.map((committee, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-display font-bold mb-8 border-b border-foreground/10 pb-4">{committee.title}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {committee.members.map((member, index) => (
                    <div key={index} className="p-6 border border-foreground/10 rounded-2xl bg-foreground/5 hover:border-primary/30 transition-colors">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
