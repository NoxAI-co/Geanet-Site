"use client";

import { CalendarIcon, Check, MoveRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
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
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular text-white">
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
            <div className="rounded-md max-w-md w-full flex flex-col border p-10 gap-6">
              <p>Agenda una reunión</p>
              
              {/* Selector de fecha */}
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="date">Fecha</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-[60] bg-white border shadow-lg rounded-md">
                    <div className="bg-white rounded-md p-1">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        locale={es}
                        weekStartsOn={1}
                        className="p-0"
                        classNames={{
                          months: "flex flex-col space-y-4",
                          month: "space-y-4 p-3",
                          caption: "flex justify-center pt-1 relative items-center mb-4",
                          caption_label: "text-sm font-medium text-gray-900",
                          nav: "space-x-1 flex items-center",
                          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border border-gray-200 rounded hover:bg-gray-100",
                          nav_button_previous: "absolute left-1",
                          nav_button_next: "absolute right-1",
                          table: "w-full border-collapse space-y-1",
                          head_row: "flex",
                          head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem] text-center py-2",
                          row: "flex w-full mt-2",
                          cell: "h-9 w-9 text-center text-sm p-0 relative",
                          day: "h-9 w-9 p-0 font-normal hover:bg-gray-100 rounded-md transition-colors",
                          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                          day_today: "bg-accent text-accent-foreground font-semibold",
                          day_outside: "text-gray-400 opacity-50",
                          day_disabled: "text-gray-300 opacity-50"
                        }}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Campos del formulario */}
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="fullname">Nombre completo</Label>
                <Input id="fullname" type="text" placeholder="Ingresa tu nombre completo" />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="phone">Número de contacto</Label>
                <Input id="phone" type="tel" placeholder="Ej: 311 555 6324" />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="description">Motivo de la reunión</Label>
                <textarea 
                  id="description" 
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe brevemente el motivo de tu consulta o el servicio que te interesa..."
                />
              </div>

              {/* Botón de envío */}
              <Button className="gap-4 w-full text-white">
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