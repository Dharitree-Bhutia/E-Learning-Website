import React from 'react'
import Header from './compnent/Header'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallary'
import Contact from './pages/Contact'
import Resource from './pages/Resources'
import Banner from './compnent/Banner'
import Aboutus from './compnent/Aboutus'
import Export from './compnent/Export'
import Skills from './compnent/Skills'
import Plans from './compnent/Plans'
import Contact1 from './compnent/Contact1'
function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
      {/* <Banner/>
      <Aboutus/>
     <Export/>
     <Skills/>
     <Plans/>
     <Contact1/> */}
    </div>
  )



}

export default App
