import "../styles/globals.css"
import Header from "../components/Header"
import HeaderMobile from "../components/HeaderMobile"
import Footer from "../components/Footer"
import { Toaster } from "react-hot-toast"
// import { GoogleTagManager } from "@next/third-parties/google"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        {/* Add GTM script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                <!-- Google Tag Manager -->
                <script>
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-NN4TM9JT');
                </script>
                <!-- End Google Tag Manager -->
              `,
          }}
        />
        {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NN4TM9JT');</script> */}
      </head>
      {/* <GoogleTagManager gtmId="GTM-NN4TM9JT" /> */}
      <body>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NN4TM9JT"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-NN4TM9JT`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Toaster position="top-right" />
        <div className="md:hidden">
          <HeaderMobile />
        </div>
        <div className="hidden md:block">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
