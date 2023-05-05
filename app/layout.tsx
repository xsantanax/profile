import '../styles/globals.css'
// import { SessionProvider } from '../components/SessionProvider'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '../pages/api/auth/[...nextauth]'
// import ClientProvider from '../components/ClientProvider'
// import Login from '../components/Login'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import { Toaster } from 'react-hot-toast'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // const session = await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
        <Toaster position='top-right' />
        {/* <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : ( */}
        <div className='flex flex-col'>
          <div className='md:hidden'>
            <HeaderMobile />
          </div>
          <div className='hidden md:block'>
            <Header />
          </div>
          {/* <div className='flex mt-16'> */}
          {/* <ClientProvider /> */}
          {children}
        </div>
        {/* </div> */}
        {/* )}
        </SessionProvider> */}
      </body>
    </html>
  )
}
