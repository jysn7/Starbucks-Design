import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import GettingStarted from './pages/GettingStarted'
import EndlessExtras from './pages/EndlessExtras'
import Slider from './components/Slider'
import Cash from './pages/Cash'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <GettingStarted />
      <Slider />
      <EndlessExtras />
      <Cash />
      <Footer />
    </div>
  )
}

export default App