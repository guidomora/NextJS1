import Link from 'next/link'
import React from 'react'
import navEstilo from "./NavBar.module.css"
import ActiveLink from './ActiveLink'

// Estilos: creamos un archivo de css al que le pusimos .module en el nombre
// lo importamos aca import navEstilo from "./NavBar.module.css" le podemos poner
// cualquier nombre en la import sigue en el archivo css, para aplicar la clase
// className={navEstilo.navStyle} ahi se le aplica la clase a todos los a dentro de nav
const NavBar = () => {


  const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Pricing',
      href: '/pricing'
    },
  ];

  return (
    <nav className={navEstilo.navStyle}>
      {/* En vez de hacer todo manual, lo hacemos "semi-dinamico" ya que solo
      creamos un ActiveLink y le pasamos las propiedades desestructuradas del
      menuItems */}

      {menuItems.map(({ text, href }) => (
        <ActiveLink key={text} text={text} href={href}></ActiveLink>
      ))}


      {/* <ActiveLink href="/" text={"Home"}></ActiveLink>
        <ActiveLink href="/about" text={"About"}></ActiveLink>
        <ActiveLink href="/contact" text={"Contacto"}></ActiveLink>
        <ActiveLink href="/pricing" text={"Pricing"}></ActiveLink> */}
    </nav>
  )
}

export default NavBar