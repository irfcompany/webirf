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
            className={`mb-16 md:mb-20 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/60 md:text-xs">
                  Climatización y enfriamiento
                </p>

                <h2 className="mb-5 text-2xl font-medium leading-tight text-white md:text-3xl lg:text-4xl">
                  Suministro, instalación y renta de chillers y equipos centrales
                </h2>

                <p className="mb-5 text-base leading-relaxed text-white/78 md:text-lg">
                  IRF ofrece suministro, instalación y renta de chillers, así como soluciones en
                  equipos centrales tipo paquete, divididos, BRB, VR y VRF, con enfoque en
                  capacidad técnica, correcta integración y respuesta confiable en campo.
                </p>

                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
                  Proveedor autorizado
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-[30px] border border-white/15"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(18px) saturate(150%)",
                  WebkitBackdropFilter: "blur(18px) saturate(150%)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/chillers.jpeg"
                    alt="Chillers y equipos centrales de climatización industrial"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-[1px] rounded-[29px] border border-white/8" />
              </div>
            </div>
          </div>

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
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-[30px] border p-5 text-center transition-all duration-700 md:p-6 lg:p-7 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 100%)",
                  borderColor: "rgba(255,255,255,0.16)",
                  backdropFilter: "blur(18px) saturate(150%)",
                  WebkitBackdropFilter: "blur(18px) saturate(150%)",
                  boxShadow: `
                    0 10px 30px rgba(0,0,0,0.22),
                    inset 0 1px 0 rgba(255,255,255,0.22),
                    inset 0 -1px 0 rgba(255,255,255,0.04)
                  `,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-20"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%)",
                  }}
                />

                <div
                  className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 72%)",
                  }}
                />

                <div className="pointer-events-none absolute inset-[1px] rounded-[29px] border border-white/8" />

                <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/58 md:text-xs">
                  {stat.label}
                </p>

                <p className="whitespace-pre-line text-[14px] font-semibold leading-snug text-white md:text-[15px] lg:text-[1.05rem]">
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