import Link from 'next/link'
import MainLayout from '../components/Layouts/MainLayout'
import DarkLayout from '../components/Layouts/DarkLayout' 




export default function About() {
  return (
    <>
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
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </Link>
      </div>
    </>
  )
}
// Sirve para que en vez de tener el MainLayout y el DarkLayout directamente
// En el componente, lo tengamos en esta funcion.
// Le decimos a next que ejecute esta funcion en _app.js
About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}