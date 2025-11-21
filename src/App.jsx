import React from 'react'

import Header from './Componenets/Header'
import About from './Componenets/About'
import Project from './Componenets/Project'
import Testimonials from './Componenets/Testimonials'
import Contact from './Componenets/Contact'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Componenets/Footer'
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
