import React from 'react'
import { Link } from 'react-router-dom'

const Navbarcomp = () => {
  return (
     <>
     <div id="navbar">
        <div id="navleft"><img alt='' src="educadd.png" height="60%" width="20%"></img></div>
        <div id="navright1">
            <Link to="/">Home</Link>
            <Link to="/ourproduct">Our Products</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
     </div>
     </>
  )
}

export default Navbarcomp