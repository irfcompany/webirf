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

  const imageProgress = isMobile
    ? 1
    : Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // En móvil solo desvanecemos el contenido del hero al hacer scroll
  const mobileFadeProgress = Math.max(0, Math.min(1, scrollProgress / 0.22));
  const mobileTextOpacity = 1 - mobileFadeProgress;

  const textOpacity = isMobile
    ? mobileTextOpacity
    : Math.max(0, 1 - scrollProgress / 0.2);

  // Desktop
  const desktopCenterWidth = 42;
  const desktopCenterHeight = 70;
  const desktopSideWidth = 22;
  const desktopGap = 16;
  const desktopBorderRadius = 24;

  // Mobile
  const mobileCenterWidth = 100;
  const mobileCenterHeight = 100;
  const mobileSideWidth = 0;
  const mobileGap = 0;
  const mobileBorderRadius = 0;

  const finalCenterWidth = isMobile ? mobileCenterWidth : desktopCenterWidth;
  const finalCenterHeight = isMobile ? mobileCenterHeight : desktopCenterHeight;
  const finalSideWidth = isMobile ? mobileSideWidth : desktopSideWidth;
  const finalGap = isMobile ? mobileGap : desktopGap;
  const finalBorderRadius = isMobile ? mobileBorderRadius : desktopBorderRadius;

  const centerWidth = isMobile
    ? 100
    : 100 - imageProgress * (100 - finalCenterWidth);

  const centerHeight = isMobile
    ? 100
    : 100 - imageProgress * (100 - finalCenterHeight);

  const sideWidth = isMobile ? 0 : imageProgress * finalSideWidth;
  const sideOpacity = isMobile ? 0 : imageProgress;

  const sideTranslateLeft = isMobile ? 0 : -100 + imageProgress * 100;
  const sideTranslateRight = isMobile ? 0 : 100 - imageProgress * 100;

  const borderRadius = isMobile ? 0 : imageProgress * finalBorderRadius;
  const gap = isMobile ? 0 : imageProgress * finalGap;

  const sideTranslateY = isMobile ? 0 : -(imageProgress * 15);
  const centerTranslateY = 0;

  return (
    <section id="inicio" ref={sectionRef} className="relative overflow-x-clip bg-background">
      <div className={isMobile ? "relative h-screen overflow-hidden" : "sticky top-0 h-screen overflow-hidden"}>
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{
              gap: `${gap}px`,
              padding: isMobile ? "0px" : `${imageProgress * 16}px`,
              paddingBottom: isMobile ? "0px" : `${60 + imageProgress * 40}px`,
            }}
          >
            {!isMobile && (
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
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
            )}

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

              <div
                className="absolute inset-0 flex flex-col items-center justify-end px-6"
                style={{
                  opacity: textOpacity,
                  paddingBottom: isMobile ? "120px" : "64px",
                }}
              >
                <p
                  className="mb-5 animate-[slideUp_0.8s_ease-out_forwards] text-xs uppercase tracking-widest text-white/70 opacity-0 md:mb-7 md:text-[11px] md:tracking-[0.22em] lg:text-xs"
                  style={{ animationDelay: "0.1s" }}
                >
                  Infraestructura, ingeniería y ejecución industrial en Monterrey y a nivel nacional
                </p>

                <h1 className="text-[28vw] font-bold leading-[0.8] tracking-tighter text-white md:text-[20vw] lg:text-[18vw]">
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
                  className="mt-5 max-w-2xl animate-[slideUp_0.8s_ease-out_forwards] text-center text-2xl font-medium text-white opacity-0 md:mt-7 md:max-w-3xl md:text-[2rem] lg:mt-8 lg:text-[2.45rem]"
                  style={{ animationDelay: "0.35s" }}
                >
                  Soluciones integrales para la industria
                </h2>

                <div
                  className="mt-6 w-full max-w-3xl animate-[slideUp_0.8s_ease-out_forwards] px-4 opacity-0 md:mt-8 md:max-w-4xl lg:max-w-[980px]"
                  style={{ animationDelay: "0.5s" }}
                >
                  <p className="text-center text-sm leading-relaxed text-white/80 md:text-[15px] md:leading-[1.75] lg:text-[17px] lg:leading-[1.85]">
                    Ductería HVAC e industrial, aislamiento térmico, recubrimientos, refrigeración,
                    fabricación, montaje, mecanizado CNC, oxicorte, plasma, pailería, estructuras
                    metálicas, inyección y extracción, mantenimiento industrial, laminaciones KR18,
                    Galvalok, R101 y NR135, y proyectos especiales.
                  </p>
                </div>

                <div
                  className="mt-8 flex flex-col gap-4 animate-[slideUp_0.8s_ease-out_forwards] opacity-0 sm:flex-row md:mt-10"
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

              <div
                className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white/70 md:bottom-3"
                style={{ opacity: textOpacity }}
              >
                <span className="text-[11px] uppercase tracking-[0.22em] md:text-[11px]">
                  {isMobile ? "Desliza hacia abajo" : "Desplázate hacia abajo"}
                </span>

                <div className="mt-2 animate-bounce text-lg leading-none md:text-xl">
                  ⌄
                </div>
              </div>
            </div>

            {!isMobile && (
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
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {!isMobile && <div className="h-[200vh]" />}
    </section>
  );
}