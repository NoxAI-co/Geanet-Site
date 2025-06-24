import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { WEBSITE_SECTIONS } from '@/config/project-config'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Header = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Limpiar timeout al desmontar
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [dropdownTimeout])

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
    setIsMobileServicesOpen(false)
    setIsServicesDropdownOpen(false)
  }, [router.pathname])

  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === path
    }
    return router.pathname === path
  }

  const handleMobileMenuClick = () => {
    setIsMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  const handleMobileServicesToggle = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setIsServicesDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 200) // 200ms delay antes de cerrar
    setDropdownTimeout(timeout)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/Imagen%20Corporativa/logo_horizontal.svg"
              alt="Geanet Internet"
              width="160"
              height="48"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {WEBSITE_SECTIONS.map((section) => {
              if (section.name === 'Servicios') {
                return (
                  <div 
                    key={section.path}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                        isActive(section.path) || router.pathname === '/indicadores-servicio'
                          ? 'text-primary bg-primary/10 border border-primary/20'
                          : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {section.name}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {isServicesDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 animate-fade-in"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <Link
                          href="/servicios"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150 first:rounded-t-md"
                        >
                          📋 Planes
                        </Link>
                        <Link
                          href="/indicadores-servicio"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150 last:rounded-b-md"
                        >
                          📊 Indicadores de Servicio
                        </Link>
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={section.path}
                  href={section.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive(section.path)
                      ? 'text-primary bg-primary/10 border border-primary/20'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {section.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
          >
            <span className="sr-only">
              {isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            </span>
            <svg
              className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {WEBSITE_SECTIONS.map((section) => {
                if (section.name === 'Servicios') {
                  return (
                    <div key={section.path}>
                      <button
                        onClick={handleMobileServicesToggle}
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors duration-200 rounded-md"
                      >
                        <span>{section.name}</span>
                        {isMobileServicesOpen ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      {isMobileServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                          <Link
                            href="/servicios"
                            onClick={handleMobileMenuClick}
                            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                              router.pathname === '/servicios'
                                ? 'text-primary bg-primary/10 border border-primary/20'
                                : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                            }`}
                          >
                            📋 Planes
                          </Link>
                          <Link
                            href="/indicadores-servicio"
                            onClick={handleMobileMenuClick}
                            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                              router.pathname === '/indicadores-servicio'
                                ? 'text-primary bg-primary/10 border border-primary/20'
                                : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                            }`}
                          >
                            📊 Indicadores de Servicio
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={section.path}
                    href={section.path}
                    onClick={handleMobileMenuClick}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(section.path)
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {section.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 