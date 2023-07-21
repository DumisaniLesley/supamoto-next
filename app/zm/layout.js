"use client"
import Link from 'next/link'
import './../globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FreshworksWidget from '../components/FreshworksWidget'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Supamoto Zambia | Emerging Cooking Solutions',
  description: 'Clean Energy, Solar, supamoto, Green Economy',
}

export default function RootLayout({ children }) {

  const [showWidget, setShowWidget] = useState(false);

  const toggleWidget = () => {
    setShowWidget(!showWidget);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <button onClick={toggleWidget}>Toggle Widget</button>
        {showWidget && <FreshworksWidget />} */}
        <Footer />
      </body>
    </html>
  )
}
