import { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

const Layout = ({ children }) => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-16">
        <div className="w-full mx-auto transition-all duration-300">
          {children}
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default Layout 