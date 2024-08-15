import { useState } from 'react'
import Registration from './Components/Registration'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'

import { Routes, Route } from 'react-router-dom'
import SignUp from './Components/Home/SignUp'
import Login from './Components/Home/Login'
import Home from './Components/Home/Home'
function App() {


  return (
    <>
      
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
      

    </>
  )
}

export default App
