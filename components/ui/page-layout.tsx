"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { AnimatedSphere } from "@/components/landing/animated-sphere";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
      <Navigation />
      
      {/* Background Effects matching Home Page */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none overflow-hidden">
        <AnimatedSphere />
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 fixed">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div 
        className={`flex-1 flex flex-col relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>

      <FooterSection />
    </main>
  );
}
