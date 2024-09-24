import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Myprofile from './pages/Myprofile'
import Login from './pages/Login'
import Appointment from './pages/Appointment'
import Myappointment from './pages/Myappointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className=' mx-4 sm:mx-[10%]' >
      <Navbar/>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/doctor" element={<Doctor/>}/>
    <Route path="/doctor/:speciality" element={<Doctor/>}/>
    <Route path="/my-profile" element={<Myprofile/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/appointment/:docId" element={<Appointment/>}/>
    <Route path="/my-appointment" element={<Myappointment/>}/>

     </Routes>
     <Footer/>
    </div>
  )
}

export default App
