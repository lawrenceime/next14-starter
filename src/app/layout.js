import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { Inter } from 'next/font/google'
import './globals.css'
// import ClientSideProviderTest from '@/components/ClientSideProviderTest'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:'Next.js 14 Homepage',
    template: '%s|Next.js 14'
  }
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  )
}