import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import FAQ from "./Pages/FAQ"
import Gallery from "./Pages/Gallery"
import Home from "./Pages/Home"
import Rooms from "./Pages/Rooms"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/rooms' element={<Rooms/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App