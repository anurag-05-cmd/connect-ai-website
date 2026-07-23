"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const words = ["connect", "innovate", "transform", "lead"];

const CHARS = "!<>-_\\/[]{}—=+*^?#_0123456789";

function ScrambledWord({ targetWord }: { targetWord: string }) {
  const [scrambleArray, setScrambleArray] = useState<{char: string, resolved: boolean}[]>(
    targetWord.split("").map(c => ({ char: c, resolved: true }))
  );

  useEffect(() => {
    let iteration = 0;
    const maxIterations = 20; 
    
    const interval = setInterval(() => {
      setScrambleArray((prev) => {
        return targetWord.split("").map((actualChar, index) => {
          const resolveThreshold = (index / targetWord.length) * maxIterations;
          
          if (iteration >= resolveThreshold) {
            return { char: actualChar, resolved: true };
          }
          
          return { 
            char: CHARS[Math.floor(Math.random() * CHARS.length)], 
            resolved: false 
          };
        });
      });

      if (iteration > maxIterations) {
        clearInterval(interval);
      }
      
      iteration++;
    }, 30);

    return () => clearInterval(interval);
  }, [targetWord]);

  return (
    <span className="inline-block relative pb-2">
      {scrambleArray.map((item, i) => (
        <span 
          key={i}
          className={
            item.resolved 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              : "text-primary/70 font-mono font-bold"
          }
        >
          {item.char}
        </span>
      ))}
      <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 rounded-full" />
    </span>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
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
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase">
            <span className="w-8 h-px bg-primary" />
            ConnectAI 2027 Conference
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Intelligence</span>
            <span className="block flex items-end">
              to{" "}
              <span className="relative inline-block overflow-visible ml-4 pb-2">
                {/* Invisible placeholder for stable width based on the longest word */}
                <span className="invisible pr-4">transform</span>
                <span className="absolute left-0 top-0 whitespace-nowrap">
                  <ScrambledWord targetWord={words[wordIndex]} />
                </span>
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p 
            className={`text-l lg:text-l text-muted-foreground leading-relaxed max-w-l transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Organized by: 
Department of Computer Science & Engineering & Information Technology, Institute of Engineering & Management (IEM)

          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-start gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              asChild
              className="btn-3d-primary px-8 h-14 text-base font-semibold group rounded-full text-white"
            >
              <a href="/registration">
                Register Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="btn-3d-secondary h-14 px-8 text-base font-semibold rounded-full border-none"
            >
              <a href="/schedule">View Schedule</a>
            </Button>
          </div>
        </div>
        
      </div>
      
      {/* Stats marquee - full width outside container */}
      <div 
        className={`absolute bottom-0 left-0 right-0 border-y border-foreground/10 bg-background/50 backdrop-blur-md py-6 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {[
                { value: "5,000+", label: "Attendees", subtitle: "Global" },
                { value: "150+", label: "Speakers", subtitle: "Industry Leaders" },
                { value: "5", label: "Tracks", subtitle: "Technical Sessions" },
                { value: "3", label: "Days", subtitle: "Immersive Event" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{stat.value}</span>
                    <div className="flex flex-col justify-center">
                      <span className="text-sm font-bold text-foreground uppercase tracking-wider">{stat.label}</span>
                      <span className="text-xs font-mono text-primary/80">{stat.subtitle}</span>
                    </div>
                  </div>
                  {/* Divider dot between items */}
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 ml-10" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
