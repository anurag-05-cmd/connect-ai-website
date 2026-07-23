import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tracks = [
  {
    title: "Track 1: Artificial Intelligence & Data Analytics",
    topics: [
      "Machine Learning and Deep Learning",
      "Generative AI and Large Language Models",
      "Natural Language Processing", "Computer Vision and Pattern Recognition", 
      "Explainable and Responsible AI", "Data Mining and Knowledge Discovery", 
      "Big Data Analytics", "Predictive and Prescriptive Analytics", 
      "AI in Healthcare, Finance, and Industry", "Business Intelligence",
    ],
  },
  {
    title: "Track 2: Connected Systems, IoT & Smart Computing",
    topics: [
      "Internet of Things (IoT) ",
      "Cyber-Physical Systems",
      "Smart Cities and Smart Infrastructure ", "Smart Healthcare Systems ", 
      "Intelligent Transportation Systems", "Wireless Sensor Networks ", 
      "Edge and Fog Computing", "Embedded and Real-Time Systems ", 
      "Autonomous and Intelligent Devices", "Green and Sustainable Computing ",
      "Bioinformatics & Computational Biology",
    ],
  },
  {
    title: "Track 3: Cloud Computing, Networks & Digital Infrastructure",
    topics: [
      "Cloud and Distributed Computing",
      "Edge-Cloud Integration ",
      "High-Performance Computing", "Software-Defined Networking", 
      "Network Function Virtualization", "5G and Beyond (6G) Networks", 
      "Internet Architecture and Future Networks", "Resource Management and Scheduling", 
      "Network Intelligence and Optimization", "Digital Infrastructure for Smart Applications",
    ],
  },
  {
    title: "Track 4: Cybersecurity, Blockchain & Digital Trust",
    topics: [
      "Information and Network Security",
      "Cyber Threat Intelligence",
      "Blockchain and Distributed Ledger Technologies", "Privacy-Preserving Technologies", "Secure Software Engineering", "Digital Forensics",
      "Authentication and Access Control", "Cryptographic Techniques", "Trustworthy AI and Secure AI Systems", "Cybersecurity for IoT and Smart Systems",
    ],
  },
  {
    title: "Track 5: Industry 5.0, Digital Transformation & Emerging Technologies",
    topics: [
      "Industry 5.0 and Smart Manufacturing",
      "Digital Twins and Intelligent Automation",
      "Robotics and Human–Machine Collaboration", "Industrial AI Applications", "FinTech, HealthTech, and EdTech Innovations"
      ,"Quantum Computing", "Augmented, Virtual, and Mixed Reality (AR/VR/MR)", "Metaverse Technologies"
      ,"Sustainable Digital Transformation", "Innovation Management and Digital Business Models"
    ],
  },
];

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
              <h3 className="text-2xl font-bold mb-4 font-display">Conference Tracks</h3>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {tracks.map((track) => (
                  <AccordionItem key={track.title} value={track.title} className="border border-foreground/10 rounded-xl px-4 bg-background/40">
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-3">
                      {track.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-2 pb-2">
                        {track.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
