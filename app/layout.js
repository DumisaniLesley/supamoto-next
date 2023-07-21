import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import widget from './components/Widget'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SupaMoto | Clean Energy for All',
  description: 'Clean Enery, Supamoto, Green Economy',
  icon: '/favicon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  )
}
