import { Mic2, Network, Presentation, Lightbulb } from "lucide-react";

export function FeaturesSection() {
  const highlights = [
    {
      title: "World-Class Speakers",
      description: "Hear from leading AI pioneers, industry titans, and visionary researchers shaping the next decade of technology.",
      icon: <Mic2 className="w-8 h-8 text-primary" />,
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/[0.08] to-transparent border-primary/20",
    },
    {
      title: "Global Networking",
      description: "Connect with thousands of professionals, academics, and innovators from around the world.",
      icon: <Network className="w-6 h-6 text-secondary" />,
      className: "md:col-span-1 md:row-span-1 bg-foreground/[0.02] border-foreground/[0.05]",
    },
    {
      title: "Paper Presentations",
      description: "Dive deep into the latest peer-reviewed research across 5 cutting-edge tracks.",
      icon: <Presentation className="w-6 h-6 text-purple-400" />,
      className: "md:col-span-1 md:row-span-1 bg-foreground/[0.02] border-foreground/[0.05]",
    },
    {
      title: "Hands-on Workshops",
      description: "Master new tools and frameworks in our interactive, expert-led technical sessions.",
      icon: <Lightbulb className="w-6 h-6 text-orange-400" />,
      className: "md:col-span-2 md:row-span-1 bg-foreground/[0.02] border-foreground/[0.05]",
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
      <div className="mb-16 md:text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6 md:justify-center w-full">
          <span className="w-8 h-px bg-primary hidden md:block" />
          Highlights
          <span className="w-8 h-px bg-primary" />
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
          Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span>
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Three days of intensive learning, groundbreaking announcements, and unprecedented networking opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 lg:gap-8 auto-rows-fr">
        {highlights.map((item, i) => (
          <div 
            key={i} 
            className={`relative p-8 lg:p-10 rounded-3xl border overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${item.className}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110">
              {item.icon}
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-end">
              <div className="mb-6 bg-background/50 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center border border-foreground/10 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
