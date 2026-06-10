import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto — SAER TI",
  description: "Contáctanos para cotizar tu proyecto de software. Respondemos en menos de 48 horas.",
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section
        className="py-24 flex items-center"
        style={{ background: "linear-gradient(135deg, #0F2044 0%, #1A3560 100%)" }}
      >
        <div className="container px-4 mx-auto text-center text-white">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">Contacto</Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-4">Hablemos de tu proyecto</h1>
          <p className="text-lg opacity-75 max-w-xl mx-auto">
            Cuéntanos qué necesitas y en menos de 48 horas un especialista de SAER TI se pondrá en contacto contigo.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">Información</Badge>
                <h2 className="text-2xl font-bold mb-2">Estamos aquí para ayudarte</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nuestro equipo comercial atiende consultas de lunes a viernes.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Ubicación", value: "Santiago, Chile" },
                  { icon: Phone, label: "Teléfono", value: "+56 9 1234 5678" },
                  { icon: Mail, label: "Email", value: "contacto@saer.cl" },
                  { icon: Clock, label: "Horario", value: "Lun–Vie: 9:00 – 18:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Card className="border bg-muted/30">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-2">Respuesta garantizada</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Respondemos en menos de 48 horas hábiles</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form (client component) */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
