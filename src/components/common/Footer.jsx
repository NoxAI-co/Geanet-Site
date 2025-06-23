import Link from "next/link";

/**
 * Footer Component
 * 
 * Este componente implementa el pie de página del sitio.
 * Incluye enlaces de navegación, información de contacto y redes sociales.
 * 
 * Características:
 * - Enlaces de navegación agrupados
 * - Información de contacto
 * - Enlaces a redes sociales
 * - Diseño responsivo
 * 
 * @TODO:
 * - Implementar newsletter
 * - Añadir mapa del sitio
 * - Implementar modo oscuro
 * - Añadir enlaces a políticas
 * - Implementar selección de idioma
 */

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto">
        <div className="grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna de información */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Geanet</h3>
            <p className="text-sm text-muted-foreground">
              Soluciones tecnológicas innovadoras para impulsar tu negocio.
            </p>
          </div>

          {/* Columna de productos */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Productos</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/productos/desarrollo"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Desarrollo Web
              </Link>
              <Link
                href="/productos/apps"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Aplicaciones Móviles
              </Link>
              <Link
                href="/productos/consultoria"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Consultoría IT
              </Link>
              <Link
                href="/productos/cloud"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Servicios Cloud
              </Link>
            </nav>
          </div>

          {/* Columna de empresa */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Empresa</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/nosotros"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/empleos"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Empleos
              </Link>
              <Link
                href="/prensa"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Prensa
              </Link>
            </nav>
          </div>

          {/* Columna de soporte */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Soporte</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/contacto"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
              <Link
                href="/ayuda"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Centro de Ayuda
              </Link>
              <Link
                href="/status"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Estado del Sistema
              </Link>
              <Link
                href="/documentacion"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentación
              </Link>
            </nav>
          </div>
        </div>

        {/* Pie de página con copyright */}
        <div className="flex flex-col gap-4 border-t py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Geanet. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4">
            <Link
              href="/privacidad"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Términos
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 