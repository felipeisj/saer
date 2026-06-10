'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Cpu } from 'lucide-react'

const SERVICES = [
  { name: 'FleetCore', href: '/servicios/fleetcore', description: 'Gestión de flota para minería y construcción', tag: 'Producto' },
  { name: 'Licitex', href: '/servicios/licitex', description: 'Plataforma de licitaciones MOP y municipales', tag: 'Producto' },
  { name: 'Desarrollo a Medida', href: '/servicios/desarrollo', description: 'Software personalizado para tu negocio', tag: 'Servicio' },
  { name: 'Apps Web y Móviles', href: '/servicios/apps', description: 'Aplicaciones modernas y escalables', tag: 'Servicio' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={[
        'sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/10',
        scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : '',
      ].join(' ')}
      style={{ background: "#0B1830" }}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, #C4965A, transparent)" }} />

      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div
            className="p-2 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(196,150,90,0.4)]"
            style={{ background: "linear-gradient(135deg, #C4965A, #DDB57E)" }}
          >
            <Cpu className="h-5 w-5 text-[#0B1830]" />
          </div>
          <span className="text-xl font-black tracking-tight">
            <span className="text-white">SAER</span>
            <span style={{ color: "#C4965A" }}> TI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white/65 hover:text-white transition-colors">
            Inicio
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white/65 hover:text-white transition-colors py-2">
              Servicios
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown panel */}
            <div
              className={[
                'absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 transition-all duration-200',
                servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
              ].join(' ')}
            >
              <div className="bg-white rounded-2xl shadow-soft-xl border border-border/50 overflow-hidden">
                {/* Accent top */}
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #0F2044, #C4965A)" }} />
                <div className="p-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-muted/60 transition-all duration-200 group/item hover:translate-x-0.5"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">{s.name}</span>
                          <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{s.tag}</span>
                        </div>
                        <span className="text-xs text-muted-foreground leading-snug">{s.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" className="text-sm font-medium text-white/65 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-white/65 hover:text-white transition-colors">
            Contacto
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
            style={{ background: "#C4965A", color: "#0B1830", boxShadow: "0 0 0 rgba(196,150,90,0)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(196,150,90,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 rgba(196,150,90,0)")}
          >
            Cotiza tu Proyecto
          </Link>
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={[
          'md:hidden border-t border-white/10 overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        style={{ background: "#0B1830" }}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
          <Link href="/" className="py-3 text-sm font-semibold text-white border-b border-white/10" onClick={() => setMobileOpen(false)}>
            Inicio
          </Link>
          <div className="py-3 border-b border-white/10">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.15em] mb-3">Servicios</p>
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center justify-between py-2.5 text-sm text-white/80 hover:text-[#C4965A] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span className="font-medium">{s.name}</span>
                <span className="text-[10px] text-white/40">{s.tag}</span>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="py-3 text-sm font-semibold text-white border-b border-white/10" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link href="/contacto" className="py-3 text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
            Contacto
          </Link>
          <Link
            href="/contacto"
            className="mt-2 flex items-center justify-center py-3 rounded-full text-sm font-bold"
            style={{ background: "#C4965A", color: "#0B1830" }}
            onClick={() => setMobileOpen(false)}
          >
            Cotiza tu Proyecto
          </Link>
        </div>
      </div>
    </nav>
  )
}
