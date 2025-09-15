import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Achievements from './components/Achievements/Achievements'
import Experience from './components/Experience/Experience'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Certifications from './components/Certifications/Certifications'
function App() {
  return (
    <div>
      <NavBar/>
      <main>
        <Home/>
        <About/>
        <Education/>
        <Achievements/>
        <Experience/>
        <Gallery/>
        <Certifications/>
        <Contact/>
      </main>
    </div>
  )
}

export default App

