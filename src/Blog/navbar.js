import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navouter">
        <div id="navleft"><img alt='' src="blog-removebg-preview (1).png" height="100%" width="10%"></img></div>
        <div id="right">
            <Link to="/blog">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/blog">Help</Link>
        </div>
    </div>
  )
}

export default Navbar