"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [translateX, setTranslateX] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
    { src: "/images/galeria1.jpeg", alt: "Instalación de ductos HVAC" },
    { src: "/images/galeria2.jpeg", alt: "Sistema de ductería industrial" },
    { src: "/images/galeria3.jpeg", alt: "Trabajos de soldadura" },
    { src: "/images/galeria4.jpeg", alt: "Planta industrial" },
    { src: "/images/galeria5.jpeg", alt: "Estructuras metálicas" },
    { src: "/images/galeria6.jpeg", alt: "Mantenimiento industrial" },
    { src: "/images/galeria7.jpeg", alt: "Sistemas de refrigeración" },
    { src: "/images/galeria8.jpeg", alt: "Instalaciones industriales" },
  ];

  useEffect(() => {
    const calculateHeight = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const totalHeight = viewportHeight + (containerWidth - viewportWidth);
      setSectionHeight(`${totalHeight}px`);
    };

    const timer = setTimeout(calculateHeight, 100);
    window.addEventListener("resize", calculateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  const updateTransform = useCallback(() => {
    if (!galleryRef.current || !containerRef.current) return;

    const rect = galleryRef.current.getBoundingClientRect();
    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const totalScrollDistance = containerWidth - viewportWidth;
    const scrolled = Math.max(0, -rect.top);
    const progress = Math.min(1, scrolled / totalScrollDistance);
    const newTranslateX = progress * -totalScrollDistance;

    setTranslateX(newTranslateX);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform]);

  return (
    <section
      ref={galleryRef}
      className="relative overflow-x-clip bg-background"
      style={{ height: sectionHeight }}
    >
      {/* Section Header - OUTSIDE sticky, fixed position at top, no overlap */}
      <div className="relative z-20 bg-background px-6 pt-12 pb-4 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Galería</p>
          <h3 className="text-2xl font-medium text-foreground md:text-3xl">
            Una muestra de nuestro trabajo
          </h3>
        </div>
      </div>

      {/* Sticky container - starts after header */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative flex h-full items-center">
          {/* Horizontal scrolling container */}
          <div
            ref={containerRef}
            className="flex gap-6 px-6"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              WebkitTransform: `translate3d(${translateX}px, 0, 0)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              perspective: 1000,
              WebkitPerspective: 1000,
              touchAction: "pan-y",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[60vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[60vw] lg:w-[45vw]"
                style={{
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-sm font-medium text-white">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator - always visible */}
          <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-white/80">
            <span className="text-[11px] uppercase tracking-[0.25em] md:text-xs">
              Desplázate hacia abajo
            </span>
            <div className="mt-3 animate-bounce text-xl leading-none md:text-2xl">
              ⌄
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}