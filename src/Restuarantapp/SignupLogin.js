import React, { useState } from 'react'
import './Resturantapp.css'
let signupUserarr=[];
function SignupLogin(props) {
    const[signupdisplay,setSignupdisplay]=useState("signupBlock");
    const[logindisplay,setLogindisplay]=useState("loginnone");
    const[signuparr,setSignuparr]=useState();
    const[msg,setMsg]=useState("");
  const signUp=()=>
  { 
    var name=document.getElementById("uname").value;
    console.log(name);
    var email=document.getElementById("uemail").value;
    console.log(email);
    var password=document.getElementById("passwd").value;
    console.log(password);
    if(name===""||email===""||password==="")
    {
        alert("please fill all the feilds");
    }
    else 
    {
      var obj={name:name,email:email,password:password};
      signupUserarr.push(obj);
      setSignuparr(signupUserarr);
      alert("You are sign up successfully")
      setLogindisplay("loginBlock");
      setSignupdisplay("signupnone");
      console.log(signupUserarr);
    }
  }
  const loginUser=()=>{
    var name=document.getElementById("luname").value;
    console.log(name);
    var lpasswd=document.getElementById("lpasswd").value;
    console.log(lpasswd);
    console.log(signuparr[0].name);
    if(name===""||lpasswd==="")
    {
        alert("Please fill the all field");
    }
    else if(signuparr[0].name===name && signuparr[0].password===lpasswd)
    { 
       alert("login successfully");
       props.click(); 
    }
    else if(signuparr[0].name!==name && signuparr[0].password!==lpasswd)
    {
        alert("please enter valid value");
    }
  }
    return (
    <>
    <div id="outer">
        <div id="inner">
            <div id="signup" className={signupdisplay}>
                <h3>Sign Up</h3>
               <input type="text"  placeholder='Enter Your Name' id="uname"></input>
              <input type="text" placeholder='Enter Your Email' id="uemail"></input>
                <input type="text" placeholder='Enter Your Password' id="passwd"></input><br/>
                <button id="btnCreate" onClick={signUp}>Create Account</button>
                <p>{msg}</p>
            </div>
            <div id="Login" className={logindisplay} >
                <h3>Login</h3>
               <input type="text" id="luname" placeholder='Enter Your Name'></input>
              <input type="text" id="lpasswd" placeholder='Enter Your Password'></input><br/>
                <button id="btnLogin" onClick={loginUser}>Login Account</button>
            </div>
        </div>
    </div>
    </>
  )
}
export default SignupLogin