
import React from 'react'
import './component.css'
const Projec1 = () => {
  return (
    <>
   <div id="outer">
    <div id="top">
        <div id="left"><img id="imglogo" src="logomui.png" alt=""></img></div>
        <div id="right">
            <button>Home</button>
            <button>About Us</button>
            <button>Service</button>
            <button>Contact</button>
            <button className='btnlogin'>Login</button>
        </div>
    </div>
    <div id="bottom">
        <div id="btleft">
            <h1>Online</h1>
            <h1>Education</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className='btnlearn'>Learn More</button>      
        </div>
        <div id="btright">
            <img alt=""src="project1img.png" height="80%" width="100%"></img>
        </div>
    </div>
   </div>
    </>
  )
}

export default Projec1