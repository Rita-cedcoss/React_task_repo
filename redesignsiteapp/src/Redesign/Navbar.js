import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div id="navouter">
        <div id="navtop">
            <div id="navtopleft">
                <p>Download WAY2DOOR APP</p>
            </div>
            <div id="navtopright">
            <p><i class='fas fa-map-marker-alt' style={{fontSize:"12px",color:"white"}}></i>Selected Delivery Location : Lucknow (226010) </p>
                <p> Login </p>
                <p>Signup</p>
            </div>
            
        </div>
        <div id="navmiddle">
          <Link to="/"><img alt="" src="http://www.way2door.com/images/way2door-min.png"></img></Link>
          <p>Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा.</p>
          <p id="icon"><i class="fa fa-opencart" style={{fontSize:"30px",color:"#6a8a0a"}}></i></p>
        </div>
        <div id="navbottom">
            <p>Fruits and Vegetable Stores</p>
        </div>
     </div>
    </>
  )
}

export default Navbar