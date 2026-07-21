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
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
            ConnectAI 2027 brings together researchers, industry leaders, and innovators from around the globe to explore the rapidly evolving landscape of artificial intelligence, connected systems, and digital transformation.
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
