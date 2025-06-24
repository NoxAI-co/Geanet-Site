"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { COMPANY_INFO } from '@/config/project-config';
import { Target, Eye, Heart, Shield, Lightbulb, Users, Globe } from 'lucide-react';

/**
 * About Us Section Component - Información Corporativa de Geanet
 * 
 * Muestra la misión, visión y valores corporativos de Geanet Internet
 * con un diseño moderno y profesional que refleja la identidad de la empresa.
 * 
 * Características:
 * - Misión y visión de la empresa
 * - Valores corporativos con iconos representativos
 * - Diseño responsivo con gradientes y efectos visuales
 * - Colores corporativos de Geanet
 */

const AboutUs = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000); // Aumentado a 3 segundos para mejor experiencia de usuario

    return () => clearInterval(interval);
  }, [api, current]);

  const logos = [
    "Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", "Cliente 5",
    "Cliente 6", "Cliente 7", "Cliente 8", "Cliente 9", "Cliente 10",
    "Cliente 11", "Cliente 12", "Cliente 13", "Cliente 14", "Cliente 15"
  ];

  const valueIcons = {
    'Confiabilidad': Shield,
    'Transparencia': Eye,
    'Innovación': Lightbulb,
    'Compromiso': Heart,
    'Responsabilidad Social': Globe
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-gray-50 to-white" id="sobre-nosotros">
      <div className="container mx-auto">
        {/* Encabezado de la sección */}
        <div className="flex text-center justify-center items-center gap-4 flex-col mb-16">
          <Badge className="bg-primary text-white">Sobre Nosotros</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-3xl text-center font-regular">
              {COMPANY_INFO.name}
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-4xl text-center">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {/* Misión */}
          <Card className="border-l-4 border-l-accent shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Nuestra Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {COMPANY_INFO.mission}
              </p>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="border-l-4 border-l-secondary shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Nuestra Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {COMPANY_INFO.vision}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores Corporativos */}
        <div className="text-center mb-12">
          <Badge className="bg-accent text-white mb-4">Valores Corporativos</Badge>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Lo que nos define
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros valores son el fundamento de todo lo que hacemos en Geanet Internet
          </p>
        </div>

        {/* Grid de valores */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMPANY_INFO.values.map((value, index) => {
            const IconComponent = valueIcons[value.name] || Users;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {value.name}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Llamada a la acción */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ¿Listo para formar parte de la familia Geanet?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a miles de familias y empresas que ya confían en nuestra tecnología 
              de fibra óptica para mantenerse conectados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver nuestros planes
              </a>
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 