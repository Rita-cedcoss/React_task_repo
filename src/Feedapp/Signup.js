import React from 'react'
import { Link } from 'react-router-dom'

const Signup = (props) => {

  return (
    <>
    <div id="outer">
        <div id="inner">
            <div id="signup">
                <h3>Sign Up</h3>
               <input type="text"  placeholder='Enter Your Name' id="uname"></input>
              <input type="text" placeholder='Enter Your Email' id="uemail"></input>
                <input type="text" placeholder='Enter Your Password' id="passwd"></input>
                <input type="text" placeholder='Enter Your Username' id="username"></input>
                <input type="number" placeholder='Enter Your Mobile Number' id="mobile"></input>
                <input type="text" placeholder='Enter City Name' id="city"></input>
                <input type="text" placeholder='Enter Country Name' id="country"></input>
                <input type="number" placeholder="Enter Pincode" id="pincode"></input>
                <br/>
                <button id="btnCreate" onClick={props.create}>Create Account</button><br/>
                <Link to="/login">Login</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup