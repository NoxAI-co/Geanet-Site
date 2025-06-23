import { Check, PhoneCall } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

/**
 * FAQ Section Component
 * 
 * Este componente muestra una sección de preguntas frecuentes utilizando
 * un componente de acordeón para mostrar/ocultar las respuestas.
 * 
 * Características:
 * - Acordeón interactivo para preguntas/respuestas
 * - Botón de contacto para preguntas adicionales
 * - Diseño responsivo centrado
 * 
 * @TODO:
 * - Implementar búsqueda de preguntas
 * - Añadir categorías para las preguntas
 * - Implementar sistema de votos útil/no útil
 * - Conectar con un CMS para gestión de contenido
 * - Añadir analytics para tracking de preguntas más consultadas
 */

const FAQ2 = () => (
  <div className="w-full py-20">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        {/* Encabezado de la sección */}
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">Preguntas Frecuentes</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              ¿Tienes dudas sobre nuestros servicios?
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios y soluciones tecnológicas.
            </p>
          </div>
          {/* Botón de contacto */}
          <div>
            <Button className="gap-4" variant="outline">
              ¿Necesitas más información? Contáctanos <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Lista de preguntas frecuentes */}
        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Qué servicios ofrecen?
              </AccordionTrigger>
              <AccordionContent>
                Ofrecemos una amplia gama de servicios tecnológicos, incluyendo desarrollo de software a medida, 
                consultoría IT, implementación de soluciones cloud y servicios de transformación digital.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Cuánto tiempo toma implementar una solución?
              </AccordionTrigger>
              <AccordionContent>
                El tiempo de implementación varía según la complejidad del proyecto. Típicamente, 
                los proyectos pequeños pueden tomar de 2 a 4 semanas, mientras que los más complejos 
                pueden extenderse varios meses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Ofrecen soporte técnico continuo?
              </AccordionTrigger>
              <AccordionContent>
                Sí, proporcionamos soporte técnico continuo 24/7 para todos nuestros clientes, 
                asegurando que sus sistemas funcionen de manera óptima en todo momento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                ¿Cómo garantizan la seguridad de los datos?
              </AccordionTrigger>
              <AccordionContent>
                Implementamos las mejores prácticas de seguridad de la industria, incluyendo 
                encriptación de datos, autenticación de dos factores y monitoreo continuo de seguridad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                ¿Cuál es el proceso de inicio de un proyecto?
              </AccordionTrigger>
              <AccordionContent>
                Comenzamos con una consulta inicial gratuita, seguida de un análisis detallado 
                de requisitos, propuesta técnica y comercial, y planificación del proyecto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                ¿Trabajan con empresas de cualquier tamaño?
              </AccordionTrigger>
              <AccordionContent>
                Sí, trabajamos con empresas de todos los tamaños, desde startups hasta grandes 
                corporaciones, adaptando nuestras soluciones a las necesidades específicas de cada cliente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                ¿Qué metodologías de desarrollo utilizan?
              </AccordionTrigger>
              <AccordionContent>
                Utilizamos metodologías ágiles como Scrum y Kanban, lo que nos permite ser 
                flexibles y entregar valor de manera incremental a nuestros clientes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                ¿Ofrecen capacitación para los usuarios?
              </AccordionTrigger>
              <AccordionContent>
                Sí, proporcionamos capacitación completa para usuarios y administradores como 
                parte de nuestros servicios de implementación.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ2; 