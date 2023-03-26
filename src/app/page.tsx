'use client'

import { Main } from './styles/components'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Sections from './layouts/Sections'



export default function Home() {
  return (
    <Main>
      <Navbar />
      <Sections />
      <Footer />
    </Main>
  )
}