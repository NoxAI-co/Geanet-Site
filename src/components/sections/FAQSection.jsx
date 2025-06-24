import { Check, PhoneCall } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PQRS, REGULATIONS, SERVICE_INDICATORS, OFFICIAL_LINKS, CONTACT } from '@/config/project-config';
import { FileText, Scale, BarChart3, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

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

const PQRSSection = () => {
  const handlePQRSClick = () => {
    const message = encodeURIComponent("Hola, necesito presentar una PQRS. ¿Podrían orientarme sobre el proceso?");
    window.open(`https://wa.me/57${CONTACT.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50" id="pqrs">
      <div className="container mx-auto">
        {/* Encabezado de la sección */}
        <div className="flex text-center justify-center items-center gap-4 flex-col mb-16">
          <Badge className="bg-primary text-white">PQRS y Normatividad</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-4xl text-center font-regular">
              Transparencia y Cumplimiento Normativo
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center">
              Conoce tus derechos, nuestros procesos y el marco regulatorio que rige nuestros servicios.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* PQRS */}
          <div>
            <Card className="border-l-4 border-l-accent mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-accent" />
                  Formulario PQRS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  ¿Tienes una Petición, Queja o Reclamo? Estamos aquí para ayudarte.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span><strong>Tiempo de respuesta:</strong> {PQRS.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Scale className="w-5 h-5 text-secondary" />
                    <span><strong>Apelación ante:</strong> {PQRS.appealEntity}</span>
                  </div>
                </div>

                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="pqrs-info">
                    <AccordionTrigger>¿Qué información necesito proporcionar?</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {PQRS.requiredFields.map((field, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span>{field}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="pqrs-types">
                    <AccordionTrigger>Tipos de solicitudes</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-3">
                        {PQRS.types.map((type, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <strong>{type}</strong>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handlePQRSClick}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Presentar PQRS
                  </button>
                  <a 
                    href={`mailto:${CONTACT.emails.customerService}`}
                    className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Enviar por correo
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Normatividad */}
          <div>
            <Card className="border-l-4 border-l-secondary mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-secondary" />
                  Marco Normativo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Cumplimos con todas las disposiciones regulatorias aplicables a los servicios de telecomunicaciones.
                </p>
                
                <Accordion type="single" collapsible>
                  <AccordionItem value="crc-regulations">
                    <AccordionTrigger>Regulaciones CRC</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {REGULATIONS.filter(reg => reg.name.includes('CRC')).map((regulation, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <strong className="text-secondary">{regulation.name}</strong>
                            <p className="text-sm text-muted-foreground mt-1">{regulation.description}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="general-laws">
                    <AccordionTrigger>Leyes Generales</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {REGULATIONS.filter(reg => reg.name.includes('Ley')).map((regulation, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <strong className="text-primary">{regulation.name}</strong>
                            <p className="text-sm text-muted-foreground mt-1">{regulation.description}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="other-regulations">
                    <AccordionTrigger>Otras Regulaciones</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {REGULATIONS.filter(reg => !reg.name.includes('CRC') && !reg.name.includes('Ley')).map((regulation, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <strong className="text-accent">{regulation.name}</strong>
                            <p className="text-sm text-muted-foreground mt-1">{regulation.description}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Enlaces Oficiales</h4>
                  <div className="space-y-2">
                    <a 
                      href={OFFICIAL_LINKS.crc} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Comisión de Regulación de Comunicaciones (CRC)
                    </a>
                    <a 
                      href={OFFICIAL_LINKS.mintic} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ministerio de Tecnologías de la Información (MinTIC)
                    </a>
                    <a 
                      href={OFFICIAL_LINKS.sic} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Superintendencia de Industria y Comercio (SIC)
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Indicadores de Servicio */}
        <div className="mt-16" id="normatividad">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                Indicadores de Calidad del Servicio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Nos comprometemos con estándares de calidad medibles y transparentes.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                {SERVICE_INDICATORS.map((indicator, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary">{indicator.indicator}</h4>
                      <span className="text-lg font-bold text-accent">{indicator.target}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{indicator.observation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PQRSSection; 