"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startOffset = windowHeight * 0.9;
      const endOffset = windowHeight * 0.1;

      const totalDistance = startOffset - endOffset;
      const currentPosition = startOffset - rect.top;

      const newProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="mx-auto max-w-4xl text-2xl font-semibold leading-snug md:text-3xl lg:text-4xl"
    >
      {words.map((word, index) => {
        const wordProgress = index / words.length;
        const isRevealed = progress > wordProgress;

        return (
          <span
            key={index}
            className="transition-colors duration-150"
            style={{
              color: isRevealed ? "var(--foreground)" : "#cbd5e1",
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

const sideImages = [
  {
    src: "/images/Proyectos-header-apoyo1.jpeg",
    alt: "Equipos HVAC industriales con ductería metálica y sistema de ventilación en área técnica",
    position: "left",
    span: 1,
  },
  {
    src: "/images/Proyectos-header-apoyo2.jpeg",
    alt: "Salidas de ventilación y extracción en cubierta metálica para sistema HVAC industrial",
    position: "left",
    span: 1,
  },
  {
    src: "/images/Proyectos-header-apoyo3.jpeg",
    alt: "Maniobra de traslado e instalación de ducto industrial de gran diámetro en sitio",
    position: "right",
    span: 1,
  },
  {
    src: "/images/Proyectos-header-apoyo4.jpeg",
    alt: "Montaje de estructura y componente industrial durante maniobra de instalación en proyecto especial",
    position: "right",
    span: 1,
  },
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const descriptionText =
    "Proyectos reales en ductería, HVAC, aislamiento, fabricación, montaje y soluciones industriales ejecutadas con enfoque en calidad y cumplimiento.";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  const finalCenterWidth = isMobile ? 42 : 42;
  const finalSideWidth = isMobile ? 26 : 22;
  const finalGap = isMobile ? 8 : 16;
  const finalBorderRadius = isMobile ? 20 : 24;

  const centerWidth = 100 - imageProgress * (100 - finalCenterWidth);
  const sideWidth = imageProgress * finalSideWidth;
  const sideOpacity = imageProgress;

  const sideTranslateLeft = isMobile
    ? -88 + imageProgress * 88
    : -100 + imageProgress * 100;

  const sideTranslateRight = isMobile
    ? 88 - imageProgress * 88
    : 100 - imageProgress * 100;

  const borderRadius = imageProgress * finalBorderRadius;
  const gap = imageProgress * finalGap;

  return (
    <section id="proyectos" ref={sectionRef} className="relative overflow-x-clip bg-primary">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{
              gap: `${gap}px`,
              padding: `${imageProgress * (isMobile ? 8 : 16)}px`,
            }}
          >
            {/* Left Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "left")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>

            {/* Main Center Image */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: "100%",
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/images/Proyectos-header.jpeg"
                alt="Instalación de ductería industrial galvanizada en línea de producción dentro de nave industrial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/40" />

              {/* Title Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <p className="mb-4 text-sm uppercase tracking-widest text-white/70">Proyectos</p>
                <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                  {["Una", "muestra", "de", "nuestro", "trabajo."].map((word, index) => {
                    const wordFadeStart = index * 0.04;
                    const wordFadeEnd = wordFadeStart + 0.1;
                    const wordProgress = Math.max(
                      0,
                      Math.min(1, (scrollProgress - wordFadeStart) / (wordFadeEnd - wordFadeStart))
                    );
                    const wordOpacity = 1 - wordProgress;
                    const wordBlur = wordProgress * 10;

                    return (
                      <span
                        key={index}
                        className="inline-block"
                        style={{
                          opacity: wordOpacity,
                          filter: `blur(${wordBlur}px)`,
                          transition: "opacity 0.1s linear, filter 0.1s linear",
                          marginRight: "0.25em",
                        }}
                      >
                        {word}
                      </span>
                    );
                  })}
                </h2>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white/75">
                <span className="text-[11px] uppercase tracking-[0.25em] md:text-xs">
                  {isMobile ? "Desliza hacia abajo" : "Desplázate hacia abajo"}
                </span>

                <div className="mt-3 animate-bounce text-xl leading-none md:text-2xl">
                  ⌄
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "right")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200vh]" />

      <div className="relative overflow-hidden bg-background px-6 py-12 md:px-12 md:py-14 lg:px-20 lg:py-16">
        <div className="relative z-10 text-center">
          <ScrollRevealText text={descriptionText} />
        </div>
      </div>
    </section>
  );
}