import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <div id="outer">
        <div id="inner">
            <div id="Login" >
           
                <h3>Login</h3>
               <input type="text" id="luname" placeholder='Enter Your Name'></input>
              <input type="text" id="lpasswd" placeholder='Enter Your Password'></input><br/>
                <button id="btnLogin" onClick={props.login}>Login Account</button><br/>
                <Link to="/">Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default Login