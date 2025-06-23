"use client";

import { CalendarIcon, Check, MoveRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

/**
 * Contact Form Section Component
 * 
 * Este componente implementa un formulario de contacto avanzado con selector
 * de fecha y carga de archivos. Utiliza varios componentes UI personalizados
 * para crear una experiencia de usuario fluida.
 * 
 * Características:
 * - Selector de fecha con calendario
 * - Formulario de contacto con validación
 * - Carga de archivos (CV)
 * - Diseño responsivo de dos columnas
 * - Lista de beneficios con iconos
 * 
 * @TODO:
 * - Implementar validación de formulario
 * - Añadir feedback visual al enviar
 * - Implementar límite de tamaño para archivos
 * - Conectar con un servicio de email
 * - Añadir reCAPTCHA
 * - Implementar guardado de borradores
 * - Añadir selección de zona horaria
 */

const Contact1 = () => {
  // Estado para manejar la fecha seleccionada
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-full py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Columna de información */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contacto</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Agenda una reunión con nosotros
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Descubre cómo podemos ayudarte a transformar tu negocio con soluciones tecnológicas innovadoras.
                </p>
              </div>
            </div>

            {/* Lista de beneficios */}
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fácil de usar</p>
                <p className="text-muted-foreground text-sm">
                  Interfaz intuitiva y proceso simplificado.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Rápido y confiable</p>
                <p className="text-muted-foreground text-sm">
                  Respuesta garantizada en menos de 24 horas.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Atención personalizada</p>
                <p className="text-muted-foreground text-sm">
                  Soluciones adaptadas a tus necesidades específicas.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="justify-center flex items-center">
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
              <p>Agenda una reunión</p>
              
              {/* Selector de fecha */}
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="date">Fecha</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Campos del formulario */}
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstname">Nombre</Label>
                <Input id="firstname" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastname">Apellido</Label>
                <Input id="lastname" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="resume">Adjuntar CV</Label>
                <Input id="resume" type="file" />
              </div>

              {/* Botón de envío */}
              <Button className="gap-4 w-full">
                Agendar reunión <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1; 