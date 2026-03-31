import Head from 'next/head';
import Layout from '@/components/Layout';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_INFO } from '@/config/project-config';
import { Scale, Download, Shield, Users, FileText, AlertTriangle, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Normatividad() {
  
  const [isDownloading, setIsDownloading] = useState(false);

  // Función para manejar la descarga
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Crear enlace temporal para descarga
      const link = document.createElement('a');
      link.href = '/api/download-normativos';
      link.download = `geanet-documentos-normativos-${new Date().toISOString().split('T')[0]}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Simular tiempo de procesamiento mínimo
      setTimeout(() => {
        setIsDownloading(false);
      }, 3000);
    } catch (error) {
      console.error('Error al descargar:', error);
      setIsDownloading(false);
    }
  };
  
  // Documentos organizados por categorías - ENLACES LOCALES
  const resoluciones_crc = [
    {
      nombre: "RESOLUCIÓN CRC 4776 DE 2015",
      descripcion: "Condiciones de calidad del servicio",
      archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-4776-2015-condiciones-calidad.pdf",
      tamaño: "87 KB"
    },
    {
      nombre: "RESOLUCIÓN CRC 5299 DE 2018",
      descripcion: "Régimen de calidad del servicio de acceso a Internet",
      archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5299-2018-calidad-servicio.pdf",
      tamaño: "859 KB"
    },
    {
      nombre: "RESOLUCIÓN CRC 5300 DE 2018", 
      descripcion: "Metodología de medición de calidad y velocidades",
      archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5300-2018-medicion-calidad.pdf",
      tamaño: "327 KB"
    },
    {
      nombre: "RESOLUCIÓN CRC 5321 DE 2018",
      descripcion: "Normatividad técnica complementaria",
      archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5321-2018-normatividad-tecnica.pdf",
      tamaño: "8.5 MB"
    },
    {
      nombre: "RESOLUCIÓN CRC 5322 DE 2018",
      descripcion: "Regulaciones sobre publicidad y promociones",
      archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5322-2018-publicidad.pdf",
      tamaño: "4.7 MB"
    },
    {
      nombre: "RESOLUCIÓN CRC 5337 DE 2018",
      descripcion: "Régimen de protección de derechos de usuarios",
      archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5337-2018-atencion-usuario.pdf",
      tamaño: "515 KB"
    },
    {
      nombre: "RESOLUCIÓN CRC 5344 DE 2018",
      descripcion: "Regulaciones adicionales del sector telecomunicaciones",
      archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5344-2018-regulaciones-adicionales.pdf",
      tamaño: "2.8 MB"
    },
    {
      nombre: "RESOLUCIÓN CRC 5397 DE 2018",
      descripcion: "Regulaciones complementarias",
      archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5397-2018-regulaciones-complementarias.pdf",
      tamaño: "2.8 MB"
    }
  ];

  const leyes_republica = [
    {
      nombre: "LEY 679 DE 2001",
      descripcion: "Prevención de explotación, pornografía y turismo sexual infantil",
      archivo: "/documentos-normativos/leyes/ley-679-2001-prevencion-explotacion-infantil.pdf",
      tamaño: "52 KB"
    },
    {
      nombre: "LEY 1266 DE 2008",
      descripcion: "Ley Estatutaria de Habeas Data",
      archivo: "/documentos-normativos/leyes/ley-1266-2008-habeas-data.docx",
      tamaño: "28 KB"
    },
    {
      nombre: "LEY 1480 DE 2011",
      descripcion: "Estatuto del Consumidor - Normas de protección y defensa",
      archivo: "/documentos-normativos/leyes/ley-1480-2011-estatuto-consumidor.pdf",
      tamaño: "24 MB"
    }
  ];

  const decretos_gobierno = [
    {
      nombre: "DECRETO 90 DE 2018",
      descripcion: "Disposiciones generales del 18 de enero de 2018",
      archivo: "/documentos-normativos/decretos/decreto-90-2018-disposiciones-generales.pdf",
      tamaño: "253 KB"
    }
  ];

  const acuerdos_normativos = [
    {
      nombre: "ACUERDO 011 DE 2006",
      descripcion: "Normas técnicas y procedimientos específicos",
      archivo: "/documentos-normativos/acuerdos/acuerdo-011-2006-normas-tecnicas-procedimientos.pdf",
      tamaño: "115 KB"
    }
  ];

  const politicas_proteccion = [
    {
      nombre: "POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES",
      descripcion: "Políticas y procedimientos para protección de datos",
      archivo: "/documentos-normativos/politicas-proteccion/politica-proteccion-datos-personales.pdf",
      tamaño: "107 KB"
    }
  ];

  // Componente para renderizar cada documento
  const DocumentCard = ({ documento, colorClass, iconClass }) => (
    <a
      href={documento.archivo}
      target="_blank"
      rel="noopener noreferrer"
      className={`group p-4 border rounded-lg hover:shadow-md hover:border-${colorClass}-300 transition-all duration-200 bg-white`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className={`font-semibold text-${colorClass}-700 group-hover:text-${colorClass}-800 mb-2`}>
            {documento.nombre}
          </h4>
          <p className="text-sm text-muted-foreground mb-2">
            {documento.descripcion}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {documento.tamaño}
            </span>
          </div>
        </div>
        <Download className={`w-5 h-5 text-${colorClass}-500 group-hover:scale-110 transition-transform ml-3`} />
      </div>
    </a>
  );

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
        <div className="pt-20 w-full">
          <div className="container mx-auto px-4">
            
            {/* Encabezado */}
            <div className="text-center py-12">
              <Badge className="bg-primary text-white mb-6">⚖️ Marco Normativo</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                Normatividad y Cumplimiento Regulatorio
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Accede a toda la documentación normativa que rige nuestros servicios de telecomunicaciones. En {COMPANY_INFO.name} cumplimos estrictamente con todas las disposiciones legales y normativas vigentes.
              </p>
              
              {/* Estadísticas */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-blue-700">Resoluciones CRC</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-green-700">Leyes</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">1</div>
                  <div className="text-sm text-orange-700">Decreto</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">1</div>
                  <div className="text-sm text-purple-700">Acuerdo</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">1</div>
                  <div className="text-sm text-gray-700">Política</div>
                </div>
              </div>
            </div>

            {/* Resoluciones CRC */}
            <div className="py-12">
              <Card className="border-l-4 border-l-blue-500 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Scale className="w-7 h-7 text-blue-500" />
                    Resoluciones CRC - Comisión de Regulación de Comunicaciones
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Regulaciones específicas para proveedores de servicios de telecomunicaciones
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {resoluciones_crc.map((resolucion, index) => (
                      <DocumentCard 
                        key={index}
                        documento={resolucion}
                        colorClass="blue"
                        iconClass="Scale"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Leyes de la República */}
            <div className="py-8">
              <Card className="border-l-4 border-l-green-500 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <FileText className="w-7 h-7 text-green-500" />
                    Leyes de la República
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Marco legal general aplicable a servicios de telecomunicaciones
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {leyes_republica.map((ley, index) => (
                      <DocumentCard 
                        key={index}
                        documento={ley}
                        colorClass="green"
                        iconClass="FileText"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Decretos del Gobierno */}
            <div className="py-8">
              <Card className="border-l-4 border-l-orange-500 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Shield className="w-7 h-7 text-orange-500" />
                    Decretos del Gobierno
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Disposiciones gubernamentales aplicables al sector
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {decretos_gobierno.map((decreto, index) => (
                      <DocumentCard 
                        key={index}
                        documento={decreto}
                        colorClass="orange"
                        iconClass="Shield"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Acuerdos Normativos */}
            <div className="py-8">
              <Card className="border-l-4 border-l-purple-500 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Users className="w-7 h-7 text-purple-500" />
                    Acuerdos Normativos
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Acuerdos y convenios técnicos del sector
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {acuerdos_normativos.map((acuerdo, index) => (
                      <DocumentCard 
                        key={index}
                        documento={acuerdo}
                        colorClass="purple"
                        iconClass="Users"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Políticas de Protección */}
            <div className="py-8">
              <Card className="border-l-4 border-l-gray-500 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Shield className="w-7 h-7 text-gray-500" />
                    Políticas de Protección
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Políticas de protección de datos y privacidad
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {politicas_proteccion.map((politica, index) => (
                      <DocumentCard 
                        key={index}
                        documento={politica}
                        colorClass="gray"
                        iconClass="Shield"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Entidades Reguladoras */}
            <div className="py-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Scale className="w-7 h-7 text-primary" />
                    Entidades Reguladoras
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Enlaces directos a las entidades oficiales del sector telecomunicaciones
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    
                    <a 
                      href="https://www.crcom.gov.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <div className="text-center">
                        <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-blue-800 mb-2">CRC</h4>
                        <p className="text-sm text-blue-600">
                          Comisión de Regulación de Comunicaciones
                        </p>
                      </div>
                    </a>

                    <a 
                      href="https://www.mintic.gov.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <div className="text-center">
                        <FileText className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-green-800 mb-2">MinTIC</h4>
                        <p className="text-sm text-green-600">
                          Ministerio de Tecnologías de la Información
                        </p>
                      </div>
                    </a>

                    <a 
                      href="https://www.sic.gov.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="text-center">
                        <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-orange-800 mb-2">SIC</h4>
                        <p className="text-sm text-orange-600">
                          Superintendencia de Industria y Comercio
                        </p>
                      </div>
                    </a>

                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compromiso */}
            <div className="py-12">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
                <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Nuestro Compromiso
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  En {COMPANY_INFO.name} nos comprometemos al cumplimiento estricto de toda la normatividad aplicable. 
                  Todos los documentos están disponibles para descarga directa y consulta permanente de nuestros usuarios.
                  Mantenemos actualizados nuestros procesos conforme a las regulaciones vigentes.
                </p>
                
                {/* Descarga masiva */}
                <div className="mt-8 space-y-4">
                  <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors text-lg font-semibold"
                  >
                    {isDownloading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Preparando descarga...
                      </>
                    ) : (
                      <>
                        <Download className="w-6 h-6" />
                        Descargar Todos los Documentos (ZIP)
                      </>
                    )}
                  </button>
                  <p className="text-sm text-muted-foreground">
                    Descarga completa: 14 documentos organizados + índice detallado (~45 MB)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Layout>
    </>
  );
} 