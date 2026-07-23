import { PageLayout } from "@/components/ui/page-layout";
import { Clock } from "lucide-react";

export default function SchedulePage() {
  const schedule = [
    {
      day: "Day 1 - October 24",
      events: [
        { time: "08:00 AM", title: "Registration & Breakfast", type: "Social" },
        { time: "09:30 AM", title: "Opening Keynote: The Future of AI", type: "Keynote" },
        { time: "11:00 AM", title: "Panel: AI Ethics & Governance", type: "Panel" },
        { time: "01:00 PM", title: "Networking Lunch", type: "Social" },
        { time: "02:30 PM", title: "Paper Presentations: Track A", type: "Track" },
      ]
    },
    {
      day: "Day 2 - October 25",
      events: [
        { time: "09:00 AM", title: "Keynote: Digital Twins in Industry", type: "Keynote" },
        { time: "10:30 AM", title: "Workshops & Tutorials", type: "Workshop" },
        { time: "12:30 PM", title: "Lunch Break", type: "Social" },
        { time: "02:00 PM", title: "Paper Presentations: Track B", type: "Track" },
        { time: "07:00 PM", title: "Gala Dinner & Awards", type: "Social" },
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Keynote': return 'bg-primary/10 text-primary border-primary/20';
      case 'Panel': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Track': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Workshop': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default: return 'bg-foreground/5 text-foreground/70 border-foreground/10';
    }
  };

  return (
    <PageLayout>
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Agenda
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-16">
            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Schedule</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {schedule.map((day, dIndex) => (
              <div key={dIndex} className="relative">
                <div className="flex items-center gap-4 mb-10 sticky top-24 z-10 bg-background/80 backdrop-blur-md py-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground">{day.day}</h2>
                </div>
                
                <div className="relative border-l-2 border-foreground/[0.05] ml-6 space-y-8 pb-8">
                  {day.events.map((event, eIndex) => (
                    <div key={eIndex} className="relative pl-8 group">
                      <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-foreground/20 group-hover:border-primary transition-colors duration-300" />
                      
                      <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05] group-hover:bg-foreground/[0.04] group-hover:border-foreground/10 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                          <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">{event.title}</h3>
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border shrink-0 ${getTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
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
