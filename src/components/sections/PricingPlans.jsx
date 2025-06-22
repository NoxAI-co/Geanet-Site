import { Check, MoveRight } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

/**
 * Pricing Section Component
 * 
 * Este componente muestra los diferentes planes de precios disponibles.
 * Utiliza un diseño de tarjetas para mostrar las características y precios
 * de cada plan.
 * 
 * Características:
 * - Tarjetas de precios con diseño responsivo
 * - Lista de características por plan
 * - Botones de llamada a la acción
 * - Badges para destacar planes populares
 * 
 * @TODO:
 * - Implementar selector de facturación mensual/anual
 * - Añadir tooltips para explicar características
 * - Implementar comparativa de planes
 * - Añadir planes personalizados
 * - Implementar sistema de cupones
 * - Conectar con pasarela de pago
 */

const Pricing1 = () => {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        {/* Encabezado de la sección */}
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Precios</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              ¡Precios que tienen sentido!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Planes diseñados para adaptarse a las necesidades de tu negocio.
            </p>
          </div>
        </div>

        {/* Grid de planes de precios */}
        <div className="grid gap-8 pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Plan Básico */}
          <Card>
            <CardHeader>
              <CardTitle>Plan Básico</CardTitle>
              <CardDescription>
                Ideal para pequeñas empresas y startups
              </CardDescription>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$99</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 justify-start">
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Rápido y confiable</p>
                    <p className="text-muted-foreground text-sm">
                      Lo hemos hecho rápido y confiable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Soporte básico</p>
                    <p className="text-muted-foreground text-sm">
                      Soporte por correo electrónico en horario laboral.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Actualizaciones incluidas</p>
                    <p className="text-muted-foreground text-sm">
                      Acceso a todas las actualizaciones de la plataforma.
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="gap-4">
                Regístrate hoy <MoveRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Plan Pro */}
          <Card>
            <CardHeader>
              <CardTitle>Plan Pro</CardTitle>
              <CardDescription>
                Para empresas en crecimiento
              </CardDescription>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$199</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 justify-start">
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Todo lo del plan Básico</p>
                    <p className="text-muted-foreground text-sm">
                      Incluye todas las características del plan básico.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Soporte prioritario</p>
                    <p className="text-muted-foreground text-sm">
                      Soporte telefónico y por correo con respuesta prioritaria.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Funciones avanzadas</p>
                    <p className="text-muted-foreground text-sm">
                      Acceso a características premium y análisis avanzados.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="gap-4">
                Comienza ahora <MoveRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Plan Enterprise */}
          <Card>
            <CardHeader>
              <CardTitle>Plan Enterprise</CardTitle>
              <CardDescription>
                Soluciones personalizadas para grandes empresas
              </CardDescription>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">Personalizado</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 justify-start">
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Todo lo del plan Pro</p>
                    <p className="text-muted-foreground text-sm">
                      Incluye todas las características del plan pro.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Soporte 24/7</p>
                    <p className="text-muted-foreground text-sm">
                      Atención personalizada y soporte técnico dedicado.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col">
                    <p>Personalización total</p>
                    <p className="text-muted-foreground text-sm">
                      Soluciones adaptadas a tus necesidades específicas.
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="gap-4">
                Contacta con ventas <MoveRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing1; 