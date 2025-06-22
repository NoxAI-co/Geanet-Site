"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel debe usarse dentro de un <Carousel />");
  }
  return context;
}

const Carousel = React.forwardRef(
  ({ orientation = "horizontal", setApi, className, children, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: "start",
      loop: true,
      direction: orientation,
    });

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api) => {
      if (!api) return;

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    React.useEffect(() => {
      if (!emblaApi) return;

      onSelect(emblaApi);
      emblaApi.on("select", () => onSelect(emblaApi));
      emblaApi.on("reInit", () => onSelect(emblaApi));
      setApi?.(emblaApi);
    }, [emblaApi, onSelect, setApi]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: emblaRef,
          api: emblaApi,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div ref={ref} className={cn("flex", className)} {...props} />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselContent, CarouselItem }; 