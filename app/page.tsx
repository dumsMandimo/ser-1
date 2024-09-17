import { View, Text } from 'react-native'
import React from 'react'
import Hero from '@/components/Hero'
import { Separator } from '@/components/ui/separator'
import Join from '@/components/Join'
import FAQ from '@/components/FAQ'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Separator/>
      <Join/>
      <About/>
      <Separator/>
      <FAQ/>
      <Separator/>
      <Contact/>
      <Separator/>
      <Footer/>
    </div>
  )
}

export default Home