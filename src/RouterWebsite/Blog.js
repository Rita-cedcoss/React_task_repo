import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
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
      <Link></Link>
     </div>

  </div>
    <div><h1>Blog</h1></div>
    </>
    
  )
}

export default Blog