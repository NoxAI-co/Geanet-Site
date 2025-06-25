"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import Link from "next/link";

const LOGOS = [
  {
    name: "Internet Sano",
    file: "Internet_sano.png",
    url: "https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/720:Internet-Sano-una-estrategia-para-proteger-la-identidad-de-ninos-y-jovenes-en-la-red"
  },
  {
    name: "ICBF - Bienestar Familiar",
    file: "Bienestar_familiar.png",
    url: "https://www.icbf.gov.co/"
  },
  {
    name: "Policía Nacional",
    file: "policia_nacional.png",
    url: "https://www.policia.gov.co/"
  },
  {
    name: "MinTIC",
    file: "MinTIC.png",
    url: "https://www.mintic.gov.co/portal/inicio/"
  },
  {
    name: "CRC - Comisión de Regulación de Comunicaciones",
    file: "Comision_de_Regulacion_de_Comunicaciones.png",
    url: "https://crcom.gov.co/es"
  },
  {
    name: "Fiscalía General de la Nación",
    file: "Fiscalia_General_de_la_Nacion.png",
    url: "https://www.fiscalia.gov.co/colombia/servicios-de-informacion-al-ciudadano/consultas/"
  },
  {
    name: "Todos por un nuevo país",
    file: "Todos_por_un_nuevo_pais.png",
    url: "https://www.dnp.gov.co/plan-nacional-desarrollo/Paginas/todos-por-un-nuevo-pais-2014-2018-juan-manuel-santos.aspx"
  },
  {
    name: "Vive para la gente",
    file: "vive_para_la_gente.png",
    url: "https://mintic.gov.co/portal/vivedigital/612/w3-propertyvalue-19436.html"
  }
];

const QualityIndicators = () => {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) {
      return;
    }

    const scrollNext = () => {
      api.scrollNext();
    };

    // Iniciar el movimiento automático
    const interval = setInterval(scrollNext, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  return (
    <div className="w-full py-12 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Encabezado de la sección */}
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge className="bg-blue-900 text-white hover:bg-blue-800">Certificaciones y Regulaciones</Badge>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                Cumplimos con los Estándares
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Operamos bajo las normativas y regulaciones del sector de telecomunicaciones en Colombia.
              </p>
            </div>
          </div>

          {/* Carrusel de logos */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
              Entidades reguladoras y certificadoras
            </h3>
            <div className="relative w-full lg:col-span-4 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />
              <Carousel 
                setApi={setApi} 
                className="w-full"
                opts={{
                  align: "center",
                  loop: true,
                  dragFree: true,
                  containScroll: false,
                  skipSnaps: false,
                }}
              >
                <CarouselContent>
                  {/* Duplicamos los elementos para un efecto infinito más suave */}
                  {[...Array(2)].map((_, set) => (
                    LOGOS.map((logo, index) => (
                      <CarouselItem
                        key={`${set}-${index}`}
                        className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 pl-4"
                      >
                        <Link 
                          href={logo.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="flex items-center justify-center h-24 md:h-28 lg:h-32 p-4 transition-all duration-300 hover:scale-105 group cursor-pointer">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 grayscale group-hover:grayscale-0 transition-all duration-300">
                              <img
                                src={`/indicadores-calidad/${logo.file}`}
                                alt={logo.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityIndicators; 