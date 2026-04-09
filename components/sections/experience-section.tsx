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
    <section
      id="experiencia"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 28%),
          radial-gradient(circle at bottom right, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 24%),
          linear-gradient(180deg, #0b0f19 0%, #111827 48%, #0f172a 100%)
        `,
      }}
    >
      <div className="px-6 py-12 md:px-12 md:py-14 lg:px-20 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div
            className={`mx-auto mb-10 max-w-4xl transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-center text-lg leading-relaxed text-white/78 md:text-xl lg:text-2xl">
              IRF integra experiencia técnica, capacidad operativa y personal capacitado para desarrollar soluciones en ductería, aislamiento, recubrimientos, HVAC, refrigeración, fabricación, montaje, mecanizado plasma CNC, oxicorte y mantenimiento industrial. Atendemos proyectos industriales, comerciales y especiales con enfoque en calidad, cumplimiento y correcta ejecución.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-[28px] border p-5 text-center transition-all duration-700 md:p-6 lg:p-8 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",
                  borderColor: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(24px) saturate(160%)",
                  WebkitBackdropFilter: "blur(24px) saturate(160%)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-1/3"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 100%)",
                  }}
                />

                <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/8" />

                <p className="mb-2 text-[10px] uppercase tracking-widest text-white/60 md:mb-3 md:text-xs">
                  {stat.label}
                </p>

                <p className="whitespace-pre-line text-xl font-semibold leading-tight text-white md:text-2xl lg:text-3xl">
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