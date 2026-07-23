"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Conference: [
    { name: "About", href: "/about" },
    { name: "Committee", href: "/committee" },
    { name: "Speakers", href: "/speakers" },
  ],
  Program: [
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Venue", href: "/venue" },
  ],
  Attend: [
    { name: "Registration", href: "/registration", badge: "Open" },
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display font-bold">ConnectAI</span>
                <span className="text-xs text-primary font-mono font-bold tracking-widest">2027</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                The 1st International Conference on Connected Intelligence and Digital Transformation.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-bold mb-6 font-display">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                         href={link.href}
                         className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                         {link.name}
                         {"badge" in link && link.badge && (
                           <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-primary/20 text-primary rounded-full">
                             {link.badge}
                           </span>
                         )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2027 ConnectAI Conference. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              Organized by IEM Kolkata
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
