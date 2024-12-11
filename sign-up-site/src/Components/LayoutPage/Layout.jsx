import React from 'react'
import { Header } from '../Header/Header'
import Hero from '../HeroPage/Hero'
import Home from '../HomePage/Home'
import Footer from '../Footer/Footer'
import Impacts from '../Impacts/Impacts'

const Layout = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Home />
        <Impacts />
        <Footer />
    </div>
  )
}

export default Layout