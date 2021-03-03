import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Let's get started by editing <code>pages/index.js</code> and upload to Netlify. 
        </p>
        <p>
          And the story continues!!!   
        </p>
      </main>

      <Footer />
    </div>
  )
}
