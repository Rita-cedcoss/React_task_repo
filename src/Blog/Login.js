import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <div id="sign_outer">
        <img id="logoimg" src='amazonelogo.png' alt=''></img>
        <div id="top">
          <div id="top-in">
            <h3>Sign In</h3>
            {/* <p>Name</p>
            <input id="uname" className='inpdesign' type="text"/> */}
            <p>Email</p>
            <input id="email" className='inpdesign' type="text"/>
            <p>Password</p>
            <input id="passwd" className='inpdesign' type="text"/>
            <br/>
            <button id="btncreate" onClick={props.login} >Create Account</button>
            <Link to="/">Sign up</Link>
        
            </div>
        </div>
    </div>
  )
}

export default Login