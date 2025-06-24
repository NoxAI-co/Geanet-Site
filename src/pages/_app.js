import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

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

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Imagen Corporativa/logo_icono_256x256.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Imagen Corporativa/logo_icono_256x256.png" />
        <link rel="apple-touch-icon" href="/Imagen Corporativa/logo_icono_256x256.png" />
        <meta name="theme-color" content="#003366" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
 
export default MyApp 