import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div id="navbar">
      <div id="navleft">
        <img alt='' src="toys.png" height="50px" width="30%"></img>
        <span id="tagline">A Life Full Of Games</span>
      </div>
      <div id="navright">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact Us</Link>
        
      </div>
    </div>
    </>
  )
}

export default Navbar