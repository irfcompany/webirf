"use client";

import { useState } from "react";
import { FadeImage } from "@/components/fade-image";

const services = [
  {
    title: "Ductería, aislamiento y recubrimientos",
    description:
      "Fabricación e instalación de ductería HVAC e industrial, aislamiento térmico para ductos y tuberías, medias cañas y recubrimientos metálicos en aluminio, acero galvanizado e inoxidable para protección, acabado y desempeño operativo.",
    image: "/images/servicios1.jpeg",
  },
  {
    title: "HVAC y refrigeración",
    description:
      "Instalación, integración y mantenimiento de sistemas HVAC y refrigeración para procesos industriales, naves, áreas comerciales y soluciones especiales, con enfoque en control térmico, eficiencia operativa y confiabilidad en campo.",
    image: "/images/servicios2.jpeg",
  },
  {
    title: "Fabricación, montaje y laminación",
    description:
      "Fabricación de componentes, pailería, estructuras metálicas, montaje en sitio y laminación de naves en sistemas KR18, Galvalok, R101 y NR135 para proyectos industriales, comerciales y requerimientos especiales.",
    image: "/images/servicios3.jpeg",
  },
  {
    title: "Corte industrial CNC",
    description:
      "Servicio de mecanizado y corte mediante plasma CNC y oxicorte para fabricación de piezas, componentes y soluciones a medida, con precisión, repetibilidad y cumplimiento de especificaciones técnicas.",
    image: "/images/servicios4.jpeg",
  },
  {
    title: "Mantenimiento industrial",
    description:
      "Mantenimiento preventivo y correctivo en instalaciones industriales, sistemas HVAC, ductería, recubrimientos y equipos relacionados, orientado a continuidad operativa, seguridad y respuesta efectiva en campo.",
    image: "/images/servicios5.jpeg",
  },
  {
    title: "Proyectos especiales",
    description:
      "Desarrollo e integración de soluciones especiales en ductería, HVAC, refrigeración, fabricación, montaje y adecuaciones técnicas para necesidades fuera de estándar, según el alcance y los requerimientos de cada proyecto.",
    image: "/images/servicios6.jpeg",
  },
];

export function FeaturedProductsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardTap = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="servicios" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-10 md:px-12 md:py-12 lg:px-20 lg:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            Servicios
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Soluciones técnicas integrales
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 px-6 pb-12 md:grid-cols-2 md:px-12 md:pb-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 lg:px-20 lg:pb-16">
        {services.map((service, index) => {
          const isActive = activeCard === index;

          return (
            <div key={service.title} className="flex flex-col">
              {/* Image Card with Hover/Tap Overlay */}
              <div
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl"
                onClick={() => handleCardTap(index)}
              >
                {/* Image with subtle scale on hover */}
                <FadeImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out ${
                    isActive ? "scale-105" : "group-hover:scale-[1.03]"
                  }`}
                />

                {/* Small interaction hint */}
                <div className="absolute right-4 top-4 rounded-full bg-black/35 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                  Toca o pasa el cursor
                </div>

                {/* Gradient overlay - appears on hover/tap */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/10 transition-opacity duration-400 ease-out ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Description text - slides up on hover/tap */}
                <div
                  className={`absolute inset-0 flex items-end p-5 transition-all duration-400 ease-out md:p-6 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <p
                    className={`text-sm leading-relaxed text-white/95 transition-transform duration-400 ease-out ${
                      isActive ? "translate-y-0" : "translate-y-3 group-hover:translate-y-0"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Title Below Image - Always Visible */}
              <div className="pt-4">
                <h3 className="text-base font-semibold leading-snug text-foreground md:text-[1.02rem]">
                  {service.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}