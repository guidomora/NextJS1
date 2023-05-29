import { NextPage } from "next"
import "../styles/globals.css"
import { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app";

// Estos 2 tipos ya vienen configurados en Next cuando el proyecto se arranca
// desde 0 con TS. Aca lo hicimnos manualmente
type NextPAgeWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPAgeWithLayout
}

// Es el punto central de la aplicacion
export default function App({ Component, pageProps }: AppPropsWithLayout) {

  // si getLayout existe, lo obtiene sino retorna la pagina (page)
  const getLayout = Component.getLayout || ((page) => page)

  
  return getLayout (<Component {...pageProps} />)
}
