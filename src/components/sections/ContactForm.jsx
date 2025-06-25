"use client";

import { CalendarIcon, Check, MoveRight, Phone } from "lucide-react";
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
                <Badge className="bg-primary text-white">Contacto</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Agenda una consulta sobre nuestros servicios
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  ¿Necesitas internet de alta velocidad? Contáctanos para conocer nuestros planes de fibra óptica simétrica.
                </p>
              </div>
            </div>

            {/* Lista de beneficios */}
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Internet Simétrico</p>
                <p className="text-muted-foreground text-sm">
                  Misma velocidad de subida y bajada por fibra óptica.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Respuesta rápida</p>
                <p className="text-muted-foreground text-sm">
                  Te contactamos en menos de 24 horas.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Soporte 24/7</p>
                <p className="text-muted-foreground text-sm">
                  Atención técnica todos los días del año.
                </p>
              </div>
            </div>
            
            {/* Información de contacto adicional */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
              <h4 className="text-lg font-semibold text-primary mb-4">Información de Contacto</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <div>
                    <p className="font-medium">Línea fija:</p>
                    <a href="tel:+576043222860" className="text-primary hover:text-accent">(604) 322-2860</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                  </svg>
                  <div>
                    <p className="font-medium">WhatsApp:</p>
                    <a href="https://wa.me/573113556324" className="text-primary hover:text-accent">311 355-6324</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-gray-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p className="font-medium">Dirección:</p>
                    <p className="text-gray-600">Calle 29b #84-09<br />Medellín, Antioquia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div>
                    <p className="font-medium">Email principal:</p>
                    <a href="mailto:contacto@geanet.com.co" className="text-primary hover:text-accent">contacto@geanet.com.co</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="justify-center flex items-center">
            <div className="rounded-md max-w-md w-full flex flex-col border p-10 gap-6">
              <p>Agenda una consulta sobre internet</p>
              
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
                <Label htmlFor="description">¿Qué servicio de internet te interesa?</Label>
                <textarea 
                  id="description" 
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Ejemplo: Internet para el hogar, plan empresarial, velocidad específica, zona de instalación..."
                />
              </div>

              {/* Botón de envío */}
              <Button className="gap-4 w-full text-white">
                Solicitar información <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1; 