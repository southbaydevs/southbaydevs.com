import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function BaseLayout({ children }) {
  return (
    <div>
      <Head>
        <title>SouthBay Devs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        body {
          background: #000;
          font: 16px Helvetica;
          color: #fff;
          padding: 0;
          margin: 0;
          min-height: 100vh;
          min-width: 100vw;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          outerHeight: '100vh',
          minHeight: '100vh',
          outerWidth: '100vw',
          minWidth: '100vw'
        }}
      >
        <Navigation />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  )
}
