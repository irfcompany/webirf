"use client";

import Image from "next/image";
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
          {/* Bloque superior nuevo: Chillers */}
          <div
            className={`mb-16 transition-all duration-700 md:mb-20 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/60 md:text-xs">
                  Climatización y enfriamiento
                </p>

                <h2 className="mb-5 text-2xl font-medium leading-tight text-white md:text-3xl lg:text-4xl">
                  Suministro, instalación y renta de chillers y equipos centrales
                </h2>

                <p className="mb-5 text-justify text-base leading-relaxed text-white/78 md:text-lg">
                  IRF ofrece suministro, instalación y renta de chillers, así como soluciones en
                  equipos centrales tipo paquete, divididos, VRV y VRF, con enfoque en capacidad
                  técnica, correcta integración y respuesta confiable en campo.
                </p>

                <div className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
                  Proveedor autorizado
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-[28px] border border-white/12"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px) saturate(140%)",
                  WebkitBackdropFilter: "blur(16px) saturate(140%)",
                  boxShadow: `
                    0 8px 24px rgba(0,0,0,0.18),
                    inset 0 1px 0 rgba(255,255,255,0.14)
                  `,
                }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/chillers.jpg"
                    alt="Chillers y equipos centrales de climatización industrial"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/6" />
              </div>
            </div>
          </div>

          {/* Texto superior */}
          <div
            className={`mx-auto max-w-4xl transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } mb-20 md:mb-24 lg:mb-28`}
          >
            <p className="text-justify text-lg leading-relaxed text-white/78 md:text-xl lg:text-2xl">
              IRF integra experiencia técnica, capacidad operativa y personal capacitado para
              desarrollar soluciones en ductería, aislamiento, recubrimientos, HVAC,
              refrigeración, fabricación, montaje, mecanizado CNC, oxicorte, plasma y
              mantenimiento industrial. Atendemos proyectos industriales, comerciales y
              especiales con enfoque en calidad, cumplimiento y correcta ejecución.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-[26px] border p-4 text-center transition-all duration-700 md:p-5 lg:p-5 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  background: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(14px) saturate(135%)",
                  WebkitBackdropFilter: "blur(14px) saturate(135%)",
                  boxShadow: `
                    0 8px 24px rgba(0,0,0,0.16),
                    inset 0 1px 0 rgba(255,255,255,0.12)
                  `,
                }}
              >
                <div
                  className="pointer-events-none absolute -left-7 -top-7 h-16 w-16 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 72%)",
                  }}
                />

                <div className="pointer-events-none absolute inset-[1px] rounded-[25px] border border-white/5" />

                <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-white/56 md:text-[10px]">
                  {stat.label}
                </p>

                <p className="whitespace-pre-line text-[12px] font-semibold leading-snug text-white md:text-[13px] lg:text-[0.9rem]">
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