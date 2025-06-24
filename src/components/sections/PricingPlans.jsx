import { Check, MoveRight, Wifi, Shield, Headphones } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { SERVICES, formatPrice, CONTACT } from '@/config/project-config';

/**
 * Pricing Section Component - Planes de Internet Geanet
 * 
 * Muestra los planes de internet simétrico por fibra óptica disponibles,
 * con precios reales y características específicas de Geanet.
 * 
 * Características:
 * - Planes de fibra óptica simétrica (50/50, 100/100, 200/200, 300/300 Mbps)
 * - Precios reales de Geanet
 * - Información de instalación y servicios adicionales
 * - Diseño responsivo con destaque del plan más popular
 * - Integración con WhatsApp para contacto directo
 */

const PricingPlans = () => {
  const handleContactClick = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre los planes de internet de Geanet. ¿Podrían brindarme más información?");
    window.open(`https://wa.me/57${CONTACT.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50" id="servicios">
      <div className="container mx-auto">
        {/* Encabezado de la sección */}
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge className="bg-accent text-white">Planes de Internet</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Internet Simétrico por Fibra Óptica
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Velocidades simétricas de subida y bajada. Tecnología de punta para hogares y empresas.
            </p>
          </div>
        </div>

        {/* Grid de planes de internet */}
        <div className="grid gap-8 pt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.INTERNET.map((plan, index) => (
            <Card key={index} className={`relative ${index === 1 ? 'border-2 border-accent shadow-lg scale-105' : ''}`}>
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-white px-4 py-1">Más Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">
                  {index === 0 && "Ideal para navegación básica y streaming"}
                  {index === 1 && "Perfecto para familias y teletrabajo"}
                  {index === 2 && "Para empresas y usuarios intensivos"}
                  {index === 3 && "Máximo rendimiento para grandes empresas"}
                </CardDescription>
                <div className="flex flex-col items-center gap-2 py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">{formatPrice(plan.price)}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">/mes</span>
                  <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                    <Wifi className="w-4 h-4 text-accent" />
                    <span className="font-semibold text-accent">{plan.speed}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <div className="flex flex-col">
                      <p className="font-medium">Internet Simétrico</p>
                      <p className="text-muted-foreground text-sm">
                        Misma velocidad de subida y bajada
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <div className="flex flex-col">
                      <p className="font-medium">Fibra Óptica</p>
                      <p className="text-muted-foreground text-sm">
                        Tecnología de última generación
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <div className="flex flex-col">
                      <p className="font-medium">Soporte 24/7</p>
                      <p className="text-muted-foreground text-sm">
                        Atención técnica personalizada
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                    <div className="flex flex-col">
                      <p className="font-medium">Sin permanencia</p>
                      <p className="text-muted-foreground text-sm">
                        Flexibilidad total en tu contrato
                      </p>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleContactClick}
                  className={`gap-2 w-full ${index === 1 ? 'bg-accent hover:bg-accent/90' : ''}`}
                  variant={index === 1 ? 'default' : 'outline'}
                >
                  Contratar ahora <MoveRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Instalación */}
          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                Instalación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Pago de contado:</span>
                  <span className="font-semibold">{formatPrice(SERVICES.INSTALLATION.oneTime.price)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pago diferido:</span>
                  <span className="font-semibold">{formatPrice(SERVICES.INSTALLATION.monthly.price)} x 12 meses</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Televisión */}
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                Servicios Adicionales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>TV HD (2 televisores):</span>
                  <span className="font-semibold">+{formatPrice(SERVICES.ADDITIONAL.tv.price)}/mes</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Protección contra virus y bloqueo de pornografía disponible
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="border-l-4 border-l-primary md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-primary" />
                ¿Necesitas ayuda?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Nuestro equipo está listo para ayudarte a elegir el plan perfecto.
              </p>
              <Button onClick={handleContactClick} variant="outline" className="w-full gap-2">
                <MoveRight className="w-4 h-4" />
                Contactar por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans; 