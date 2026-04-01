"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const word = "IRF";

const sideImages = [
  {
<<<<<<< HEAD
    src: "/images/hero-apoyo1.jpeg",
=======
    src: "/images/hero-apoyo1.JPEG",
>>>>>>> fe677e4fc8b6e9cca672f87d15c5a2dfabc8c17b
    alt: "Personal técnico realizando mantenimiento en equipo de climatización industrial",
    position: "left",
    span: 1,
  },
  {
<<<<<<< HEAD
    src: "/images/hero-apoyo2.jpeg",
=======
    src: "/images/hero-apoyo2.JPEG",
>>>>>>> fe677e4fc8b6e9cca672f87d15c5a2dfabc8c17b
    alt: "Instalación de ductería y recubrimientos en nave industrial",
    position: "left",
    span: 1,
  },
  {
<<<<<<< HEAD
    src: "/images/hero-apoyo3.jpeg",
=======
    src: "/images/hero-apoyo3.JPEG",
>>>>>>> fe677e4fc8b6e9cca672f87d15c5a2dfabc8c17b
    alt: "Personal técnico en recorrido de supervisión dentro de instalación industrial",
    position: "right",
    span: 1,
  },
  {
<<<<<<< HEAD
    src: "/images/hero-apoyo4.jpeg",
=======
    src: "/images/hero-apoyo4.JPEG",
>>>>>>> fe677e4fc8b6e9cca672f87d15c5a2dfabc8c17b
    alt: "Maniobra de grúa para montaje de estructura y equipo en obra industrial",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));

  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations
  const centerWidth = 100 - (imageProgress * 58);
  const centerHeight = 100 - (imageProgress * 30);
  const sideWidth = imageProgress * 22;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100);
  const sideTranslateRight = 100 - (imageProgress * 100);
  const borderRadius = imageProgress * 24;
  const gap = imageProgress * 16;
  const sideTranslateY = -(imageProgress * 15);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" ref={sectionRef} className="relative bg-background overflow-x-clip">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px`, paddingBottom: `${60 + (imageProgress * 40)}px` }}
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
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
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
<<<<<<< HEAD
                src="/images/hero-principal.jpeg"
=======
                src="/images/hero-principal.JPEG"
>>>>>>> fe677e4fc8b6e9cca672f87d15c5a2dfabc8c17b
                alt="Sistema de ductería HVAC e industrial instalado en nave de producción"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

              {/* Overlay Text - Fades out first */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 px-6"
                style={{ opacity: textOpacity }}
              >
                {/* Eyebrow */}
                <p className="text-xs uppercase tracking-widest text-white/70 mb-4 animate-[slideUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
                  Infraestructura, ingeniería y ejecución
                </p>

                {/* Main Brand */}
                <h1 className="text-[28vw] font-bold leading-[0.8] tracking-tighter text-white md:text-[22vw]">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        transition: 'all 1.5s',
                        transitionTimingFunction: 'cubic-bezier(0.86, 0, 0.07, 1)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>

                {/* Headline */}
                <h2 className="mt-4 text-center text-2xl font-medium text-white md:text-3xl lg:text-4xl animate-[slideUp_0.8s_ease-out_forwards] opacity-0 max-w-2xl" style={{ animationDelay: '0.35s' }}>
                  Soluciones integrales para la industria
                </h2>

                {/* Subtitle - in safe container */}
                <div className="mt-6 w-full max-w-3xl px-4 animate-[slideUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.5s' }}>
                  <p className="text-center text-sm text-white/80 md:text-base lg:text-lg leading-relaxed">
                    Ductería HVAC e industrial, aislamiento térmico, recubrimientos, refrigeración, fabricación, montaje, mecanizado CNC, oxicorte, plasma y mantenimiento industrial con enfoque en calidad, capacidad técnica y correcta ejecución.
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-[slideUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.65s' }}>
                  <button
                    onClick={scrollToContact}
                    className="px-8 py-3 bg-white text-foreground font-medium rounded-full hover:bg-white/90 transition-all"
                  >
                    Solicitar cotización
                  </button>
                  <a
                    href="#proyectos"
                    className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/30 transition-all border border-white/30"
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
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
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

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />
    </section>
  );
}
