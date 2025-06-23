"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

/**
 * WhatsApp Button Component
 * 
 * Este componente implementa un botón flotante de WhatsApp
 * que permite a los usuarios contactar rápidamente al soporte.
 * 
 * Características:
 * - Botón flotante fijo
 * - Animación al hover
 * - Enlace directo a WhatsApp
 * - Diseño responsivo
 * 
 * @TODO:
 * - Implementar ventana de chat
 * - Añadir mensaje predefinido
 * - Implementar horario de atención
 * - Añadir analytics de clicks
 * - Implementar múltiples agentes
 */

const WhatsAppButton = () => {
  // Número de WhatsApp y mensaje predefinido
  const phoneNumber = "1234567890";
  const message = "¡Hola! Me gustaría obtener más información sobre sus servicios.";

  // URL de WhatsApp con el número y mensaje
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      className="fixed bottom-4 right-4 z-50 rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </Button>
  );
};

export default WhatsAppButton; 