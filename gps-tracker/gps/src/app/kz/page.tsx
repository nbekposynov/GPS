"use client"
import Contact from '../components/kz/Contact'
import Features from '../components/kz/Features'
import Footer from '../components/kz/Footer'
import HeroSection from '../components/kz/HeroSection'
import Navbar from '../components/kz/Navbar'
export default function Home() {
  return (
    <>
    <Navbar/>
   <div id='hero'><HeroSection/></div>
   <div id='about'> <Features/> </div>
   <div id='contact'> <Contact/></div>
    <Footer/>
    </>
  )
}
