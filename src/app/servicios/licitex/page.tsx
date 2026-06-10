import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Search,
  Bell,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  ClipboardList,
  TrendingUp,
  Calendar,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Licitex | Sistema de Gestión de Licitaciones Municipales y MOP — SAER TI",
  description: "Plataforma chilena para la gestión de licitaciones de obras municipales y del Ministerio de Obras Públicas. Agiliza postulaciones, seguimiento y adjudicaciones.",
};

const FEATURES = [
  {
    icon: Search,
    title: "Buscador de Licitaciones",
    description: "Accede a todas las licitaciones activas del MOP, municipalidades y servicios públicos desde una sola interfaz actualizada en tiempo real.",
  },
  {
    icon: ClipboardList,
    title: "Gestión de Bases",
    description: "Organiza y analiza las bases de licitación. Genera checklists automáticos de requisitos y plazos para cada postulación.",
  },
  {
    icon: Bell,
    title: "Alertas de Publicación",
    description: "Recibe notificaciones inmediatas cuando se publiquen nuevas licitaciones según tus criterios de búsqueda y rubros de interés.",
  },
  {
    icon: FileText,
    title: "Gestión de Propuestas",
    description: "Prepara, revisa y envía tus ofertas técnicas y económicas directamente desde la plataforma con firma electrónica integrada.",
  },
  {
    icon: Calendar,
    title: "Calendario de Plazos",
    description: "Nunca más pierdas una fecha límite. Gestiona todos los plazos de tus postulaciones en un calendario centralizado con recordatorios.",
  },
  {
    icon: Lock,
    title: "Repositorio Documental",
    description: "Almacena y reutiliza documentos frecuentes como certificados, antecedentes legales y estados financieros actualizados.",
  },
];

const STATS = [
  { value: "500+", label: "Licitaciones gestionadas" },
  { value: "120", label: "Municipalidades cubiertas" },
  { value: "85%", label: "Tasa de adjudicación" },
  { value: "60%", label: "Menos tiempo en postulaciones" },
];

const TARGETS = [
  {
    icon: Building2,
    title: "Empresas Constructoras",
    description: "Postula a obras viales, edificación pública y proyectos de infraestructura municipal y del MOP.",
  },
  {
    icon: TrendingUp,
    title: "Proveedores de Servicios",
    description: "Gestiona licitaciones de servicios, consultorías y suministros para organismos del Estado.",
  },
  {
    icon: Users,
    title: "Departamentos de Licitaciones",
    description: "Centraliza el trabajo de tu equipo con acceso multiusuario, historial y control de versiones.",
  },
];

export default function LicitexPage() {
  return (
    <div className="flex flex-col">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Plataforma Licitex para gestión de licitaciones públicas"
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
                <span className="text-[#C4965A] text-xs font-bold uppercase tracking-[0.25em]">Producto SAER TI</span>
              </div>
              <h1
                className="font-black text-white tracking-tight leading-[0.88] mb-7 animate-fade-up-d1"
                style={{ fontSize: "clamp(4.5rem, 11vw, 9rem)" }}
              >
                Licite<span style={{ color: "#C4965A" }}>x</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed animate-fade-up-d2">
                La plataforma que simplifica el proceso completo de licitación pública en Chile. Desde la búsqueda hasta la adjudicación, todo en un lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-d3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#0F2044] transition-all duration-300 hover:scale-105"
                  style={{ background: "#C4965A", boxShadow: "0 0 30px rgba(196,150,90,0.45)" }}
                >
                  Solicitar Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#funcionalidades"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  Ver cómo funciona
                </Link>
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
                    <div className="text-3xl font-black mb-1" style={{ color: "#C4965A" }}>{s.value}</div>
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
            <h2 className="text-5xl font-black tracking-tight leading-tight mb-5">Todo el ciclo de licitación<br />bajo control</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Licitex cubre cada etapa del proceso, desde que aparece la licitación hasta que recibes la resolución de adjudicación.
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

      {/* ─── TARGETS ─── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,32,68,0.96) 0%, rgba(22,51,87,0.92) 100%)" }} />
        </div>
        <div className="relative container px-6 mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C4965A]" />
              <span className="text-[#C4965A] text-xs font-bold uppercase tracking-[0.25em]">¿Para quién es?</span>
              <div className="h-px w-10 bg-[#C4965A]" />
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight leading-tight">
              Hecho para empresas constructoras<br />y proveedores del Estado
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {TARGETS.map((t) => (
              <div
                key={t.title}
                className="p-8 rounded-2xl border border-white/15 backdrop-blur-sm bg-white/8 hover:bg-white/14 transition-all duration-300 group text-center"
              >
                <div className="p-4 rounded-2xl bg-white/10 w-fit mx-auto mb-5 group-hover:bg-[#C4965A]/20 transition-colors">
                  <t.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-[#C4965A] transition-colors">{t.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Integración directa con ChileCompra y MOP",
                "Cumplimiento con normativas de transparencia",
                "Datos almacenados en Chile bajo Ley 19.628",
                "Soporte de especialistas en licitaciones públicas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white/8 border border-white/10">
                  <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#C4965A" }} />
                  <span className="text-white/80 text-sm">{item}</span>
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
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
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
              ¿Cuántas licitaciones<br />estás perdiendo?
            </h2>
            <p className="text-xl text-white/65 mb-10 leading-relaxed">
              Comienza hoy y convierte más oportunidades en contratos con el respaldo de Licitex.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-[#0F2044] text-lg transition-all duration-300 hover:scale-105"
              style={{ background: "#C4965A", boxShadow: "0 0 40px rgba(196,150,90,0.5)" }}
            >
              Empezar ahora <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
