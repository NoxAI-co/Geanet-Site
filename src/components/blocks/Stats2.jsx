import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/**
 * Componente Stats2 - Sección de estadísticas y métricas
 * 
 * Este componente muestra estadísticas clave de la empresa en un diseño de cuadrícula,
 * incluyendo:
 * - Usuarios activos mensuales
 * - Usuarios activos diarios
 * - Ingresos mensuales recurrentes
 * - Costo por adquisición
 * 
 * Cada métrica incluye:
 * - Valor actual
 * - Porcentaje de cambio
 * - Indicador visual de tendencia
 * 
 * @returns {JSX.Element} Sección de estadísticas con diseño responsive
 */
const Stats2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Sección de texto introductorio */}
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Estadísticas</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              Crecimiento constante y sostenible
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Nuestro compromiso con la excelencia se refleja en nuestros números.
              Cada día más empresas confían en nuestras soluciones para optimizar
              sus operaciones y alcanzar sus objetivos.
            </p>
          </div>
        </div>

        {/* Grid de estadísticas */}
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            {/* Usuarios activos mensuales */}
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                500.000
                <span className="text-muted-foreground text-sm tracking-normal">
                  +20.1%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Usuarios activos mensuales
              </p>
            </div>

            {/* Usuarios activos diarios */}
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                20.105
                <span className="text-muted-foreground text-sm tracking-normal">
                  -2%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Usuarios activos diarios
              </p>
            </div>

            {/* Ingresos mensuales */}
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                $523.520
                <span className="text-muted-foreground text-sm tracking-normal">
                  +8%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Ingresos mensuales recurrentes
              </p>
            </div>

            {/* Costo por adquisición */}
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                $1052
                <span className="text-muted-foreground text-sm tracking-normal">
                  +2%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Costo por adquisición
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Stats2; 