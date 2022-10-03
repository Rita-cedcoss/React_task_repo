import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div id="navOuter">
    <div id="navleft"><img alt='' src="lyaimage.png" height="100%" width="40%"></img> </div>
    <div id="navright">
      <Link to="/">Home</Link>
      <Link to="/about">Abouts</Link>
      <Link to="/cities">Cities</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/drive"> Drive</Link>
     </div>

  </div>
    <div><h1>About</h1></div>
    </>
    
  )
}

export default About