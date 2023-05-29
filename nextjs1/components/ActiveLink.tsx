import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC, PropsWithChildren } from 'react';

interface Propiedades {
  text:string
  href:string
}



const style: CSSProperties = {
    color: "#0070f3",
    textDecoration: "none"
}

const ActiveLink = ({text , href}:Propiedades) => {

    // Customhook de Next
    const {asPath} = useRouter()

  return (
    <Link style={asPath === href ? style : undefined} href={href}>{text}</Link>
  )
}

export default ActiveLink