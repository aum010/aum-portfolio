"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const heroEl = heroRef.current;
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;

    if (titleEl) {
      gsap.from(titleEl, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroEl,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    if (subtitleEl) {
      gsap.from(subtitleEl, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroEl,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center py-32 bg-background-light dark:bg-background-dark transition-colors duration-500"
    >
      <h1
        ref={titleRef}
        className="text-5xl md:text-6xl font-bold text-[#3895D3] mb-4"
      >
        Hi, I am Om Prakash Bhushal
      </h1>
      <p
        ref={subtitleRef}
        className="text-lg md:text-xl text-secondary-light dark:text-secondary-dark max-w-xl"
      >
        Multi-disciplinary Designer & Data Enthusiast. UX/UI, Product Design,
        Data Science, Digital Art & more.
      </p>

      <div className="absolute bottom-8 animate-bounce text-[#3895D3]">
        ↓ Scroll
      </div>
    </section>
  );
}