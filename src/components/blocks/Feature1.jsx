"use client";

import { Check } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from 'next/image';

export const Feature1 = () => (
  <section className="w-full py-20 lg:py-40 bg-white">
    <div className="container mx-auto">
      <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Plataforma</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Soluciones Tecnológicas Integrales
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                En Geanet, entendemos los desafíos de gestionar un negocio en la era digital. 
                Por eso, ofrecemos soluciones que simplifican tu operación diaria.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Fácil de implementar</p>
                <p className="text-muted-foreground text-sm">
                  Proceso de integración simplificado y soporte continuo para tu equipo.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Rápido y confiable</p>
                <p className="text-muted-foreground text-sm">
                  Sistemas optimizados para máximo rendimiento y disponibilidad.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">Seguro y escalable</p>
                <p className="text-muted-foreground text-sm">
                  Infraestructura robusta que crece con tu negocio manteniendo la seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-muted rounded-lg aspect-square overflow-hidden">
          <Image
            src="/images/dashboard-preview.png"
            alt="Vista previa del dashboard"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default Feature1; 