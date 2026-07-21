import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

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

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Agenda
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-16">
            Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Schedule</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {schedule.map((day, dIndex) => (
              <div key={dIndex}>
                <h2 className="text-3xl font-display font-bold mb-8 pb-4 border-b border-foreground/10 text-primary">{day.day}</h2>
                <div className="space-y-6">
                  {day.events.map((event, eIndex) => (
                    <div key={eIndex} className="flex gap-6 group">
                      <div className="w-24 shrink-0 pt-1 text-muted-foreground font-mono text-sm group-hover:text-primary transition-colors">
                        {event.time}
                      </div>
                      <div className="flex-1 pb-6 border-b border-foreground/5 relative">
                        <div className="absolute left-[-35px] top-2.5 w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-primary transition-colors" />
                        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/70">
                          {event.type}
                        </span>
                      </div>
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
