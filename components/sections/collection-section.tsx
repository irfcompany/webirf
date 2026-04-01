"use client";

import { FadeImage } from "@/components/fade-image";
import { Factory, Building2, HardHat, Wrench, Sparkles } from "lucide-react";

const sectors = [
  {
    id: 1,
    name: "Industrial",
    description: "Plantas, naves y centros de producción",
    icon: Factory,
    image: "/images/sectores1.png",
  },
  {
    id: 2,
    name: "Comercial",
    description: "Oficinas, centros comerciales y retail",
    icon: Building2,
    image: "/images/sectores2.jpeg",
  },
  {
    id: 3,
    name: "Construcción",
    description: "Obra nueva y remodelaciones mayores",
    icon: HardHat,
    image: "/images/sectores3.png",
  },
  {
    id: 4,
    name: "Mantenimiento",
    description: "Servicio preventivo y correctivo continuo",
    icon: Wrench,
    image: "/images/sectores4.jpeg",
  },
  {
    id: 5,
    name: "Proyectos especiales",
    description: "Soluciones a medida para necesidades únicas",
    icon: Sparkles,
    image: "/images/sectores5.jpeg",
  },
];

export function CollectionSection() {
  return (
    <section className="bg-background">
      {/* Section Title - Safe container */}
      <div className="px-6 py-10 md:px-12 lg:px-20 md:py-12">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Sectores</p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Experiencia en múltiples industrias
          </h2>
        </div>
      </div>

      {/* Sectors Grid */}
      <div className="pb-12 md:pb-14">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {sectors.map((sector) => (
            <div key={sector.id} className="group flex-shrink-0 w-[75vw] snap-center">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={sector.image || "/placeholder.svg"}
                  alt={sector.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <sector.icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-1">{sector.name}</h3>
                  <p className="text-sm text-white/80">{sector.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:px-12 lg:px-20">
          {sectors.map((sector) => (
            <div key={sector.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={sector.image || "/placeholder.svg"}
                  alt={sector.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <sector.icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-1">{sector.name}</h3>
                  <p className="text-sm text-white/80">{sector.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - Safe container */}
      <div className="px-6 py-12 md:px-12 lg:px-20 md:py-14 bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-medium text-foreground md:text-3xl lg:text-4xl mb-6">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Contáctanos para recibir asesoría técnica sin compromiso. Atendemos proyectos industriales, comerciales y especiales en cualquier parte del país.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all"
            >
              Solicitar cotización
            </a>
            <a 
              href="https://wa.me/528128898672"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white font-medium rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
