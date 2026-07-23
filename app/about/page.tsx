import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            About The Conference
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            Shaping the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connected Intelligence</span>
          </h1>
          <p className="text-l text-muted-foreground leading-relaxed max-w-3xxl mb-12">
            The rapid advancement of Artificial Intelligence, connected technologies, and digital ecosystems is transforming the way industries, governments, and societies operate. The 1st International Conference on Connected Intelligence and Digital Transformation (ConnectAI 2027) aims to serve as a premier global platform for researchers, academicians, industry professionals, entrepreneurs, and policymakers to share innovative ideas, cutting-edge research, and practical solutions that drive the next generation of intelligent and interconnected systems.
The conference focuses on the convergence of Artificial Intelligence (AI), Data Science, Internet of Things (IoT), Cybersecurity, Cloud Computing, Intelligent Automation, and Industry 5.0, highlighting their role in enabling sustainable and human-centric digital transformation. As organizations worldwide embrace digital innovation, there is an increasing need for intelligent systems that can seamlessly connect people, devices, data, and processes. ConnectAI 2027 seeks to address these challenges by fostering interdisciplinary discussions and collaborations that bridge the gap between academic research and industrial practice.
Hosted by the Department of Computer Science & Engineering & Information Technology, Institute of Engineering & Management (IEM), Kolkata, the conference will feature keynote lectures by renowned experts, technical paper presentations, industry sessions, workshops, tutorials, panel discussions, and networking opportunities. The event will provide participants with valuable insights into emerging technologies, research trends, and real-world applications that are shaping the future of connected intelligence and digital transformation.
The conference welcomes original research contributions, case studies, industrial experiences, and innovative applications from researchers and practitioners across academia, industry, and government organizations. Through knowledge exchange and collaborative engagement, ConnectAI 2027 aims to contribute to the development of intelligent, secure, and sustainable digital solutions for addressing contemporary global challenges.

          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To foster a collaborative ecosystem where groundbreaking ideas in AI and digital transformation can be shared, discussed, and developed into real-world solutions that benefit society.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">Who Should Attend?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Researchers, engineers, product managers, policy makers, and anyone passionate about the future of technology and its impact on our globally connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
