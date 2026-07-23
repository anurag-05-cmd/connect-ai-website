import { PageLayout } from "@/components/ui/page-layout";
import { User } from "lucide-react";

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

  const getInitials = (name: string) => {
    return name
      .replace(/Dr\.|Prof\./g, "")
      .trim()
      .split(" ")
      .map(n => n[0])
      .join("")
      .substring(0, 2);
  };

  return (
    <PageLayout>
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
          
          <div className="space-y-20">
            {committees.map((committee, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-display font-bold text-foreground">{committee.title}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {committee.members.map((member, index) => (
                    <div key={index} className="group p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05] hover:bg-foreground/[0.04] transition-all duration-300 flex items-center gap-5 hover:shadow-sm">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="font-display font-bold text-lg text-foreground/80 tracking-widest">{getInitials(member.name)}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1 font-display leading-tight">{member.name}</h3>
                        <p className="text-sm text-primary font-medium">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
