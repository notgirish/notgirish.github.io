import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div className='container'>
    <Head>
      <meta name="description" content="notgirish product designer and developer portfolio." />
      <meta content="notgirish product designer and developer portfolio" property="og:title" />
      <meta content="notgirish product designer & developer portfolio." property="og:description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
