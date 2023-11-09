"use client"
import Features from './components/Features'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
export default function Home() {
  return (
    <>
    <Navbar/>

<div id='hero'>   <HeroSection/></div> 
<div id='about'>  <Features/></div> 
<div id='contact'>  <Contact/></div> 
<Footer/>
    
    </>
  )
}
