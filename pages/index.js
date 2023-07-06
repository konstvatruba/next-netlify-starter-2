import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vultur Chile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="¡Gracias por visitarnos!" />
        <p className="description">
          Estamos desarrollando nuestra nueva página web y nuevas activadades como empresa! 
          Se vienen mas cosas en Agosto 2023
        </p>
      </main>

      <Footer />
    </div>
  )
}
