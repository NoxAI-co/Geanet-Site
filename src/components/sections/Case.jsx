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
import { Target, Eye, Heart, Shield, Lightbulb, Users, Globe, Phone } from 'lucide-react';
import { CONTACT } from '@/config/project-config';

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

  const handleContactClick = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre Geanet Internet. ¿Podrían brindarme más información?");
    window.open(`https://wa.me/57${CONTACT.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full" id="sobre-nosotros">
      <div className="container mx-auto px-4">
        
        {/* Encabezado Principal */}
        <div className="text-center py-12">
          <Badge className="bg-primary text-white mb-6">Sobre Nosotros</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            {COMPANY_INFO.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="py-16">
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Misión */}
            <Card className="border-l-4 border-l-accent shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-10 pt-12">
                <div className="text-center mb-8">
                  <div className="inline-flex p-6 bg-accent/10 rounded-full mb-6">
                    <Target className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Nuestra Misión</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center text-lg">
                  {COMPANY_INFO.mission}
                </p>
              </CardContent>
            </Card>

            {/* Visión */}
            <Card className="border-l-4 border-l-secondary shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-10 pt-12">
                <div className="text-center mb-8">
                  <div className="inline-flex p-6 bg-secondary/10 rounded-full mb-6">
                    <Eye className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Nuestra Visión</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center text-lg">
                  {COMPANY_INFO.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Valores Corporativos */}
        <div className="py-16">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-white mb-6">Valores Corporativos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Lo que nos define
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nuestros valores son el fundamento de todo lo que hacemos en Geanet Internet. 
              Cada decisión y cada servicio que ofrecemos está guiado por estos principios.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {COMPANY_INFO.values.map((value, index) => {
              const IconComponent = valueIcons[value.name] || Users;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 pt-10 text-center h-full flex flex-col">
                    <div className="flex justify-center mb-8">
                      <div className="p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                      {value.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="py-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              ¿Listo para formar parte de la familia Geanet?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Únete a miles de familias y empresas que ya confían en nuestra tecnología 
              de fibra óptica para mantenerse conectados con velocidades simétricas y 
              soporte técnico 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/servicios"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Ver nuestros planes
              </a>
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium text-lg gap-2"
              >
                <Phone className="w-5 h-5" />
                Contáctanos por WhatsApp
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs; 