import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import Skills from './component/Skills/Skills'
import { Route, Routes } from 'react-router-dom'
import Contact from './component/Contact/Contact'
import Projects from './component/Projects/Projects'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
       <Route path='/' element={ <Home /> } />
       <Route path='/skills' element={ <Skills /> } />
       <Route path='/projects' element={ <Projects /> } />
      </Routes>
      <Contact />
    </div>
  )
}

export default App
