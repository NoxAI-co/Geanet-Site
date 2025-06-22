import Hero from "@/components/blocks/Hero";
import Features from "@/components/blocks/Features";
import Feature1 from "@/components/blocks/Feature1";
import Pricing1 from "@/components/blocks/Pricing1";

/**
 * HomeContainer - Contenedor principal de la página de inicio
 * 
 * Este componente organiza y presenta las secciones principales de la página de inicio:
 * - Hero: Banner principal con mensaje destacado
 * - Features: Sección de características generales
 * - Feature1: Sección de característica destacada
 * - Pricing1: Sección de planes y precios
 * 
 * La estructura está diseñada para presentar la información de manera
 * clara y atractiva, siguiendo un flujo natural de lectura.
 * 
 * @returns {JSX.Element} Contenedor con todas las secciones de la página de inicio
 */
const HomeContainer = () => {
  return (
    <>
      <Hero />
      <Features />
      <Feature1 />
      <Pricing1 />
    </>
  );
};

export default HomeContainer; 