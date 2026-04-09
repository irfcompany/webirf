"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "AÑOS DE EXPERIENCIA",
    value: "+10",
  },
  {
    label: "ESPECIALIDAD",
    value: "DUCTERÍA + HVAC",
  },
  {
    label: "COBERTURA",
    value: "NACIONAL",
  },
  {
    label: "ENFOQUE",
    value: "CALIDAD Y EJECUCIÓN",
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiencia" ref={sectionRef} className="bg-secondary/30">
      <div className="px-6 py-12 md:px-12 md:py-14 lg:px-20 lg:py-16">
        <div className="max-w-5xl mx-auto">
          {/* 1. FIRST: Descriptive Text Block */}
          <div
            className={`max-w-4xl mx-auto mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center">
              IRF integra experiencia técnica, capacidad operativa y personal capacitado para desarrollar soluciones en ductería, aislamiento, recubrimientos, HVAC, refrigeración, fabricación, montaje, mecanizado plasma CNC, oxicorte y mantenimiento industrial. Atendemos proyectos industriales, comerciales y especiales con enfoque en calidad, cumplimiento y correcta ejecución.
            </p>
          </div>

          {/* 2. SECOND: Stats/Cards Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-2xl border border-white/30 bg-white/35 p-5 text-center shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-700 md:p-6 lg:p-8 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* brillo sutil superior */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />

                <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground md:mb-3 md:text-xs">
                  {stat.label}
                </p>
                <p className="text-xl font-semibold leading-tight text-primary md:text-2xl lg:text-3xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}