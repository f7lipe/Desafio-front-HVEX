'use client'
import { Inter } from 'next/font/google'
import { Main } from './styles/components'
import Navbar from './layouts/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Main className={inter.className}>
      <Navbar />
    </Main>
  )
}