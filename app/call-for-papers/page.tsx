import { PageLayout } from "@/components/ui/page-layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Bookmark, Clock, CheckCircle2 } from "lucide-react";

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
  const deadlines = [
    { label: "Abstract Submission", date: "October 15, 2026", icon: Bookmark, passed: true },
    { label: "Full Paper Submission", date: "November 1, 2026", icon: Clock, passed: false },
    { label: "Author Notification", date: "January 15, 2027", icon: Calendar, passed: false },
    { label: "Camera-Ready Due", date: "February 28, 2027", icon: CheckCircle2, passed: false },
  ];

  return (
    <PageLayout>
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
            We invite researchers and practitioners to submit their latest work on Artificial Intelligence, Machine Learning, and Digital Transformation. All accepted papers will be published in the conference proceedings.
          </p>
          
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground">Important Dates</h3>
                </div>
                
                <div className="space-y-6">
                  {deadlines.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.passed ? 'bg-foreground/10 text-foreground/50' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 border-b border-foreground/[0.05] pb-4 group-last:border-0 group-last:pb-0">
                          <p className={`font-medium ${item.passed ? 'text-foreground/50 line-through' : 'text-foreground'}`}>{item.label}</p>
                          <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center">
                <h3 className="text-xl font-bold mb-4 font-display text-foreground">Ready to submit?</h3>
                <p className="text-muted-foreground text-sm mb-6">Ensure your paper follows the IEEE formatting guidelines before submission.</p>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl text-base font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  Submit Your Paper
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05]">
                <h3 className="text-2xl font-bold mb-8 font-display text-foreground">Conference Tracks</h3>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {tracks.map((track, i) => (
                    <AccordionItem key={i} value={`track-${i}`} className="border border-foreground/[0.05] rounded-2xl px-6 bg-background hover:border-foreground/10 transition-colors data-[state=open]:border-primary/30">
                      <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5 [&[data-state=open]]:text-primary transition-colors">
                        {track.title}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                          {track.topics.map((topic, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
