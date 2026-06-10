import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Zap,
  Layout,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Monitor,
  Tablet,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apps Web y Móviles, E-commerce y Landing Pages — SAER TI",
  description: "Desarrollamos aplicaciones web y móviles modernas para iOS y Android, tiendas online y landing pages de alto impacto. Experiencias digitales de alta calidad para empresas chilenas.",
  alternates: { canonical: "/servicios/apps" },
  openGraph: {
    title: "Apps Web y Móviles, E-commerce y Landing Pages",
    description: "Apps web y móviles, tiendas online y landing pages de alto rendimiento para empresas chilenas.",
    url: "/servicios/apps",
  },
};

const APP_TYPES = [
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description: "Plataformas web progresivas (PWA), dashboards de gestión, portales corporativos y sistemas internos accesibles desde cualquier navegador.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles iOS & Android",
    description: "Aplicaciones nativas y multiplataforma con experiencia de usuario premium, notificaciones push y acceso offline.",
    tags: ["React Native", "Expo"],
  },
  {
    icon: Monitor,
    title: "Sistemas de Escritorio",
    description: "Aplicaciones de escritorio para operaciones intensivas que requieren máximo rendimiento y trabajo sin conexión.",
    tags: ["Electron", "Tauri"],
  },
  {
    icon: Tablet,
    title: "Apps para Tablets y Kioskos",
    description: "Soluciones táctiles para uso en terreno, puntos de venta, registros de entrada y paneles de control industrial.",
    tags: ["React Native", "PWA"],
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online (E-commerce)",
    description: "Plataformas de venta online con carrito de compras, pasarelas de pago, gestión de stock y despacho integradas.",
    tags: ["Next.js", "Webpay", "Stripe"],
  },
  {
    icon: Layout,
    title: "Landing Pages y Sitios Web",
    description: "Sitios corporativos y landing pages de alto impacto, optimizados para conversión, velocidad y posicionamiento SEO.",
    tags: ["Next.js", "SEO", "CMS"],
  },
];

const QUALITIES = [
  { icon: Zap, title: "Alto Rendimiento", description: "Optimizadas para cargar en menos de 2 segundos y responder instantáneamente." },
  { icon: Layout, title: "Diseño Intuitivo", description: "Interfaces limpias y fáciles de usar, diseñadas centradas en el usuario final." },
  { icon: ShieldCheck, title: "Seguridad Robusta", description: "Autenticación segura, cifrado de datos y cumplimiento con estándares de seguridad." },
  { icon: RefreshCw, title: "Actualizaciones Continuas", description: "Mejoras regulares sin interrumpir la operación. Compatibilidad garantizada." },
];

export default function AppsPage() {
  return (
    <div className="flex flex-col">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80"
            alt="Apps web y móviles desarrolladas por SAER TI"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="relative flex flex-col" style={{ minHeight: "100vh" }}>
          <div className="flex-1 container px-6 mx-auto flex items-end pb-20 pt-40">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8 animate-fade-up">
                <div className="h-px w-10 bg-[#C4965A]" />
                <span className="text-[#C4965A] text-xs font-bold uppercase tracking-[0.25em]">Servicio SAER TI</span>
              </div>
              <h1
                className="font-black text-white tracking-tight leading-[0.88] mb-7 animate-fade-up-d1"
                style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
              >
                Apps <span style={{ color: "#C4965A" }}>Web</span><br />&amp; Móviles
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed animate-fade-up-d2">
                Creamos experiencias digitales de alta calidad que tus clientes y equipos amarán usar. Desde la idea hasta la tienda de aplicaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-d3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#0F2044] transition-all duration-300 hover:scale-105"
                  style={{ background: "#C4965A", boxShadow: "0 0 30px rgba(196,150,90,0.45)" }}
                >
                  Iniciar mi proyecto <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#tipos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  Ver qué construimos
                </Link>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/10 backdrop-blur-md bg-black/35">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {[
                  { value: "iOS & Android", label: "Plataformas soportadas" },
                  { value: "<2s", label: "Tiempo de carga promedio" },
                  { value: "100%", label: "Código propiedad del cliente" },
                  { value: "App Store", label: "Publicación incluida" },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className={`py-6 px-4 text-center ${i < 3 ? "border-r border-white/10" : ""}`}
                  >
                    <div className="text-2xl font-black mb-1" style={{ color: "#C4965A" }}>{s.value}</div>
                    <div className="text-xs text-white/55 uppercase tracking-wider leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APP TYPES ─── */}
      <section id="tipos" className="py-28 bg-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-xl mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#0F2044" }}>¿Qué construimos?</span>
            </div>
            <h2 className="text-5xl font-black tracking-tight leading-tight mb-5">Una app para cada<br />necesidad de tu empresa</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desde PWAs hasta apps nativas, cubrimos todos los tipos de experiencias digitales que tu negocio necesita.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {APP_TYPES.map((type) => (
              <div
                key={type.title}
                className="group p-8 rounded-2xl border border-border hover:border-primary/25 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div
                  className="h-1 w-10 rounded-full mb-7"
                  style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }}
                />
                <div className="p-3 rounded-xl bg-primary/8 w-fit mb-5 group-hover:bg-primary/15 transition-colors">
                  <type.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUALITIES ─── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,32,68,0.96) 0%, rgba(26,53,96,0.93) 100%)" }} />
        </div>
        <div className="relative container px-6 mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C4965A]" />
              <span className="text-[#C4965A] text-xs font-bold uppercase tracking-[0.25em]">Calidad</span>
              <div className="h-px w-10 bg-[#C4965A]" />
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight leading-tight">
              Apps que destacan<br />en rendimiento y diseño
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-20">
            {QUALITIES.map((q) => (
              <div
                key={q.title}
                className="p-7 rounded-2xl border border-white/15 backdrop-blur-sm bg-white/8 hover:bg-white/14 transition-all duration-300 group text-center"
              >
                <div className="p-4 rounded-2xl bg-white/10 w-fit mx-auto mb-5 group-hover:bg-[#C4965A]/20 transition-colors">
                  <q.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-[#C4965A] transition-colors">{q.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{q.description}</p>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Qué recibes en cada proyecto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Diseño UI/UX profesional incluido",
                "Versiones para iOS y Android",
                "Publicación en App Store y Google Play",
                "Código fuente entregado al cliente",
                "Pruebas en dispositivos reales",
                "Panel de administración web",
                "Notificaciones push configuradas",
                "Analítica de uso integrada",
                "Soporte técnico post-lanzamiento",
                "Documentación completa del sistema",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white/8 border border-white/10">
                  <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#C4965A" }} />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0F2044]/92" />
        </div>
        <div className="relative container px-6 mx-auto text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2
              className="font-black tracking-tight leading-tight mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
            >
              ¿Tienes una idea<br />de app?
            </h2>
            <p className="text-xl text-white/65 mb-10 leading-relaxed">
              Cuéntanos qué quieres construir y en 48 horas tienes una propuesta técnica y comercial sin costo.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-[#0F2044] text-lg transition-all duration-300 hover:scale-105"
              style={{ background: "#C4965A", boxShadow: "0 0 40px rgba(196,150,90,0.5)" }}
            >
              Consultar ahora <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
