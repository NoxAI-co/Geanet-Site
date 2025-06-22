import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

/**
 * Componente FAQ2 - Sección de preguntas frecuentes
 * 
 * Este componente muestra una sección de preguntas frecuentes con:
 * - Encabezado con título y descripción
 * - Botón de contacto
 * - Lista de preguntas frecuentes en formato acordeón
 * 
 * @returns {JSX.Element} Sección completa de FAQs
 */
const FAQ2 = () => {
  const faqs = [
    {
      pregunta: "¿Qué servicios ofrecen?",
      respuesta: "Ofrecemos una plataforma integral para la gestión de pequeñas y medianas empresas, incluyendo herramientas de comercio electrónico, gestión de inventario, facturación y análisis de datos en tiempo real."
    },
    {
      pregunta: "¿Cómo puedo empezar a usar la plataforma?",
      respuesta: "Comenzar es muy sencillo: selecciona el plan que mejor se adapte a tus necesidades, regístrate en nuestra plataforma y nuestro equipo te guiará durante todo el proceso de configuración inicial."
    },
    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta: "Aceptamos múltiples métodos de pago incluyendo tarjetas de crédito/débito, transferencias bancarias y PayPal. Los pagos se procesan de manera segura y puedes elegir la opción que mejor te convenga."
    },
    {
      pregunta: "¿Ofrecen soporte técnico?",
      respuesta: "Sí, todos nuestros planes incluyen soporte técnico. El nivel de soporte varía según el plan: desde soporte por correo electrónico en horario laboral hasta atención 24/7 para planes empresariales."
    },
    {
      pregunta: "¿Puedo cambiar de plan más adelante?",
      respuesta: "Por supuesto, puedes actualizar o cambiar tu plan en cualquier momento según las necesidades de tu negocio. El cambio se hace de manera sencilla y sin interrupciones en tu servicio."
    },
    {
      pregunta: "¿Qué tan segura es la plataforma?",
      respuesta: "La seguridad es nuestra prioridad. Utilizamos encriptación de nivel bancario, realizamos copias de seguridad regulares y cumplimos con los estándares más altos de protección de datos y privacidad."
    },
    {
      pregunta: "¿Ofrecen capacitación para usar la plataforma?",
      respuesta: "Sí, proporcionamos recursos completos de capacitación incluyendo tutoriales en video, documentación detallada y webinars regulares. Además, nuestro equipo de soporte está disponible para resolver cualquier duda."
    },
    {
      pregunta: "¿Puedo probar la plataforma antes de suscribirme?",
      respuesta: "Sí, ofrecemos una prueba gratuita de 14 días con acceso completo a todas las funcionalidades. No requerimos tarjeta de crédito para comenzar la prueba."
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge variant="outline">Preguntas Frecuentes</Badge>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                ¿Tienes dudas? ¡Estamos aquí para ayudarte!
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma.
                Si no encuentras lo que buscas, no dudes en contactarnos.
              </p>
            </div>
            <div>
              <Button className="gap-4" variant="outline">
                ¿Más preguntas? Contáctanos <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="max-w-3xl w-full mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={"faq-" + index}>
                  <AccordionTrigger>
                    {faq.pregunta}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.respuesta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ2; 