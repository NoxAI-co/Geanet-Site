import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  const menuItems = [
    { href: '/', label: 'Inicio' },
    {
      href: '#servicios',
      label: 'Servicios',
      submenu: [
        { href: '#consultoria', label: 'Consultoría IT' },
        { href: '#desarrollo', label: 'Desarrollo de Software' },
        { href: '#cloud', label: 'Servicios Cloud' },
      ],
    },
    { href: '#faq', label: 'Formulario PQRS' },
    { href: '#normatividad', label: 'Normatividad' },
    { href: '#nosotros', label: 'Sobre Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80 // Altura del header + un poco de espacio
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setIsMenuOpen(false)
  }

  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === href
    }
    return router.pathname.startsWith(href)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" onClick={(e) => handleClick(e, '/')} className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Geanet Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex md:items-center md:space-x-1">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    item.disabled ? 'opacity-50 cursor-not-allowed' : ''
                  } ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </a>
                
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) => handleClick(e, subItem.href)}
                          className={`block px-4 py-2 text-sm ${
                            isActive(subItem.href)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">
              {isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            </span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      item.disabled ? 'opacity-50 cursor-not-allowed' : ''
                    } ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) => handleClick(e, subItem.href)}
                          className={`block px-3 py-2 rounded-md text-sm font-medium ${
                            isActive(subItem.href)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 