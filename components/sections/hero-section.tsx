"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const word = "IRF";

const sideImages = [
  {
    src: "/images/hero-apoyo1.jpeg",
    alt: "Personal técnico realizando mantenimiento en equipo de climatización industrial",
    position: "left",
    span: 1,
  },
  {
    src: "/images/hero-apoyo2.jpeg",
    alt: "Instalación de ductería y recubrimientos en nave industrial",
    position: "left",
    span: 1,
  },
  {
    src: "/images/hero-apoyo3.jpeg",
    alt: "Personal técnico en recorrido de supervisión dentro de instalación industrial",
    position: "right",
    span: 1,
  },
  {
    src: "/images/hero-apoyo4.jpeg",
    alt: "Maniobra de grúa para montaje de estructura y equipo en obra industrial",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - scrollProgress / 0.2);

  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Responsive values
  const finalCenterWidth = isMobile ? 31 : 42;
  const finalCenterHeight = isMobile ? 46 : 70;
  const finalSideWidth = isMobile ? 24 : 22;
  const finalGap = isMobile ? 12 : 16;
  const finalBorderRadius = isMobile ? 22 : 24;

  const centerWidth = 100 - imageProgress * (100 - finalCenterWidth);
  const centerHeight = 100 - imageProgress * (100 - finalCenterHeight);
  const sideWidth = imageProgress * finalSideWidth;
  const sideOpacity = imageProgress;

  const sideTranslateLeft = isMobile
    ? -92 + imageProgress * 92
    : -100 + imageProgress * 100;

  const sideTranslateRight = isMobile
    ? 92 - imageProgress * 92
    : 100 - imageProgress * 100;

  const borderRadius = imageProgress * finalBorderRadius;
  const gap = imageProgress * finalGap;

  // Bajar más todo en móvil
  const sideTranslateY = isMobile ? imageProgress * 78 : -(imageProgress * 15);
  const centerTranslateY = isMobile ? imageProgress * 64 : 0;

  return (
    <section id="inicio" ref={sectionRef} className="relative overflow-x-clip bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{
              gap: `${gap}px`,
              padding: `${imageProgress * (isMobile ? 10 : 16)}px`,
              paddingBottom: `${isMobile ? 8 + imageProgress * 8 : 60 + imageProgress * 40}px`,
            }}
          >
            {/* Left Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: isMobile
                  ? `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}px)`
                  : `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
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
                      flex: isMobile ? "0 0 auto" : img.span,
                      aspectRatio: isMobile ? "3 / 4.1" : undefined,
                      minHeight: isMobile ? "170px" : undefined,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      style={isMobile ? { objectPosition: "center center" } : undefined}
                    />
                  </div>
                ))}
            </div>

            {/* Main Hero Image - Center */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
                transform: `translateY(${centerTranslateY}px)`,
              }}
            >
              <Image
                src="/images/hero-principal.jpeg"
                alt="Sistema de ductería HVAC e industrial instalado en nave de producción"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

              {/* Overlay Text */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 md:pb-20"
                style={{ opacity: textOpacity }}
              >
                <p
                  className="mb-4 animate-[slideUp_0.8s_ease-out_forwards] text-xs uppercase tracking-widest text-white/70 opacity-0"
                  style={{ animationDelay: "0.1s" }}
                >
                  Infraestructura, ingeniería y ejecución
                </p>

                <h1 className="text-[28vw] font-bold leading-[0.8] tracking-tighter text-white md:text-[22vw]">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        transition: "all 1.5s",
                        transitionTimingFunction: "cubic-bezier(0.86, 0, 0.07, 1)",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>

                <h2
                  className="mt-4 max-w-2xl animate-[slideUp_0.8s_ease-out_forwards] text-center text-2xl font-medium text-white opacity-0 md:text-3xl lg:text-4xl"
                  style={{ animationDelay: "0.35s" }}
                >
                  Soluciones integrales para la industria
                </h2>

                <div
                  className="mt-6 w-full max-w-3xl animate-[slideUp_0.8s_ease-out_forwards] px-4 opacity-0"
                  style={{ animationDelay: "0.5s" }}
                >
                  <p className="text-center text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
                    Ductería HVAC e industrial, aislamiento térmico, recubrimientos, refrigeración,
                    fabricación, montaje, mecanizado CNC, oxicorte, plasma y mantenimiento industrial
                    con enfoque en calidad, capacidad técnica y correcta ejecución.
                  </p>
                </div>

                <div
                  className="mt-8 flex flex-col gap-4 animate-[slideUp_0.8s_ease-out_forwards] opacity-0 sm:flex-row"
                  style={{ animationDelay: "0.65s" }}
                >
                  <button
                    onClick={scrollToContact}
                    className="rounded-full bg-white px-8 py-3 font-medium text-foreground transition-all hover:bg-white/90"
                  >
                    Solicitar cotización
                  </button>
                  <a
                    href="#proyectos"
                    className="rounded-full border border-white/30 bg-white/20 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30"
                  >
                    Ver proyectos
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: isMobile
                  ? `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}px)`
                  : `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
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
                      flex: isMobile ? "0 0 auto" : img.span,
                      aspectRatio: isMobile ? "3 / 4.1" : undefined,
                      minHeight: isMobile ? "170px" : undefined,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      style={isMobile ? { objectPosition: "center center" } : undefined}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200vh]" />
    </section>
  );
}