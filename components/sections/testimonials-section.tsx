"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          IRF combina experiencia técnica, equipamiento especializado y personal capacitado para ofrecer soluciones integrales en ductería, aislamiento, HVAC y mantenimiento industrial — respaldados por más de 15 años de trayectoria en el sector.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
          alt="Instalaciones industriales IRF"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
