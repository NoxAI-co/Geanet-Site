const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TODO: Agregar logo y descripción de la empresa */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Geanet</h3>
            <p className="text-gray-600">
              Soluciones tecnológicas para tu empresa
            </p>
          </div>

          {/* TODO: Agregar enlaces de contacto */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@geanet.com</li>
              <li>Dirección: Tu dirección aquí</li>
            </ul>
          </div>

          {/* TODO: Agregar redes sociales */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {/* Placeholder para íconos de redes sociales */}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Geanet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 