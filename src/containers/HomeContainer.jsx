import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import ClientsCarousel from "@/components/sections/ClientsCarousel";
import PricingPlans from "@/components/sections/PricingPlans";
import FAQSection from "@/components/sections/FAQSection";
import ContactForm from "@/components/sections/ContactForm";

/**
 * Home Container Component
 * 
 * Este componente es el contenedor principal de la página de inicio.
 * Organiza y renderiza todas las secciones en el orden correcto.
 * 
 * Estructura de secciones:
 * 1. Hero - Presentación principal
 * 2. Features/Servicios - Características y servicios principales
 * 3. Stats - Estadísticas y métricas
 * 4. ClientsCarousel - Carrusel de clientes
 * 5. Normatividad - Marco regulatorio y normativas
 * 6. FAQSection - PQRS y preguntas frecuentes
 * 7. ContactForm - Formulario de contacto
 * 
 * Secciones pendientes:
 * - Sobre Nosotros: Pendiente de contenido del cliente
 */

const NormatividadSection = () => (
  <div className="w-full py-20 bg-gray-50">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl tracking-tighter font-regular mb-4">
            Marco Normativo
          </h2>
          <p className="text-lg text-muted-foreground">
            Cumplimos con todas las regulaciones y normativas aplicables al sector tecnológico.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-4">Protección de Datos</h3>
            <p className="text-muted-foreground mb-4">
              Cumplimos con la Ley 1581 de 2012 de Protección de Datos Personales y sus decretos reglamentarios.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Política de Tratamiento de Datos</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Registro de Bases de Datos</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-4">Seguridad Digital</h3>
            <p className="text-muted-foreground mb-4">
              Seguimos los lineamientos del CONPES 3854 de Seguridad Digital y estándares internacionales.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>ISO 27001</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>NIST Cybersecurity Framework</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-4">Comercio Electrónico</h3>
            <p className="text-muted-foreground mb-4">
              Cumplimos con la Ley 527 de 1999 de Comercio Electrónico y sus actualizaciones.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Validez Jurídica</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Firmas Digitales</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-4">Calidad del Servicio</h3>
            <p className="text-muted-foreground mb-4">
              Nos regimos por estándares internacionales de calidad en el desarrollo de software.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>ISO 9001</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>CMMI Nivel 3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SobreNosotrosSection = () => (
  <div className="w-full py-20">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl tracking-tighter font-regular">
          Sobre Nosotros
        </h2>
        <p className="text-xl text-muted-foreground">
          Contenido pendiente de ser proporcionado por el cliente.
        </p>
      </div>
    </div>
  </div>
);

const HomeContainer = () => {
  return (
    <div className="scroll-smooth">
      <section id="inicio">
        <Hero />
      </section>
      
      <section id="servicios">
        <Features />
      </section>
      
      <section id="stats">
        <Stats />
      </section>
      
      <section id="nosotros">
        <ClientsCarousel />
      </section>
      
      <section id="normatividad">
        <NormatividadSection />
      </section>
      
      <section id="precios">
        <PricingPlans />
      </section>
      
      <section id="faq">
        <FAQSection />
      </section>
      
      <section id="contacto">
        <ContactForm />
      </section>
    </div>
  );
};

export default HomeContainer; 