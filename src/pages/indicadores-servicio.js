import Head from 'next/head';
import Layout from '@/components/Layout';
import { SERVICE_INDICATORS, COMPANY_INFO } from '@/config/project-config';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Clock, Users, Wifi, Shield, Headphones } from 'lucide-react';

const getIconForIndicator = (indicator) => {
  if (indicator.includes('Velocidad')) return <Wifi className="w-5 h-5" />;
  if (indicator.includes('instalación')) return <Clock className="w-5 h-5" />;
  if (indicator.includes('PQRS')) return <Headphones className="w-5 h-5" />;
  if (indicator.includes('satisfacción')) return <Users className="w-5 h-5" />;
  if (indicator.includes('Disponibilidad')) return <Shield className="w-5 h-5" />;
  if (indicator.includes('soporte')) return <Headphones className="w-5 h-5" />;
  return <BarChart3 className="w-5 h-5" />;
};

const getColorForIndicator = (index) => {
  const colors = [
    'border-l-blue-500',
    'border-l-green-500', 
    'border-l-orange-500',
    'border-l-purple-500',
    'border-l-red-500',
    'border-l-teal-500'
  ];
  return colors[index % colors.length];
};

export default function IndicadoresServicio() {
  return (
    <>
      <Head>
        <title>Indicadores de Servicio - {COMPANY_INFO.name}</title>
        <meta name="description" content="Conoce nuestros indicadores de calidad de servicio: velocidad real vs contratada, tiempos de instalación, respuesta PQRS, satisfacción del cliente y disponibilidad de red." />
        <meta name="keywords" content="indicadores servicio, calidad internet, velocidad real, tiempo instalación, PQRS, satisfacción cliente, disponibilidad red" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://geanet.com.co/indicadores-servicio" />
      </Head>
      <Layout>
        <div className="pt-4">
          <div className="w-full pb-8">
            <div className="container mx-auto">
              {/* Encabezado de la sección */}
              <div className="flex text-center justify-center items-center gap-4 flex-col pt-6">
                <Badge className="bg-primary text-white">📊 Indicadores de Calidad</Badge>
                <div className="flex gap-3 flex-col">
                  <h1 className="text-3xl md:text-4xl tracking-tighter max-w-3xl text-center font-regular">
                    Indicadores de Servicio
                  </h1>
                  <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                    Conoce nuestros estándares de calidad y metas trimestrales para brindarte el mejor servicio de internet.
                  </p>
                </div>
              </div>

              {/* Grid de indicadores */}
              <div className="grid gap-6 pt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {SERVICE_INDICATORS.map((indicator, index) => (
                  <Card key={index} className={`border-l-4 ${getColorForIndicator(index)} hover:shadow-lg transition-shadow duration-200`}>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {getIconForIndicator(indicator.indicator)}
                        </div>
                        {indicator.indicator}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Meta Trimestral:</span>
                        <span className="font-bold text-lg text-primary">{indicator.target}</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Observación:</span> {indicator.observation}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Información adicional */}
              <div className="mt-10 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-4">Compromiso con la Calidad</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    En {COMPANY_INFO.name}, monitoreamos constantemente estos indicadores para garantizar 
                    que recibas el mejor servicio de internet por fibra óptica. Nuestro compromiso es mantener 
                    y superar estas metas para tu completa satisfacción.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-medium mb-1">Monitoreo Continuo</h3>
                      <p className="text-sm text-muted-foreground">
                        Medición constante de nuestros servicios
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-medium mb-1">Transparencia Total</h3>
                      <p className="text-sm text-muted-foreground">
                        Información clara y accesible para nuestros usuarios
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-medium mb-1">Mejora Continua</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimización constante basada en tu retroalimentación
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
} 