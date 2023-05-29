import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../components/Layouts/Home.module.css"
import Link from "next/link";
import MainLayout from "../components/Layouts/MainLayout"

const inter = Inter({ subsets: ["latin"] });

// La funcion puede tener un nombre diferente al del archivo
export default function Home() {
  return (
    <>
      {/* es un componente de orden superior, lo que va dentro son los children*/}
      <MainLayout>
        <div className={styles.center}>
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
          {/* Genera una precarga del sitio a donde nos redirigimos, se puede desactivar
        si queremos */}
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
  );
}
