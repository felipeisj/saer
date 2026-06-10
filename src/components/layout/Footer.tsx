import Link from 'next/link'
import { Cpu, MapPin, Phone, Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background w-full overflow-hidden">
      {/* Accent top border */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, #C4965A, transparent)" }} />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div
                className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #C4965A, #DDB57E)" }}
              >
                <Cpu className="h-5 w-5 text-[#0F2044]" />
              </div>
              <span className="text-xl font-bold tracking-tight">SAER TI</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-60 mb-7 max-w-xs">
              Empresa chilena de software especializada en soluciones tecnológicas para minería, construcción y el sector público.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center h-10 w-10 rounded-full border border-white/15 opacity-70 hover:opacity-100 hover:border-[#C4965A]/50 hover:text-[#C4965A] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center h-10 w-10 rounded-full border border-white/15 opacity-70 hover:opacity-100 hover:border-[#C4965A]/50 hover:text-[#C4965A] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] opacity-40 mb-6">Productos</h4>
            <ul className="space-y-3.5 text-sm opacity-75">
              <li>
                <Link href="/servicios/fleetcore" className="inline-flex items-center gap-1.5 hover:opacity-100 hover:text-[#C4965A] transition-all duration-200 group/link">
                  FleetCore
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/servicios/licitex" className="inline-flex items-center gap-1.5 hover:opacity-100 hover:text-[#C4965A] transition-all duration-200 group/link">
                  Licitex
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] opacity-40 mb-6">Servicios</h4>
            <ul className="space-y-3.5 text-sm opacity-75">
              <li>
                <Link href="/servicios/desarrollo" className="inline-flex items-center gap-1.5 hover:opacity-100 hover:text-[#C4965A] transition-all duration-200 group/link">
                  Desarrollo a Medida
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/servicios/apps" className="inline-flex items-center gap-1.5 hover:opacity-100 hover:text-[#C4965A] transition-all duration-200 group/link">
                  Apps Web y Móviles
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/blog" className="inline-flex items-center gap-1.5 hover:opacity-100 hover:text-[#C4965A] transition-all duration-200 group/link">
                  Blog
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="inline-flex items-center gap-1.5 hover:opacity-100 hover:text-[#C4965A] transition-all duration-200 group/link">
                  Contacto
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] opacity-40 mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm opacity-75">
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="pt-1.5">Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <a href="tel:+56912345678" className="hover:opacity-100 hover:text-[#C4965A] transition-colors">+56 9 1234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <a href="mailto:contacto@saer.cl" className="hover:opacity-100 hover:text-[#C4965A] transition-colors">contacto@saer.cl</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-40">
          <p>© {new Date().getFullYear()} SAER TI SpA. Todos los derechos reservados.</p>
          <p>Hecho en Chile</p>
        </div>
      </div>
    </footer>
  )
}
