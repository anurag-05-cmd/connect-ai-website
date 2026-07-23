import { PageLayout } from "@/components/ui/page-layout";
import { Target, Users, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            About The Conference
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-12">
            Shaping the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connected Intelligence</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The rapid advancement of Artificial Intelligence, connected technologies, and digital ecosystems is transforming the way industries, governments, and societies operate. The 1st International Conference on Connected Intelligence and Digital Transformation (ConnectAI 2027) aims to serve as a premier global platform for researchers, academicians, industry professionals, entrepreneurs, and policymakers to share innovative ideas, cutting-edge research, and practical solutions that drive the next generation of intelligent and interconnected systems.
              </p>
              <p>
                The conference focuses on the convergence of Artificial Intelligence (AI), Data Science, Internet of Things (IoT), Cybersecurity, Cloud Computing, Intelligent Automation, and Industry 5.0, highlighting their role in enabling sustainable and human-centric digital transformation. As organizations worldwide embrace digital innovation, there is an increasing need for intelligent systems that can seamlessly connect people, devices, data, and processes. ConnectAI 2027 seeks to address these challenges by fostering interdisciplinary discussions and collaborations that bridge the gap between academic research and industrial practice.
              </p>
              <p>
                Hosted by the Department of Computer Science & Engineering & Information Technology, Institute of Engineering & Management (IEM), Kolkata, the conference will feature keynote lectures by renowned experts, technical paper presentations, industry sessions, workshops, tutorials, panel discussions, and networking opportunities.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05] hover:bg-foreground/[0.04] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-foreground">Knowledge Exchange</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Original research contributions, case studies, industrial experiences, and innovative applications addressing contemporary global challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-foreground/[0.03] to-transparent border border-foreground/[0.05] hover:border-foreground/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To foster a collaborative ecosystem where groundbreaking ideas in AI and digital transformation can be shared, discussed, and developed into real-world solutions that benefit society.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-foreground/[0.03] to-transparent border border-foreground/[0.05] hover:border-foreground/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground">Who Should Attend?</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Researchers, engineers, product managers, policy makers, and anyone passionate about the future of technology and its impact on our globally connected world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
