import '../styles/globals.css'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'
// import { GoogleTagManager } from "@next/third-parties/google"
import Script from 'next/script'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        {/* Google Tag Manager */}
        {process.env.VERCEL_ENV === 'production' && (
          <Script id='google-tag-manager'>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NN4TM9JT');
            `}
          </Script>
        )}
      </head>
      {/* <GoogleTagManager gtmId="GTM-NN4TM9JT" /> */}
      <body>
        {/* Google Tag Manager */}
        {process.env.VERCEL_ENV === 'production' && (
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-NN4TM9JT'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}
        <Toaster position='top-right' />
        <header>
          <div className='md:hidden'>
            <HeaderMobile />
          </div>
          <div className='hidden md:block'>
            <Header />
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
