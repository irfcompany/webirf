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
    { src: "/images/galeria2.jpeg", alt: "Inyección de aire a pleno" },
    { src: "/images/galeria3.jpeg", alt: "Pailería y trazos industriales" },
    { src: "/images/galeria4.jpeg", alt: "Inyección directa de manejadoras industriales" },
    { src: "/images/galeria5.jpeg", alt: "Estructuras metálicas y laminados KR18" },
    { src: "/images/galeria6.jpeg", alt: "Mantenimiento industrial" },
    { src: "/images/galeria7.jpeg", alt: "Sistemas de refrigeración" },
    { src: "/images/galeria8.jpeg", alt: "Aislamientos térmicos especializados" },
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
      {/* Section Header */}
      <div className="relative z-20 bg-background px-6 pb-4 pt-8 md:px-12 md:pb-5 md:pt-10 lg:px-20 lg:pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            Galería
          </p>

          <h3 className="text-2xl font-medium text-foreground md:text-3xl lg:text-4xl">
            Una muestra de nuestro trabajo
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Proyectos reales en ductería, HVAC, aislamiento, fabricación, montaje y
            soluciones industriales ejecutadas con calidad y cumplimiento.
          </p>
        </div>
      </div>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Indicador fijo y visible */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-[#0f172a] drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">
          <span className="text-[9px] uppercase tracking-[0.22em] md:text-[10px]">
            Desplázate hacia abajo
          </span>
          <div className="mt-2 animate-bounce text-base leading-none md:text-lg">
            ⌄
          </div>
        </div>

        <div className="flex h-full items-center">
          <div
            ref={containerRef}
            className="flex gap-6 pl-16 pr-6 md:gap-7 md:pl-20 md:pr-8 lg:gap-8 lg:pl-24 lg:pr-10"
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
                className="relative h-[58vh] w-[82vw] flex-shrink-0 overflow-hidden rounded-2xl md:h-[60vh] md:w-[54vw] lg:h-[62vh] lg:w-[38vw]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
                <div className="absolute bottom-6 left-6 pr-4">
                  <span className="text-sm font-medium text-white md:text-[15px]">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}