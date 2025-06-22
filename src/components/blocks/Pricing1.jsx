import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Componente Pricing1 - Sección de planes y precios
 * 
 * Este componente muestra una sección completa de precios con tres planes diferentes:
 * - Plan Básico: Para pequeñas empresas y startups
 * - Plan Crecimiento: Para empresas en expansión
 * - Plan Empresarial: Para grandes empresas con necesidades específicas
 * 
 * Cada plan incluye:
 * - Título y descripción
 * - Precio mensual
 * - Lista de características
 * - Botón de acción
 * 
 * @returns {JSX.Element} Sección completa de precios con tres tarjetas de planes
 */
const Pricing1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      {/* Encabezado de la sección */}
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Precios</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            ¡Precios que tienen sentido!
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Gestionar una pequeña empresa hoy en día ya es bastante difícil.
          </p>
        </div>

        {/* Grid de tarjetas de precios */}
        <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
          {/* Plan Básico */}
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Básico
                </span>
              </CardTitle>
              <CardDescription>
                Nuestro objetivo es agilizar el comercio de las PYMES, haciéndolo más fácil y rápido
                que nunca para todos y en todas partes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                {/* Precio */}
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$40</span>
                  <span className="text-sm text-muted-foreground">/ mes</span>
                </p>
                {/* Lista de características */}
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
                {/* Botón de acción */}
                <Button variant="outline" className="gap-4">
                  Regístrate hoy <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Plan Crecimiento - Plan destacado */}
          <Card className="w-full shadow-2xl rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Crecimiento
                </span>
              </CardTitle>
              <CardDescription>
                Ideal para empresas en crecimiento que necesitan más funcionalidades
                y soporte prioritario.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                {/* Precio */}
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$80</span>
                  <span className="text-sm text-muted-foreground">/ mes</span>
                </p>
                {/* Lista de características */}
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
                {/* Botón de acción destacado */}
                <Button className="gap-4">
                  Comienza ahora <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Plan Empresarial */}
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Empresarial
                </span>
              </CardTitle>
              <CardDescription>
                Solución personalizada para grandes empresas con necesidades
                específicas y soporte dedicado.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                {/* Precio personalizado */}
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">Personalizado</span>
                </p>
                {/* Lista de características */}
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Solución a medida</p>
                      <p className="text-muted-foreground text-sm">
                        Personalización completa según tus necesidades.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Soporte 24/7</p>
                      <p className="text-muted-foreground text-sm">
                        Atención dedicada las 24 horas, los 7 días de la semana.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Integración completa</p>
                      <p className="text-muted-foreground text-sm">
                        Integración con tus sistemas existentes y migración asistida.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Botón de contacto */}
                <Button variant="outline" className="gap-4">
                  Agenda una reunión <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing1; 