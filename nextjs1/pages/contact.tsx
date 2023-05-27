import Link from 'next/link'
import MainLayout from '../components/Layouts/MainLayout'




export default function About() {
  return (
    <>
      <MainLayout>
        <div>
          {/* Genera una precarga del sitio a donde nos redirigimos, se puede desactivar
        si queremos */}
          <Link
            href="/"
          >
            <h2>
              Ir a Inicio<span>-&gt;</span>
            </h2>
            <p>
              Pagina de contacto
            </p>
          </Link>
        </div>
      </MainLayout>
    </>
  )
}
