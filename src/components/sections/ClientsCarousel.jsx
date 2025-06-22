"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";

const ClientsCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

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
    <div className="w-full py-20 lg:py-40 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Encabezado de la sección */}
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge variant="outline">Nuestros Clientes</Badge>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                Empresas que confían en nosotros
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Trabajamos con empresas líderes en diferentes sectores, ayudándoles a alcanzar sus objetivos tecnológicos.
              </p>
            </div>
          </div>

          {/* Carrusel de logos */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
              Nuestros clientes destacados
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
                  skipSnaps: false,
                  dragFree: true,
                  containScroll: false,
                }}
              >
                <CarouselContent>
                  {/* Duplicamos los elementos para un efecto infinito más suave */}
                  {[...Array(2)].map((_, set) => (
                    Array.from({ length: 12 }).map((_, index) => (
                      <CarouselItem
                        key={`${set}-${index}`}
                        className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 pl-4"
                      >
                        <div className="flex rounded-xl aspect-square bg-white shadow-sm items-center justify-center p-6 m-2 transition-all duration-300 hover:shadow-md">
                          <span className="text-sm font-medium text-gray-600">Logo {index + 1}</span>
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