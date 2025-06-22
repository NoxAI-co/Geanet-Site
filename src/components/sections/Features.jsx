import { Code2, Rocket, Shield, Zap, Cloud, Laptop, Headphones } from "lucide-react";
import { Badge } from "../ui/badge";

/**
 * Sección de Servicios y Beneficios
 * 
 * Presenta nuestros servicios principales y sus beneficios
 * utilizando un diseño visual que se adapta a diferentes dispositivos.
 */

// Listado de servicios principales
const servicios = [
  {
    id: "consultoria",
    titulo: "Consultoría IT",
    descripcion: "Asesoramiento experto para optimizar tus procesos tecnológicos y tomar decisiones estratégicas.",
    icono: <Headphones className="w-4 h-4" />,
    caracteristicas: [
      "Análisis de infraestructura",
      "Optimización de procesos",
      "Planificación estratégica",
      "Auditorías de seguridad"
    ]
  },
  {
    id: "desarrollo",
    titulo: "Desarrollo de Software",
    descripcion: "Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    icono: <Laptop className="w-4 h-4" />,
    caracteristicas: [
      "Aplicaciones web y móviles",
      "Software empresarial",
      "Integraciones API",
      "Mantenimiento y soporte"
    ]
  },
  {
    id: "cloud",
    titulo: "Servicios Cloud",
    descripcion: "Soluciones en la nube escalables y seguras para impulsar tu transformación digital.",
    icono: <Cloud className="w-4 h-4" />,
    caracteristicas: [
      "Migración a la nube",
      "Arquitectura cloud",
      "Optimización de costos",
      "Seguridad cloud"
    ]
  }
];

// Listado de beneficios adicionales
const beneficios = [
  {
    titulo: "Alto Rendimiento",
    descripcion: "Aplicaciones optimizadas para ofrecer la mejor experiencia de usuario y velocidad.",
    icono: <Zap className="w-4 h-4" />,
  },
  {
    titulo: "Seguridad Avanzada",
    descripcion: "Implementación de las mejores prácticas de seguridad para proteger tus datos.",
    icono: <Shield className="w-4 h-4" />,
  },
  {
    titulo: "Escalabilidad",
    descripcion: "Diseñado para crecer con tu negocio, adaptándose a tus necesidades futuras.",
    icono: <Rocket className="w-4 h-4" />,
  },
  {
    titulo: "Desarrollo Ágil",
    descripcion: "Metodologías ágiles para entregar valor de forma rápida y continua.",
    icono: <Code2 className="w-4 h-4" />,
  },
];

const Features = () => {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        {/* Encabezado de la sección */}
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Nuestros Servicios</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Soluciones integrales para tu empresa
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Ofrecemos un conjunto completo de servicios tecnológicos diseñados para 
              impulsar el éxito de tu empresa en la era digital.
            </p>
          </div>

          {/* Servicios principales */}
          <div className="grid pt-20 text-left grid-cols-1 md:grid-cols-3 w-full gap-8">
            {servicios.map((servicio) => (
              <div key={servicio.id} id={servicio.id} className="flex flex-col gap-6 p-6 rounded-xl border bg-card">
                {/* Ícono del servicio */}
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary text-white">
                  {servicio.icono}
                </div>
                {/* Información del servicio */}
                <div>
                  <h3 className="text-2xl font-medium mb-2">{servicio.titulo}</h3>
                  <p className="text-muted-foreground">{servicio.descripcion}</p>
                </div>
                {/* Características del servicio */}
                <ul className="space-y-2">
                  {servicio.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Beneficios adicionales */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl tracking-tighter text-center font-regular mb-12">
              Beneficios que nos distinguen
            </h3>
            <div className="grid text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
              {beneficios.map((beneficio) => (
                <div key={beneficio.titulo} className="flex flex-col gap-4">
                  {/* Ícono del beneficio */}
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {beneficio.icono}
                  </div>
                  {/* Información del beneficio */}
                  <div>
                    <h4 className="text-xl font-medium">{beneficio.titulo}</h4>
                    <p className="text-muted-foreground mt-2">{beneficio.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 