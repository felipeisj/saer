import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceCardGroup } from "@/components/sections/ServiceCard";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Users,
  Globe,
  TrendingUp,
  Award,
  Code2,
  Calendar,
  Clock,
} from "lucide-react";

const SERVICE_CARDS = [
  {
    title: "FleetCore",
    subtitle: "Gestión de flota para minería y construcción en tiempo real",
    href: "/servicios/fleetcore",
    imageSrc: "https://images.unsplash.com/photo-1755717706420-83d338718475?q=80&w=1200&auto=format&fit=crop",
    imagePosition: "center bottom",
    overlayColor: "#0F2044",
    tag: "Producto",
    priority: true,
  },
  {
    title: "Licitex",
    subtitle: "Plataforma de licitaciones públicas MOP y municipales",
    href: "/servicios/licitex",
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    overlayColor: "#0D3347",
    tag: "Producto",
    priority: true,
  },
  {
    title: "Desarrollo",
    subtitle: "Software a medida para los procesos únicos de tu empresa",
    href: "/servicios/desarrollo",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    overlayColor: "#0A2A3A",
    tag: "Servicio",
  },
  {
    title: "Apps",
    subtitle: "Aplicaciones web y móviles modernas para iOS y Android",
    href: "/servicios/apps",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    overlayColor: "#082033",
    tag: "Servicio",
  },
];

const STATS = [
  { value: "50+", label: "Clientes activos" },
  { value: "120+", label: "Proyectos entregados" },
  { value: "10+", label: "Años de experiencia" },
  { value: "99%", label: "Uptime garantizado" },
];

const BLOG_POSTS = [
  {
    tag: "FleetCore",
    title: "Cómo reducir costos de flota en un 30% con tecnología predictiva",
    date: "05 Jun 2025",
    readTime: "8 min",
    href: "/blog",
  },
  {
    tag: "Licitaciones",
    title: "Guía completa para postular a licitaciones del MOP en 2025",
    date: "28 May 2025",
    readTime: "12 min",
    href: "/blog",
  },
  {
    tag: "Tecnología",
    title: "Por qué las pymes chilenas están adoptando software a medida",
    date: "15 May 2025",
    readTime: "6 min",
    href: "/blog",
  },
];

