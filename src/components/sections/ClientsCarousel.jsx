"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import Image from "next/image";

// Logos de marcas/clientes reales
const BRAND_LOGOS = [
  {
    name: "Geanet Horizontal",
    file: "logo_horizontal.svg",
    alt: "Geanet Internet - Logo horizontal"
  },
  {
    name: "Geanet Vertical", 
    file: "logo_vertical.svg",
    alt: "Geanet Internet - Logo vertical"
  },
  {
    name: "Geanet Icono",
    file: "logo_icono.svg", 
    alt: "Geanet Internet - Icono"
  },
  {
    name: "Geanet Principal",
    file: "logo.svg",
    alt: "Geanet Internet - Logo principal"
  },
  // Puedes agregar más logos de clientes reales aquí
];

const ClientsCarousel = () => {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) {
      return;
    }

    const scrollNext = () => {
      api.scrollNext({
        duration: 3000, // Transición más lenta
        easing: (t) => t, // Movimiento lineal para que sea más suave
      });
    };

    // Iniciar el movimiento automático
    const interval = setInterval(scrollNext, 3000);

    // Reiniciar al principio cuando llegue al final
    const onSelect = () => {
      const lastSnap = api.scrollSnapList().length - 1;
      if (api.selectedScrollSnap() === lastSnap) {
        setTimeout(() => {
          api.scrollTo(0, {
            duration: 0, // Sin animación al reiniciar
          });
        }, 3000);
      }
    };

    // Suscribirse al evento select
    api.on("select", onSelect);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Encabezado de la sección */}
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge variant="outline">Nuestra Marca</Badge>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                Geanet Internet
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Diferentes versiones de nuestra identidad corporativa para diversos usos.
              </p>
            </div>
          </div>

          {/* Carrusel de logos */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
              Variaciones de logotipo
            </h3>
            <div className="relative w-full lg:col-span-4 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
              <Carousel 
                setApi={setApi} 
                className="w-full"
                opts={{
                  align: "center",
                  loop: true,
                  skipSnaps: false,
                  dragFree: true,
                  containScroll: false,
                }}
              >
                <CarouselContent>
                  {/* Duplicamos los elementos para un efecto infinito más suave */}
                  {[...Array(3)].map((_, set) => (
                    BRAND_LOGOS.map((logo, index) => (
                      <CarouselItem
                        key={`${set}-${index}`}
                        className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-4"
                      >
                        <div className="flex items-center justify-center h-24 md:h-32 p-4 transition-all duration-300 hover:scale-110 cursor-pointer group">
                          <div className="relative w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                            <Image
                              src={`/Imagen%20Corporativa/${logo.file}`}
                              alt={logo.alt}
                              fill
                              className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                            />
                          </div>
                        </div>
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

export default ClientsCarousel; 