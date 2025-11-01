"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({
  title,
  description,
  link,
  imageSrc,
  className = "",
}: {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  className?: string;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const el = cardRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <a
      ref={cardRef}
      href={link}
      target="_blank"
      className={`p-4 bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 ${className}`}
    >
      <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold text-[#3895D3] mb-2">{title}</h3>
      <p className="text-secondary-light dark:text-secondary-dark">{description}</p>
    </a>
  );
}