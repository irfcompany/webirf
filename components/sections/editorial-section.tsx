"use client";

const videos = [
  { src: "/images/video1.mp4" },
  { src: "/images/video2.mp4" },
  { src: "/images/video3.mp4" },
  { src: "/images/video4.mp4" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Video Section Title */}
      <div className="px-6 py-10 md:px-12 lg:px-20 md:py-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            
          </p>
          <h3 className="text-3xl font-medium text-foreground md:text-4xl mb-4">
            Ejecución real en campo
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Capacidad técnica, ejecución en campo y soluciones aplicadas a proyectos reales.
          </p>
        </div>
      </div>

      {/* Video cards full width */}
      <div className="w-full overflow-hidden bg-black">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative aspect-[9/16] w-full overflow-hidden bg-black"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}