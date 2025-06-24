import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Deshabilitar el indicador de carga por defecto de Next.js
    const style = document.createElement('style')
    style.innerHTML = `
      #nprogress,
      #__next-route-announcer__,
      .router-loading {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return <Component {...pageProps} />
}
 
export default MyApp 