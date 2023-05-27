import '@/styles/globals.css'

// Es el punto central de la aplicacion
export default function App({ Component, pageProps }) {

  // si getLayout existe, lo obtiene sino retorna la pagina (page)
  const getLayout = Component.getLayout || ((page) => page)

  
  return getLayout (<Component {...pageProps} />)
}
