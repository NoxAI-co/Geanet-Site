"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Case2 = () => {
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

  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left text-gray-900">
            Empresas que confían en nosotros
          </h3>
          <div className="relative w-full col-span-1 lg:col-span-4">
            <div className="bg-gradient-to-r from-white via-white/0 to-white z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full pointer-events-none"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {logos.map((logo, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/6 pl-4"
                  >
                    <div className="flex rounded-lg aspect-square bg-gray-50 items-center justify-center p-4 transition-all hover:bg-gray-100">
                      <span className="text-sm text-gray-600">{logo}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case2; 