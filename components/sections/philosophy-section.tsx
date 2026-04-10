"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { CheckCircle, Truck, Wrench, MapPin } from "lucide-react";

const pillars = [
  {
    icon: CheckCircle,
    title: "Ejecución de calidad",
    description: "Desarrollamos trabajos con criterio técnico, atención al detalle y enfoque en resultados duraderos."
  },
  {
    icon: Truck,
    title: "Respuesta operativa",
    description: "Atendemos requerimientos con seriedad, rapidez de respuesta y capacidad real de ejecución."
  },
  {
    icon: Wrench,
    title: "Capacidad técnica",
    description: "Participamos en proyectos industriales, comerciales y especiales que requieren experiencia aplicada y soluciones integrales."
  },
  {
    icon: MapPin,
    title: "Cobertura nacional",
    description: "Operamos con capacidad para atender proyectos en distintas regiones del país."
  },
];

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [alpineTranslateX, setAlpineTranslateX] = useState(-100);
  const [forestTranslateX, setForestTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;

    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));

    setAlpineTranslateX((1 - progress) * -100);
    setForestTranslateX((1 - progress) * 100);
    setTitleOpacity(1 - progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="nosotros" className="bg-background overflow-x-clip">
      {/* Scroll-Animated Product Grid */}
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-6"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="text-[8vw] font-medium leading-[1] tracking-tight text-foreground md:text-[6vw] lg:text-[5vw] text-center max-w-4xl">
                Soluciones técnicas con respaldo profesional
              </h2>
            </div>

            {/* Product Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              {/* Alpine Image - comes from left */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="/images/seccion2-lateralizquierda.jpeg"
                  alt="Ductos industriales"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                    Ductería HVAC
                  </span>
                </div>
              </div>

              {/* Forest Image - comes from right */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="/images/seccion2-lateralderecha.jpeg"
                  alt="Aislamiento térmico industrial"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                    Aislamiento térmico
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description - Safe container with controlled max-width */}
      <div className="px-6 py-12 md:px-12 md:py-14 lg:px-20 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-8">
            Quiénes somos
          </p>

          {/* Paragraph 1 */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify mb-8">
            IRF es una empresa orientada a soluciones integrales para el sector industrial, comercial y de servicios técnicos especializados. Nuestra experiencia en campo, capacidad operativa y compromiso con la ejecución nos permiten atender proyectos de ductería, aislamiento, HVAC, refrigeración, fabricación, montaje, recubrimientos, mecanizado plasma CNC, oxicorte y mantenimiento industrial con un enfoque serio, técnico y profesional.
          </p>

          {/* Paragraph 2 */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Nuestra misión es brindar soluciones confiables con calidad, cumplimiento y capacidad técnica. Nuestra visión es consolidarnos como una empresa referente por ejecución, confianza y resultados en proyectos industriales y especiales.
          </p>
        </div>
      </div>

      {/* Pillars Grid - Safe container */}
      <div className="px-6 pb-12 md:px-12 lg:px-20 md:pb-14 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="p-6 md:p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <pillar.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}