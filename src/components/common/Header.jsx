"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

/**
 * Header Component
 * 
 * Este componente implementa la barra de navegación principal del sitio.
 * Incluye un menú responsivo que se adapta a dispositivos móviles y desktop.
 * 
 * Características:
 * - Menú hamburguesa para móviles
 * - Navegación principal
 * - Botones de llamada a la acción
 * - Diseño responsivo
 * 
 * @TODO:
 * - Implementar animaciones de transición
 * - Añadir soporte para submenús
 * - Implementar búsqueda
 * - Añadir indicador de página activa
 * - Implementar modo oscuro
 */

const Header = () => {
  // Estado para controlar la visibilidad del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex gap-6 items-center">
            <Link href="/" className="font-semibold">
              Geanet
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/servicios"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Botones de acción Desktop */}
          <div className="hidden md:flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Iniciar sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/registro">Registrarse</Link>
            </Button>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden"
          >
            <Menu className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`} />
            <X className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`} />
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="flex flex-col gap-4 p-4">
              <Link
                href="/servicios"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
              <div className="flex flex-col gap-4 pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link href="/login">Iniciar sesión</Link>
                </Button>
                <Button asChild>
                  <Link href="/registro">Registrarse</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 