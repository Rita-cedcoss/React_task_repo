import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contactus from './Contactus'
import Home from './Home'
import Navbarcomp from './Navbarcomp'
import Ourproduct from './Ourproduct'
import './website2style.css'
function Appcomponent() {
  return (
   <>
   <Navbarcomp></Navbarcomp>
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/ourproduct" element={<Ourproduct></Ourproduct>} ></Route>
    <Route path="/contact" element={<Contactus></Contactus>}></Route>
   </Routes>
   </>
  )
}

export default Appcomponent