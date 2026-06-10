'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Send } from "lucide-react";

const SERVICES_OPTIONS = [
  "FleetCore",
  "Licitex",
  "Desarrollo a Medida",
  "Apps Web y Móviles",
  "Otro / Consulta general",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "", empresa: "", email: "", telefono: "", servicio: "", mensaje: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="border h-full flex items-center justify-center">
        <CardContent className="p-12 text-center">
          <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">¡Mensaje recibido!</h3>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Gracias por contactarnos. Un especialista de SAER TI te responderá en menos de 48 horas.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-8">
        <h3 className="text-xl font-bold mb-6">Envíanos tu consulta</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Nombre completo *</label>
              <Input name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Empresa *</label>
              <Input name="empresa" placeholder="Nombre de tu empresa" value={form.empresa} onChange={handleChange} required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Correo electrónico *</label>
              <Input name="email" type="email" placeholder="correo@empresa.cl" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Teléfono</label>
              <Input name="telefono" placeholder="+56 9 1234 5678" value={form.telefono} onChange={handleChange} />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Servicio de interés</label>
            <select
              name="servicio"
              value={form.servicio}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Selecciona un servicio</option>
              {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Mensaje *</label>
            <textarea
              name="mensaje"
              placeholder="Cuéntanos sobre tu proyecto o necesidad..."
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Enviar mensaje
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Al enviar aceptas nuestra política de privacidad. Tu información no será compartida.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
