import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div id="navbar">
     <Link to="/">Home</Link>
     <Link to="/about">About us</Link>
     <Link to="/contact"> Contact Us</Link>
     <Link to="/Gallery">Gallery</Link>
     </div>
    </>
  )
}

export default Navbar