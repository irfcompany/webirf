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
          linear-gradient(180deg, #070b14 0%, #0b1020 46%, #0a1228 100%)
        `,
      }}
    >
      <div className="px-6 py-12 md:px-12 md:py-14 lg:px-20 lg:py-16">
        <div className="mx-auto max-w-5xl">
          {/* Texto superior */}
          <div
            className={`mx-auto max-w-4xl transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } mb-20 md:mb-24 lg:mb-28`}
          >
            <p className="text-center text-lg leading-relaxed text-white/78 md:text-xl lg:text-2xl">
              IRF integra experiencia técnica, capacidad operativa y personal capacitado para desarrollar soluciones en ductería, aislamiento, recubrimientos, HVAC, refrigeración, fabricación, montaje, mecanizado plasma CNC, oxicorte y mantenimiento industrial. Atendemos proyectos industriales, comerciales y especiales con enfoque en calidad, cumplimiento y correcta ejecución.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-[28px] border p-4 text-center transition-all duration-700 md:p-5 lg:p-6 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.14)",
                  backdropFilter: "blur(16px) saturate(140%)",
                  WebkitBackdropFilter: "blur(16px) saturate(140%)",
                  boxShadow: `
                    0 8px 24px rgba(0,0,0,0.18),
                    inset 0 1px 0 rgba(255,255,255,0.14)
                  `,
                }}
              >
                <div
                  className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 72%)",
                  }}
                />

                <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/6" />

                <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-white/58 md:text-[11px]">
                  {stat.label}
                </p>

                <p className="whitespace-pre-line text-[13px] font-semibold leading-snug text-white md:text-[14px] lg:text-[0.98rem]">
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