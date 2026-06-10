import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — SAER TI | Tecnología, Software e Industria Chilena",
  description: "Artículos, guías y noticias sobre software industrial, licitaciones públicas, gestión de flota y tecnología para empresas chilenas.",
};

const POSTS = [
  {
    slug: "#",
    tag: "FleetCore",
    title: "Cómo reducir costos de flota en un 30% con tecnología predictiva",
    excerpt: "El mantenimiento predictivo ya no es exclusivo de las grandes corporaciones. En este artículo exploramos cómo empresas medianas de minería están logrando ahorros significativos.",
    date: "05 Jun 2025",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "#",
    tag: "Licitaciones",
    title: "Guía completa para postular a licitaciones del MOP en 2025",
    excerpt: "Los requisitos, plazos y documentos que necesitas tener listos para participar exitosamente en los procesos de licitación del Ministerio de Obras Públicas.",
    date: "28 May 2025",
    readTime: "12 min",
    featured: false,
  },
  {
    slug: "#",
    tag: "Tecnología",
    title: "Por qué las pymes chilenas están adoptando software a medida",
    excerpt: "El mercado chileno está viviendo una transformación digital acelerada. Analizamos las razones por las que más empresas optan por soluciones propias en lugar de las genéricas.",
    date: "15 May 2025",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "#",
    tag: "Apps Móviles",
    title: "React Native vs desarrollo nativo: cuál elegir en 2025",
    excerpt: "Una comparativa honesta de las principales tecnologías de desarrollo móvil y qué factores deben guiar tu decisión según el tipo de aplicación.",
    date: "02 May 2025",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "#",
    tag: "Minería",
    title: "Digitalización de la minería chilena: tendencias y desafíos",
    excerpt: "La gran minería chilena lleva años digitalizando sus operaciones. Ahora es el turno de la mediana y pequeña minería. Exploramos el panorama actual y las oportunidades.",
    date: "20 Abr 2025",
    readTime: "9 min",
    featured: false,
  },
  {
    slug: "#",
    tag: "Sector Público",
    title: "Chile Compra y la transformación de las compras públicas",
    excerpt: "Cómo la plataforma de compras del Estado chileno ha evolucionado y qué significa esto para los proveedores que quieren participar más activamente.",
    date: "08 Abr 2025",
    readTime: "7 min",
    featured: false,
  },
];

const ALL_TAGS = ["Todos", "FleetCore", "Licitaciones", "Tecnología", "Apps Móviles", "Minería", "Sector Público"];

export default function BlogPage() {
  const featured = POSTS.find((p) => p.featured)!;
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F2044 0%, #1A3560 100%)" }}
      >
        <div className="container px-4 mx-auto text-center text-white">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Blog</Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-4">Insights y recursos</h1>
          <p className="text-lg opacity-75 max-w-xl mx-auto">
            Contenido útil sobre software industrial, licitaciones públicas y transformación digital para empresas chilenas.
          </p>
        </div>
      </section>

      {/* Tags */}
      <section className="py-6 border-b bg-white sticky top-20 z-30">
        <div className="container px-4 mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {ALL_TAGS.map((tag) => (
              <Badge
                key={tag}
                variant={tag === "Todos" ? "default" : "secondary"}
                className="px-4 py-1.5 cursor-pointer whitespace-nowrap text-sm font-medium hover:opacity-80 transition-opacity"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-5xl">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">Artículo destacado</p>
          <Link href={featured.slug} className="group block">
            <Card className="border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-2 bg-primary w-full" />
              <CardContent className="p-10">
                <Badge variant="secondary" className="mb-4">{featured.tag}</Badge>
                <h2 className="text-3xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors max-w-2xl">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {featured.readTime} lectura
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                    Leer artículo <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-24">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.title} href={post.slug} className="group">
                <Card className="h-full border hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="h-1 bg-muted-foreground/20 w-full group-hover:bg-primary transition-colors" />
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <Badge variant="secondary" className="mb-3">{post.tag}</Badge>
                      <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
