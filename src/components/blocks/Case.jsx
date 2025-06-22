"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const Case2 = () => {
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
    }, 3000);

    return () => clearInterval(interval);
  }, [api, current]);

  const logos = [
    "Empresa 1", "Empresa 2", "Empresa 3", "Empresa 4", "Empresa 5",
    "Empresa 6", "Empresa 7", "Empresa 8", "Empresa 9", "Empresa 10",
    "Empresa 11", "Empresa 12", "Empresa 13", "Empresa 14", "Empresa 15"
  ];

  return (
    <section className="w-full py-20 lg:py-40 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left text-gray-900">
            Empresas que confían en nosotros
          </h3>
          <div className="relative w-full col-span-1 lg:col-span-4">
            <div className="bg-gradient-to-r from-gray-50 via-transparent to-gray-50 z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full pointer-events-none"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {logos.map((logo, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/6 pl-4"
                  >
                    <div className="flex rounded-lg aspect-square bg-white shadow-sm border border-gray-100 items-center justify-center p-4 transition-all hover:shadow-md hover:border-gray-200">
                      <span className="text-sm text-gray-600 font-medium">{logo}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case2; 