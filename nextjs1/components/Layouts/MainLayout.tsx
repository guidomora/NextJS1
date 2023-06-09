import React from 'react'
import styles from "./Home.module.css"
import NavBar from '../NavBar'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react';

const inter = Inter({ subsets: ["latin"] });

// En el layout creamos todo lo que siempre se va a ver sin importar en 
// que pagina estemos. el parametro children va a contener lo que va cambiando
// Nos ayuda a reutilizar el codigo
const MainLayout: FC<PropsWithChildren>  = ({children}) => {
    return (
        <div>
            {/* Componente funciona como el <head></head> de html */}
            <Head>
                <title>Guidito</title>
                <meta name="description" content="Generated by Guido" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <NavBar />
                {children}
            </main>
        </div>
    )
}

export default MainLayout