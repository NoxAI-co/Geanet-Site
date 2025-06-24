import Head from 'next/head';
import Layout from '@/components/Layout';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { REGULATIONS, SERVICE_INDICATORS, OFFICIAL_LINKS, COMPANY_INFO } from '@/config/project-config';
import { Scale, BarChart3, ExternalLink } from 'lucide-react';

export default function Normatividad() {
  return (
    <>
      <Head>
        <title>Normatividad - {COMPANY_INFO.name}</title>
        <meta name="description" content="Marco regulatorio y normatividad aplicable a los servicios de telecomunicaciones de Geanet Internet. CRC, MinTIC, SIC." />
        <meta name="keywords" content="normatividad telecomunicaciones, CRC, MinTIC, regulaciones internet, indicadores calidad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://geanet.com.co/normatividad" />
      </Head>
      <Layout>
        <div className="pt-16 w-full py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto">
            {/* Encabezado de la sección */}
            <div className="flex text-center justify-center items-center gap-4 flex-col mb-16">
              <Badge className="bg-primary text-white">Marco Normativo</Badge>
              <div className="flex gap-2 flex-col">
                <h1 className="text-3xl md:text-5xl tracking-tighter max-w-4xl text-center font-regular">
                  Normatividad y Cumplimiento Regulatorio
                </h1>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center">
                  Conoce el marco regulatorio que rige nuestros servicios de telecomunicaciones y nuestros indicadores de calidad.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Marco Normativo */}
              <div>
                <Card className="border-l-4 border-l-secondary mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Scale className="w-6 h-6 text-secondary" />
                      Regulaciones Aplicables
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Cumplimos con todas las disposiciones regulatorias aplicables a los servicios de telecomunicaciones en Colombia.
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
                  </CardContent>
                </Card>
              </div>

              {/* Enlaces Oficiales */}
              <div>
                <Card className="border-l-4 border-l-primary mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <ExternalLink className="w-6 h-6 text-primary" />
                      Enlaces Oficiales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Accede directamente a las entidades reguladoras y organismos de control del sector telecomunicaciones.
                    </p>
                    
                    <div className="space-y-4">
                      <a 
                        href={OFFICIAL_LINKS.crc} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors group"
                      >
                        <ExternalLink className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                        <div>
                          <h4 className="font-semibold text-secondary">CRC</h4>
                          <p className="text-sm text-muted-foreground">Comisión de Regulación de Comunicaciones</p>
                        </div>
                      </a>
                      
                      <a 
                        href={OFFICIAL_LINKS.mintic} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                          <h4 className="font-semibold text-primary">MinTIC</h4>
                          <p className="text-sm text-muted-foreground">Ministerio de Tecnologías de la Información</p>
                        </div>
                      </a>
                      
                      <a 
                        href={OFFICIAL_LINKS.sic} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <ExternalLink className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        <div>
                          <h4 className="font-semibold text-accent">SIC</h4>
                          <p className="text-sm text-muted-foreground">Superintendencia de Industria y Comercio</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Indicadores de Servicio */}
            <div className="mt-16">
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-accent" />
                    Indicadores de Calidad del Servicio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Nos comprometemos con estándares de calidad medibles y transparentes según las regulaciones vigentes.
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
      </Layout>
    </>
  );
} 