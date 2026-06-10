import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Fuel,
  Wrench,
  BarChart3,
  MapPin,
  Bell,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  TrendingDown,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FleetCore | Gestión de Flota para Minería y Construcción — SAER TI",
  description: "Plataforma de gestión de flota diseñada para empresas mineras y constructoras. Control GPS, mantenimiento predictivo y reportes de productividad en tiempo real.",
  alternates: { canonical: "/servicios/fleetcore" },
  openGraph: {
    title: "FleetCore | Gestión de Flota para Minería y Construcción",
    description: "Control GPS, mantenimiento predictivo y reportes de productividad en tiempo real para flotas mineras y de construcción.",
    url: "/servicios/fleetcore",
  },
};

const FEATURES = [
  {
    icon: MapPin,
    title: "Seguimiento GPS en Tiempo Real",
    description: "Visualiza la ubicación exacta de cada vehículo y maquinaria en un mapa interactivo, con historial de rutas y zonas de operación.",
  },
  {
    icon: Fuel,
    title: "Control de Combustible",
    description: "Monitorea el consumo de combustible, detecta desvíos y genera alertas de anomalías para reducir pérdidas y optimizar costos.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Predictivo",
    description: "Programa y anticipa mantenciones preventivas según horómetros y kilometraje. Reduce paradas imprevistas hasta en un 40%.",
  },
  {
    icon: BarChart3,
    title: "Reportes de Productividad",
    description: "Dashboards gerenciales con KPIs de flota, rendimiento por turno, costo por hora y comparativas entre equipos.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Notificaciones automáticas por exceso de velocidad, zona de trabajo, tiempo de inactividad y vencimiento de revisiones técnicas.",
  },
  {
    icon: Shield,
    title: "Control de Accesos",
    description: "Gestión de operadores con perfiles de permisos, validación de licencias y registro de conducción por vehículo.",
  },
];

const STATS = [
  { icon: TrendingDown, metric: "30%", label: "Reducción de costos operativos" },
  { icon: Clock, metric: "40%", label: "Menos tiempo de inactividad" },
  { icon: BarChart3, metric: "25%", label: "Mejora en productividad" },
  { icon: Fuel, metric: "20%", label: "Ahorro en combustible" },
];

const INDUSTRIES = [
  {
    name: "Minería",
    description: "Control total de flota en faenas remotas con conectividad satelital y soporte para maquinaria pesada en condiciones extremas.",
  },
  {
    name: "Construcción",
    description: "Gestión de maquinaria y vehículos distribuidos en múltiples obras con visibilidad centralizada en tiempo real.",
  },
  {
    name: "Transporte de Carga",
    description: "Seguimiento de rutas, eficiencia de combustible y cumplimiento de plazos para flotas de camiones a nivel nacional.",
  },
];

