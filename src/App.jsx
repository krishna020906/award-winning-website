import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App