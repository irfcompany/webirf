"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  navegacion: [
    { label: "Experiencia", href: "#experiencia" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
  servicios: [
    { label: "Ductería y aislamiento", href: "#servicios" },
    { label: "HVAC y refrigeración", href: "#servicios" },
    { label: "Fabricación y montaje", href: "#servicios" },
    { label: "Mantenimiento industrial", href: "#servicios" },
  ],
};

const INITIAL_FORM_STATE = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  mensaje: "",
};

export function FooterSection() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const payload = {
        access_key: "7c5a0e29-b11c-476d-b63f-fdc6da5f4f0a",
        subject: "Nueva solicitud de cotización desde IRF",
        from_name: "Sitio web IRF",
        nombre: formData.nombre,
        empresa: formData.empresa || "No proporcionada",
        email: formData.email,
        telefono: formData.telefono || "No proporcionado",
        mensaje: formData.mensaje,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setSubmitMessage("Gracias. Tu solicitud fue enviada correctamente.");
        setFormData(INITIAL_FORM_STATE);
      } else {
        setSubmitStatus("error");
        setSubmitMessage("No se pudo enviar el formulario. Revisa la access key e inténtalo otra vez.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Ocurrió un error al enviar el formulario. Inténtalo de nuevo en un momento.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="px-6 py-12 md:px-12 md:py-14 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary-foreground/70">
              Contacto
            </p>
            <h2 className="mb-4 text-3xl font-medium md:text-4xl lg:text-5xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-primary-foreground/80">
              Compártenos tu requerimiento y te ayudamos a evaluar la mejor solución para tu operación,
              instalación o proyecto industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Teléfonos</h4>
                  <a
                    href="tel:+528128898672"
                    className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    +52 81 2889 8672
                  </a>
                  <a
                    href="tel:+526761123869"
                    className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    +52 676 112 3869
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Correo electrónico</h4>
                  <a
                    href="mailto:contacto@irf.com.mx"
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    contacto@irf.com.mx
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Ubicación</h4>
                  <p className="text-primary-foreground/80">
                    Mezquite 116B, Los Encinos
                    <br />
                    67275 Cd. Benito Juárez, N.L.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Horario de atención</h4>
                  <p className="text-primary-foreground/80">
                    Lunes a viernes: 8:00 a.m. a 8:00 p.m.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/528128898672"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white transition-all hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 transition-colors focus:border-primary-foreground/50 focus:outline-none"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="mb-2 block text-sm font-medium">
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 transition-colors focus:border-primary-foreground/50 focus:outline-none"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 transition-colors focus:border-primary-foreground/50 focus:outline-none"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="mb-2 block text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 transition-colors focus:border-primary-foreground/50 focus:outline-none"
                      placeholder="+52 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 transition-colors focus:border-primary-foreground/50 focus:outline-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary-foreground px-8 py-4 font-medium text-primary transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar cotización"}
                </button>

                {submitStatus !== "idle" && (
                  <p
                    className={`mt-4 text-center text-sm ${
                      submitStatus === "success"
                        ? "text-green-300"
                        : "text-red-300"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}

                <p className="mt-4 text-center text-sm text-primary-foreground/60">
                  Atención directa para solicitudes de cotización, información de servicios y seguimiento de proyectos.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-primary-foreground/10 px-6 py-10 md:px-12 md:py-12 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              IRF
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Soluciones integrales en ductería, aislamiento, HVAC, refrigeración, fabricación, montaje y mantenimiento industrial.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+528128898672"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  +52 81 2889 8672
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@irf.com.mx"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  contacto@irf.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-primary-foreground/60">
            2026 IRF. Todos los derechos reservados.
          </p>

          <p className="text-xs text-primary-foreground/60">
            Cobertura nacional desde Nuevo León, México.
          </p>
        </div>
      </div>
    </footer>
  );
}