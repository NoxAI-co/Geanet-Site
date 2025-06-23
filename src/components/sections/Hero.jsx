"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Link from 'next/link';

/**
 * Pantalla Principal de Bienvenida
 * 
 * Esta sección es lo primero que ven los usuarios al entrar al sitio.
 * Contiene un título dinámico que cambia entre diferentes palabras
 * para mostrar los beneficios clave de nuestros servicios.
 */

const Hero = () => {
  // Palabras que describen nuestros servicios
  const palabrasRotativas = useMemo(
    () => ["innovadoras", "eficientes", "personalizadas", "escalables", "seguras"],
    []
  );

  // Índice de la palabra actual (0-4)
  const [indicePalabraActual, setIndicePalabraActual] = useState(0);

  // Rotación automática de palabras
  useEffect(() => {
    const intervalo = setTimeout(() => {
      setIndicePalabraActual(
        indicePalabraActual === palabrasRotativas.length - 1 ? 0 : indicePalabraActual + 1
      );
    }, 2000);
    return () => clearTimeout(intervalo);
  }, [indicePalabraActual, palabrasRotativas]);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        {/* Estructura principal de la pantalla de bienvenida */}
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* Botón de acceso rápido a servicios */}
          <div>
            <Button variant="secondary" size="sm" className="gap-4" asChild>
              <Link href="/servicios">
                Ver nuestros servicios <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Título principal con animación */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              {/* Texto estático */}
              <span className="text-indigo-600">Soluciones</span>
              {/* Área de animación de palabras */}
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {/* Sistema de animación de palabras */}
                {palabrasRotativas.map((palabra, indice) => (
                  <motion.span
                    key={indice}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 50,  // Intensidad del efecto rebote
                      damping: 10,    // Duración del rebote
                      mass: 0.75      // Peso de la animación
                    }}
                    animate={
                      indicePalabraActual === indice
                        ? { y: 0, opacity: 1 }                    // Palabra visible
                        : { y: indicePalabraActual > indice ? -150 : 150, opacity: 0 }  // Palabra oculta
                    }
                  >
                    {palabra}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Descripción de la empresa */}
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center">
              En Geanet, nos especializamos en proporcionar soluciones tecnológicas avanzadas 
              que impulsan el crecimiento y la eficiencia de tu negocio.
            </p>
          </div>

          {/* Botones principales de acción */}
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="/contacto">
                Agendar llamada <Phone className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" className="gap-4" asChild>
              <Link href="/nosotros">
                Conoce más <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 