'use client'
import { Inter } from 'next/font/google'
import { Main } from './styles/components'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Main className={inter.className}>
      <Navbar />
      <Footer />
    </Main>
  )
}