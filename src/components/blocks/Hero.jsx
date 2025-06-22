import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["innovador", "eficiente", "confiable", "seguro", "inteligente"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-primary">Tu negocio necesita algo</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Gestionar una pequeña empresa hoy en día ya es bastante difícil. 
              Evita más complicaciones abandonando los métodos comerciales obsoletos 
              y tediosos. Nuestro objetivo es agilizar el comercio de las PYMES, 
              haciéndolo más fácil y rápido que nunca.
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Link href="/contacto">
              <Button variant="ghost" className="flex items-center gap-2 text-sm hover:bg-transparent hover:text-primary transition-colors">
                <PhoneCall className="w-4 h-4" />
                Agendar llamada
              </Button>
            </Link>
            <Link href="/nosotros">
              <Button className="flex items-center gap-2 bg-[#3b82f6] text-white hover:bg-[#3b82f6]/90 transition-colors rounded-full px-6 py-2">
                Conoce más
                <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 