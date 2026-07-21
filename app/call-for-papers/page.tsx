import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallForPapersPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Submissions
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            Call For <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Papers</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
            We invite researchers and practitioners to submit their latest work on Artificial Intelligence, Machine Learning, and Digital Transformation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="p-8 border border-foreground/10 rounded-2xl bg-foreground/5 relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-display text-primary">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Important Dates</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex justify-between border-b border-foreground/10 pb-2">
                  <span>Abstract Submission:</span>
                  <span className="text-foreground font-medium">October 15, 2026</span>
                </li>
                <li className="flex justify-between border-b border-foreground/10 pb-2">
                  <span>Full Paper Submission:</span>
                  <span className="text-foreground font-medium">November 1, 2026</span>
                </li>
                <li className="flex justify-between border-b border-foreground/10 pb-2">
                  <span>Author Notification:</span>
                  <span className="text-foreground font-medium">January 15, 2027</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Camera-Ready Due:</span>
                  <span className="text-foreground font-medium">February 28, 2027</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border border-foreground/10 rounded-2xl bg-foreground/5 relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-display text-primary">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Topics of Interest</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Machine Learning & Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>AI in Healthcare & Medicine</li>
                <li>Autonomous Systems & Robotics</li>
                <li>Ethics, Privacy, and Security in AI</li>
                <li>Digital Twins and Smart Cities</li>
                <li>Edge Computing & IoT</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 h-14 text-base font-bold rounded-full shadow-lg shadow-primary/25">
              Submit Your Paper
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
