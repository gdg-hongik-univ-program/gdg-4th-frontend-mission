import Navbar from './/Navbar'
import HeroBanner from './HeroBanner'
import InfoSection from './InfoSection'
import PlayersNews from './PlayerNews'
import Footer from './Footer'
import React from 'react'

function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <InfoSection />
      <PlayersNews />
      <Footer />
    </div>
  )
}

export default App