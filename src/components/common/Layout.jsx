import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Layout Component
 * 
 * Este componente implementa la estructura base de todas las páginas.
 * Envuelve el contenido principal con el header y footer comunes.
 * 
 * Características:
 * - Header fijo
 * - Footer responsivo
 * - Botón flotante de WhatsApp
 * - Contenedor principal con padding
 * 
 * @TODO:
 * - Implementar transiciones de página
 * - Añadir barra de progreso
 * - Implementar modo oscuro
 * - Añadir breadcrumbs
 * - Implementar scroll to top
 */

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout; 