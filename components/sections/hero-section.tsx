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

  // Desktop animation only
  const textOpacity = Math.max(0, 1 - scrollProgress / 0.2);
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  const finalSideWidth = 22;
  const finalCenterWidth = 42;
  const finalCenterHeight = 70;
  const finalGap = 16;
  const finalBorderRadius = 24;
  const finalSideTranslateY = -15;

  const centerWidth = 100 - imageProgress * (100 - finalCenterWidth);
  const centerHeight = 100 - imageProgress * (100 - finalCenterHeight);
  const sideWidth = imageProgress * finalSideWidth;
  const sideOpacity = imageProgress;

  const sideTranslateLeft = -100 + imageProgress * 100;
  const sideTranslateRight = 100 - imageProgress * 100;

  const borderRadius = imageProgress * finalBorderRadius;
  const gap = imageProgress * finalGap;
  const sideTranslateY = -(imageProgress * finalSideTranslateY);

  return (
    <section id="inicio" ref={sectionRef} className="relative overflow-x-clip bg-background">
      {/* MOBILE HERO */}
      <div className="relative min-h-screen px-4 pb-10 pt-24 md:hidden">
        <div className="grid grid-cols-[0.95fr_1.1fr_0.95fr] items-start gap-3">
          {/* Left column */}
          <div className="flex flex-col gap-3 pt-6">
            <div className="relative aspect-[3/7] overflow-hidden rounded-[26px]">
              <Image
                src="/images/hero-apoyo1.jpeg"
                alt="Personal técnico realizando mantenimiento en equipo de climatización industrial"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[3/6] overflow-hidden rounded-[26px]">
              <Image
                src="/images/hero-apoyo2.jpeg"
                alt="Instalación de ductería y recubrimientos en nave industrial"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center column */}
          <div className="pt-14">
            <div className="relative aspect-[4/9] overflow-hidden rounded-[30px]">
              <Image
                src="/images/hero-principal.jpeg"
                alt="Sistema de ductería HVAC e industrial instalado en nave de producción"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3 pt-6">
            <div className="relative aspect-[3/7] overflow-hidden rounded-[26px]">
              <Image
                src="/images/hero-apoyo3.jpeg"
                alt="Personal técnico en recorrido de supervisión dentro de instalación industrial"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[3/6] overflow-hidden rounded-[26px]">
              <Image
                src="/images/hero-apoyo4.jpeg"
                alt="Maniobra de grúa para montaje de estructura y equipo en obra industrial"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile text content */}
        <div className="mx-auto mt-8 max-w-xl px-2 text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Infraestructura, ingeniería y ejecución
          </p>

          <h1 className="text-6xl font-bold leading-none tracking-tighter text-foreground">
            {word}
          </h1>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground">
            Soluciones integrales para la industria
          </h2>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Ductería HVAC e industrial, aislamiento térmico, recubrimientos, refrigeración,
            fabricación, montaje, mecanizado CNC, oxicorte, plasma y mantenimiento industrial con
            enfoque en calidad, capacidad técnica y correcta ejecución.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={scrollToContact}
              className="rounded-full bg-foreground px-8 py-3 font-medium text-background transition-all hover:opacity-90"
            >
              Solicitar cotización
            </button>

            <a
              href="#proyectos"
              className="rounded-full border border-foreground/15 bg-foreground/5 px-8 py-3 font-medium text-foreground transition-all hover:bg-foreground/10"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP HERO */}
      <div className="hidden md:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full w-full items-center justify-center">
            <div
              className="relative flex h-full w-full items-stretch justify-center"
              style={{
                gap: `${gap}px`,
                padding: `${imageProgress * 16}px`,
                paddingBottom: `${60 + imageProgress * 40}px`,
              }}
            >
              {/* Left Column */}
              <div
                className="flex flex-col will-change-transform"
                style={{
                  width: `${sideWidth}%`,
                  gap: `${gap}px`,
                  transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
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
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
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
                      Ductería HVAC e industrial, aislamiento térmico, recubrimientos,
                      refrigeración, fabricación, montaje, mecanizado CNC, oxicorte, plasma y
                      mantenimiento industrial con enfoque en calidad, capacidad técnica y correcta
                      ejecución.
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
                  transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
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
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[200vh]" />
      </div>
    </section>
  );
}