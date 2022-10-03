import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div id="navTop">
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
    <div id="middle">
        <div id="midLeft"><h1>Make up to $35/hr</h1><h1>Driving Your Car</h1></div>
        <div id="midRight">
            <div id="midRinner">
                <h2>Apply Now</h2>
                <p>Enter your info and Then Download the Lyft app to create your driver profile</p>
                <input type="text" placeholder='First Name'></input><br></br>
                <input type="text" placeholder='Last Name'></input><br></br>
                <input type="text" placeholder='Email Address'></input><br></br>
                <input type="text" placeholder='City'></input><br></br>
                <input type="text" placeholder="Phone Number"></input><br></br>
                <input type="text" placeholder='Promo Code (optional)'></input><br></br>
                <input type="checkbox" className='checkbox'></input><span>I agree to the lyft terms</span><br></br>
                <button>Become A Driver</button>
                <p>Already Applied?Check the stutus of your application here</p>
            </div>
        </div>
    </div>
    </div>
    <div id="bottom">
        <div id="bottom_top">
           <h1>See How Much You Can Make</h1> 
           <p>How many Hours do you want to drive this week?</p>
           <input type="text" placeholder='Hours' className='inpfoot'></input><input type="text" placeholder='City'  className='inpfoot'></input><input type="button" value="Calculate"  className='inpfoot1'></input>
           {/* <button>Calculate</button> */}
        </div>
    </div>
    </>
  )
}

export default Navbar