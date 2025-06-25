"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Wifi, Zap } from "lucide-react";
import { Button } from "../ui/button";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LampContainer } from '../ui/lamp';
import { AuroraBackground } from '../ui/aurora-background';
import { COMPANY_INFO, CONTACT } from '@/config/project-config';
import Head from 'next/head';

/**
 * Hero Section - Pantalla Principal de Geanet Internet
 * 
 * Sección principal que presenta Geanet Internet como proveedor ISP especializado
 * en soluciones de conectividad simétrica por fibra óptica. Incluye información
 * corporativa real y llamadas a la acción hacia servicios y contacto.
 */

export default function Hero() {
  const router = useRouter();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Precargar imagen crítica
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [
        '/Imagen%20Corporativa/logo_icono.png'
      ].map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Resolver incluso en error para no bloquear
          img.src = src;
        });
      });
      
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  const handleContactClick = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre los planes de internet de Geanet. ¿Podrían brindarme información?");
    window.open(`https://wa.me/57${CONTACT.whatsapp}?text=${message}`, '_blank');
  };

  const handleServicesClick = () => {
    router.push('/servicios');
  };

  return (
    <>
      <Head>
        {/* Preload de imágenes críticas */}
        <link rel="preload" as="image" href="/Imagen%20Corporativa/logo_icono.png" />
      </Head>
      
      <div className="relative min-h-screen pt-16 pb-24">
        <AuroraBackground />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: imagesLoaded ? 1 : 0.5, y: 0 }}
          transition={{
            delay: 0.1, // Reducido de 0.3 a 0.1
            duration: 0.6, // Reducido de 0.8 a 0.6
            ease: "easeOut", // Cambiado de easeInOut a easeOut para más rapidez
          }}
          className="relative z-10 flex flex-col items-center justify-center gap-10 px-4 max-w-5xl mx-auto text-center min-h-[calc(100vh-10rem)]"
          id="inicio"
        >
          {/* Logo Container - Solo ícono centrado */}
          <div className="w-full flex items-center justify-center">
            <div className="w-40 h-40 flex items-center justify-center relative">
              {/* Placeholder mientras carga */}
              {!imagesLoaded && (
                <div className="absolute inset-0 bg-gray-100 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                </div>
              )}
              <img
                src="/Imagen%20Corporativa/logo_icono.png"
                alt="Logo Geanet Internet - Proveedor ISP de fibra óptica"
                width="160"
                height="160"
                className={`w-full h-full object-contain will-change-transform transition-opacity duration-300 ${
                  imagesLoaded ? 'animate-spin-slow opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                decoding="sync"
                onLoad={() => setImagesLoaded(true)}
                style={{ 
                  backfaceVisibility: 'hidden',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              />
            </div>
          </div>

          {/* Título principal */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Internet Simétrico
              </span>
              <br />
              <span className="text-primary">
                por Fibra Óptica
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            {/* Características destacadas */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <Wifi className="w-5 h-5 text-accent" />
                <span className="font-semibold text-primary">Velocidades Simétricas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-primary">Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Sin Permanencia</span>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 flex-1 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleServicesClick}
            >
              <Wifi className="w-5 h-5 mr-2" />
              Ver Planes
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 flex-1 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactar
            </Button>
          </div>

          {/* Información de contacto rápido */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <p className="text-sm text-gray-600 mb-2">¿Necesitas ayuda inmediata?</p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a 
                href={`tel:+57${CONTACT.phone}`}
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(604) {CONTACT.phone}</span>
              </a>
              <a 
                href={`https://wa.me/57${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                </svg>
                <span className="font-semibold">{CONTACT.whatsapp}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
} 