import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'
import Features from './components/Features'
import FloatingImage from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <FloatingImage/>
      <Contact/>
      <Footer/>

    </main>
  )
}

export default App