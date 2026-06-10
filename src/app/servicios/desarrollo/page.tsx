import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  GitBranch,
  Database,
  Layers,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida — SAER TI",
  description: "Desarrollamos software personalizado para empresas chilenas. Sistemas de gestión, automatizaciones, integraciones con ERP y soluciones para procesos únicos de tu negocio.",
};

const PROCESS = [
  { step: "01", title: "Análisis y Levantamiento", description: "Nos reunimos con tu equipo para entender a fondo los procesos, necesidades y objetivos del proyecto." },
  { step: "02", title: "Diseño y Arquitectura", description: "Diseñamos la arquitectura técnica y los flujos de usuario, validando contigo antes de escribir código." },
  { step: "03", title: "Desarrollo por Sprints", description: "Entregamos funcionalidades reales cada 2-3 semanas para que veas el progreso y des feedback continuo." },
  { step: "04", title: "Pruebas y QA", description: "Cada módulo pasa por pruebas unitarias, de integración y de usuario antes de pasar a producción." },
  { step: "05", title: "Lanzamiento", description: "Desplegamos el sistema, capacitamos a tu equipo y monitoreamos el rendimiento en las primeras semanas." },
  { step: "06", title: "Soporte Continuo", description: "Mantenemos y evolucionamos el software con actualizaciones, mejoras y soporte técnico dedicado." },
];

const TECH = ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "MySQL", "Docker", "AWS", "Supabase", "TypeScript"];

const SOLUTIONS = [
  { icon: Database, title: "Sistemas de Gestión (ERP/CRM)", description: "Software empresarial a medida para gestionar inventarios, clientes, ventas y procesos internos." },
  { icon: Layers, title: "Integraciones y APIs", description: "Conectamos tus sistemas existentes con nuevas plataformas, ERP, SII, bancos y servicios externos." },
  { icon: RefreshCw, title: "Automatización de Procesos", description: "Eliminamos tareas manuales y repetitivas mediante flujos automatizados y bots de gestión." },
  { icon: GitBranch, title: "Migraciones y Modernización", description: "Actualizamos sistemas legacy a tecnologías modernas sin interrumpir la operación de tu empresa." },
];

export default function DesarrolloPage() {
  return (
    <div className="flex flex-col">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80"
            alt="Desarrollo de software a medida en SAER TI"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
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
                Software<br /><span style={{ color: "#C4965A" }}>a Medida</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed animate-fade-up-d2">
                Cuando ningún software del mercado se adapta exactamente a tu negocio, nosotros lo construimos desde cero para ti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-d3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#0F2044] transition-all duration-300 hover:scale-105"
                  style={{ background: "#C4965A", boxShadow: "0 0 30px rgba(196,150,90,0.45)" }}
                >
                  Cuéntanos tu proyecto <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#proceso"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  Ver metodología
                </Link>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/10 backdrop-blur-md bg-black/35">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {[
                  { value: "10+", label: "Años de experiencia" },
                  { value: "50+", label: "Proyectos entregados" },
                  { value: "98%", label: "Clientes satisfechos" },
                  { value: "24/7", label: "Soporte técnico" },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className={`py-6 px-4 text-center ${i < 3 ? "border-r border-white/10" : ""}`}
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

      {/* ─── SOLUTIONS ─── */}
      <section className="py-28 bg-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-xl mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#0F2044" }}>¿Qué desarrollamos?</span>
            </div>
            <h2 className="text-5xl font-black tracking-tight leading-tight mb-5">Soluciones para cada<br />desafío empresarial</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desde sistemas de gestión hasta integraciones complejas, construimos la solución exacta que tu empresa necesita.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                className="group p-10 rounded-2xl border border-border hover:border-primary/25 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div
                  className="h-1 w-10 rounded-full mb-7"
                  style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }}
                />
                <div className="p-3 rounded-xl bg-primary/8 w-fit mb-6 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="proceso" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,32,68,0.97) 0%, rgba(26,53,96,0.93) 100%)" }} />
        </div>
        <div className="relative container px-6 mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C4965A]" />
              <span className="text-[#C4965A] text-xs font-bold uppercase tracking-[0.25em]">Metodología</span>
              <div className="h-px w-10 bg-[#C4965A]" />
            </div>
            <h2 className="text-5xl font-black text-white tracking-tight leading-tight mb-5">Cómo trabajamos contigo</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Un proceso transparente y colaborativo donde tú siempre sabes qué está pasando.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PROCESS.map((p) => (
              <div key={p.step} className="p-7 rounded-2xl border border-white/15 backdrop-blur-sm bg-white/8 hover:bg-white/14 transition-all duration-300 group">
                <div className="text-5xl font-black mb-4" style={{ color: "rgba(0,180,216,0.25)" }}>{p.step}</div>
                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-[#C4965A] transition-colors">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH + ADVANTAGES ─── */}
      <section className="py-28 bg-white">
        <div className="container px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#0F2044" }}>Stack tecnológico</span>
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-8">Tecnologías con las que trabajamos</h2>
              <div className="flex flex-wrap gap-3">
                {TECH.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full border border-border text-sm font-semibold hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#0F2044" }}>Ventajas</span>
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-8">Por qué elegir software a medida</h2>
              <div className="space-y-3">
                {[
                  "Se adapta exactamente a tus procesos, no al revés",
                  "Propiedad total del código y los datos",
                  "Sin licencias mensuales ni dependencia de terceros",
                  "Escala junto con el crecimiento de tu empresa",
                  "Integraciones personalizadas con todos tus sistemas",
                  "Soporte en español con tiempos de respuesta garantizados",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0F2044]/92" />
        </div>
        <div className="relative container px-6 mx-auto text-center text-white">
          <div className="max-w-2xl mx-auto">
            <Code2 className="h-12 w-12 mx-auto mb-8 opacity-40" />
            <h2
              className="font-black tracking-tight leading-tight mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
            >
              Hablemos de<br />tu proyecto
            </h2>
            <p className="text-xl text-white/65 mb-10 leading-relaxed">
              Una reunión de 30 minutos es suficiente para saber si somos el equipo adecuado. Sin compromiso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-[#0F2044] text-lg transition-all duration-300 hover:scale-105"
              style={{ background: "#C4965A", boxShadow: "0 0 40px rgba(196,150,90,0.5)" }}
            >
              Agendar reunión <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
