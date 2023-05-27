import MainLayout from '@/components/Layouts/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../components/Layouts/Home.module.css"


// Es el index de la carpeta princing, cuando se quiera acceder a el solo
// se busca por pricing, si dentro de esta carpeta agregamos otra pagina
// accedemos mediance pricing/<nombreDeLaPagina>

const index = () => {
  return (
    <>
   <MainLayout>
      <div className={styles.center}>
        <h1>Pricing Page</h1>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.grid}>
        <Link href="/about" className={styles.card}>
          <h2>
            Ir a About<span>-&gt;</span>
          </h2>
          <p>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </Link>
      </div>
      </MainLayout>
  </>
  )
}

export default index