export default function FleetCorePage() {
  return (
    <div className="flex flex-col">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
            alt="Flota minera gestionada con FleetCore"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="relative flex flex-col" style={{ minHeight: "100vh" }}>
          <div className="flex-1 container px-6 mx-auto flex items-end pb-20 pt-40">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8 animate-fade-up">
                <div className="h-px w-10 bg-[#C4965A]" />
                <span className="text-[#C4965A] text-xs font-bold uppercase tracking-[0.25em]">Producto SAER TI</span>
              </div>
              <h1
                className="font-black text-white tracking-tight leading-[0.88] mb-7 animate-fade-up-d1"
                style={{ fontSize: "clamp(4.5rem, 11vw, 9rem)" }}
              >
                Fleet<span style={{ color: "#C4965A" }}>Core</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed animate-fade-up-d2">
                La plataforma de gestión de flota más completa para la industria minera y constructora chilena. Un solo panel, control total.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-d3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#0F2044] transition-all duration-300 hover:scale-105"
                  style={{ background: "#C4965A", boxShadow: "0 0 30px rgba(196,150,90,0.45)" }}
                >
                  Solicitar Demo Gratuita <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#funcionalidades"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  Ver funcionalidades
                </Link>
                <a
                  href="https://fleetcore.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white/70 font-medium hover:text-white transition-all duration-300"
                >
                  fleetcore.cl <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/10 backdrop-blur-md bg-black/35">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`py-6 px-4 text-center ${i < STATS.length - 1 ? "border-r border-white/10" : ""}`}
                  >
                    <div className="text-3xl font-black mb-1" style={{ color: "#C4965A" }}>{s.metric}</div>
                    <div className="text-xs text-white/55 uppercase tracking-wider leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="funcionalidades" className="py-28 bg-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-xl mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#0F2044" }}>Funcionalidades</span>
            </div>
            <h2 className="text-5xl font-black tracking-tight leading-tight mb-5">Todo lo que necesitas<br />en un solo sistema</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              FleetCore integra todas las herramientas de gestión de flota en una plataforma unificada, accesible desde cualquier dispositivo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-2xl border border-border hover:border-primary/25 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div
                  className="h-1 w-10 rounded-full mb-7"
                  style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }}
                />
                <div className="p-3 rounded-xl bg-primary/8 w-fit mb-5 group-hover:bg-primary/15 transition-colors">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCREENSHOTS ─── */}
      <section className="py-28 bg-[#F7F5F2]">
        <div className="container px-6 mx-auto">
          <div className="max-w-xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#0F2044" }}>Plataforma</span>
            </div>
            <h2 className="text-5xl font-black tracking-tight leading-tight mb-5">Conoce FleetCore<br />por dentro</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Módulos financieros y contables integrados para que la operación y las finanzas de tu flota hablen el mismo idioma.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              { src: "/screenshots/fleetcore-contabilidad-balance.png", w: 1622, h: 503, title: "Contabilidad — Balance de Comprobación de 8 Columnas" },
              { src: "/screenshots/fleetcore-finanzas-costos-fijos.png", w: 1616, h: 780, title: "Finanzas — Módulo de Costos Fijos" },
            ].map((shot) => (
              <div key={shot.src} className="group">
                <div className="rounded-t-xl bg-[#1c2738] px-4 py-3 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="relative w-full overflow-hidden rounded-b-xl border border-t-0 border-border shadow-soft-lg" style={{ aspectRatio: `${shot.w} / ${shot.h}` }}>
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">{shot.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,32,68,0.96) 0%, rgba(30,95,168,0.88) 100%)" }} />
        </div>
        <div className="relative container px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#C4965A]" />
                <span className="text-[#C4965A] text-xs font-bold uppercase tracking-[0.25em]">Sectores</span>
              </div>
              <h2 className="text-5xl font-black tracking-tight leading-tight mb-7">
                Diseñado para los ambientes más exigentes
              </h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                FleetCore fue desarrollado pensando en las condiciones extremas de la minería y la construcción chilena, con soporte para conectividad limitada y equipos en trabajo continuo.
              </p>
              <div className="space-y-4">
                {[
                  "Funciona offline en zonas sin cobertura",
                  "Compatible con toda marca de GPS y OBD",
                  "Soporte para maquinaria pesada y vehículos livianos",
                  "Interfaz en español con soporte local",
                  "Datos en servidores en Chile (Ley 19.628)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: "#C4965A" }} />
                    <span className="text-white/85 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.name}
                  className="p-7 rounded-2xl border border-white/15 backdrop-blur-sm bg-white/8 hover:bg-white/14 transition-all duration-300 group"
                >
                  <h4 className="font-bold text-white text-lg mb-2 group-hover:text-[#C4965A] transition-colors">{ind.name}</h4>
                  <p className="text-white/65 text-sm leading-relaxed">{ind.description}</p>
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
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
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
              ¿Listo para optimizar<br />tu flota?
            </h2>
            <p className="text-xl text-white/65 mb-10 leading-relaxed">
              Solicita una demo gratuita y te mostramos FleetCore funcionando con datos reales de tu industria.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-[#0F2044] text-lg transition-all duration-300 hover:scale-105"
              style={{ background: "#C4965A", boxShadow: "0 0 40px rgba(196,150,90,0.5)" }}
            >
              Solicitar Demo Gratuita <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