const INDUSTRIES = ["Minería", "Construcción", "Municipalidades", "MOP", "Servicios Públicos", "Empresas Privadas"];

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SAER TI",
  url: "https://saer.cl",
  logo: "https://saer.cl/icon",
  description:
    "Empresa chilena de software especializada en FleetCore para minería y construcción, Licitex para licitaciones públicas, desarrollo de sitios web, e-commerce, software a medida y aplicaciones web y móviles.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  sameAs: ["https://fleetcore.cl", "https://licitex.cl"],
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image carousel */}
        <HeroCarousel />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07] z-[1] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.12] pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse, rgba(196,150,90,0.7) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 container px-6 mx-auto text-center text-white max-w-4xl">
          {/* Pill */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full rounded-full animate-pulse" style={{ background: "#C4965A" }} aria-hidden="true" />
            Empresa Chilena de Software
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up-d1 text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8">
            Tecnología que{" "}
            <span className="relative inline-block">
              <span style={{ color: "#C4965A" }}>transforma</span>
              <span
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full opacity-60"
                style={{ background: "linear-gradient(90deg, transparent, #C4965A, transparent)" }}
              />
            </span>
            <br />
            industrias
          </h1>

          {/* Sub */}
          <p className="animate-fade-up-d2 text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed">
            Desarrollamos software de clase mundial para minería, construcción y el sector público chileno. FleetCore, Licitex y soluciones a medida.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-d3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(196,150,90,0.4)]"
              style={{ background: "#C4965A", color: "#0F2044" }}
            >
              Cotiza tu Proyecto <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border border-white/20 bg-white/5 hover:bg-white/12 transition-all duration-300 backdrop-blur-sm"
            >
              Ver productos
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40 animate-fade-in">
          <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-white/40" style={{ animation: "fade-up 2s ease infinite" }} />
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 bg-foreground text-background border-y border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #C4965A 0%, transparent 70%)" }}
        />
        <div className="relative container px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="group text-center px-6">
                <p className="text-5xl font-black mb-2 transition-transform duration-300 group-hover:scale-110" style={{ color: "#C4965A" }}>
                  {stat.value}
                </p>
                <p className="text-sm opacity-50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES CARDS (estilo lumarty HeroCard) ──────────────────────── */}
      <section id="servicios">
        <div className="container-none">
          <div className="px-6 py-16 text-center">
            <Badge variant="secondary" className="mb-4">Productos y Servicios</Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Soluciones para cada industria
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pasa el cursor sobre cada card para descubrirla.
            </p>
          </div>
          <ServiceCardGroup cards={SERVICE_CARDS} />
        </div>
      </section>

      {/* ── WHY SAER ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-muted/20">
        <div className="container px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <Badge variant="secondary" className="mb-5">¿Por qué SAER TI?</Badge>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                Software construido para Chile
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                Entendemos las regulaciones locales, los desafíos únicos de la industria extractiva y las exigencias del sector público. Más de una década construyendo soluciones que realmente funcionan.
              </p>
              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: "Cumplimiento normativo chileno (Ley 19.628, SII, CMF)" },
                  { icon: Users, text: "Equipo 100% local con soporte presencial en Santiago" },
                  { icon: TrendingUp, text: "Actualizaciones continuas sin costo adicional" },
                  { icon: Globe, text: "Integración nativa con SII, ChileCompra y MOP" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4 group">
                    <div className="p-2 rounded-xl bg-primary/10 shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Calidad Certificada", desc: "Procesos bajo estándares internacionales de desarrollo de software." },
                { icon: Users, title: "Soporte Dedicado", desc: "Equipo asignado a tu cuenta disponible cuando lo necesites." },
                { icon: Code2, title: "Stack Moderno", desc: "Tecnologías actuales que garantizan rendimiento y escalabilidad." },
                { icon: ShieldCheck, title: "Seguridad Primero", desc: "Cifrado de extremo a extremo y backups automáticos diarios." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="group bg-white border border-border/60 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300"
                  style={{ marginTop: i % 2 === 1 ? "1.5rem" : "0" }}
                >
                  <div
                    className="h-11 w-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #0F2044, #1E5FA8)" }}
                  >
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold mb-1.5 text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section
        className="relative py-16 border-y overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F2044 0%, #0D3347 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative container px-6 mx-auto text-center">
          <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Industrias que confían en nosotros</p>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2 rounded-full border border-white/10 text-sm font-semibold text-white/70 bg-white/5 backdrop-blur-sm hover:border-[#C4965A]/40 hover:text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ──────────────────────────────────────────────────── */}
      <section className="py-28">
        <div className="container px-6 mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
            <div>
              <Badge variant="secondary" className="mb-4">Blog</Badge>
              <h2 className="text-4xl font-black tracking-tight">Últimas publicaciones</h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mt-4"
            >
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.title} href={post.href} className="group">
                <Card className="h-full border border-border/60 shadow-soft hover:border-primary/30 hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden py-0">
                  <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }} />
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <Badge variant="secondary" className="mb-4">{post.tag}</Badge>
                      <h3 className="font-bold text-lg leading-snug mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #071628 0%, #0F2044 60%, #071628 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative container px-6 mx-auto text-center text-white max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            ¿Listo para el siguiente paso?
          </h2>
          <p className="text-white/55 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Cuéntanos tu desafío. En menos de 48 horas tienes una propuesta personalizada, sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(196,150,90,0.4)]"
              style={{ background: "#C4965A", color: "#0F2044" }}
            >
              Contactar ahora <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/servicios/fleetcore"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border border-white/20 bg-white/5 hover:bg-white/12 transition-all duration-300"
            >
              Ver FleetCore <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
