import "../styles/globals.css"
import Header from "../components/Header"
import HeaderMobile from "../components/HeaderMobile"
import Footer from "../components/Footer"
import { Toaster } from "react-hot-toast"
import { GoogleTagManager } from "@next/third-parties/google"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      {/* <head /> */}
      <GoogleTagManager gtmId="GTM-NN4TM9JT" />
      <body>
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
