import logo from './logo.svg';
import './App.css';
import Signup from './Feedapp/Signup';
import './Feedapp/Component.css'
import Login from './Feedapp/Login';
import {Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Feedcomp from './Feedapp/Feedcomp';
function App() {
  const[signArr,setSignarr]=useState([{name:"abc",Password:"abc"}]);
  const navigate=useNavigate()
  const signup=()=>
  {
    let name= document.getElementById("uname").value;
    let email=document.getElementById("uemail").value;
    let Password=document.getElementById("passwd").value;
    let uname= document.getElementById("username").value;
    let num=document.getElementById("mobile").value;
    let city=document.getElementById("city").value;
    let country=document.getElementById("country").value;
    let pin=document.getElementById("pincode").value;
    // console.log(name, email,Password,uname,num,city,country,pin);
    let obj={name:name,email:email,Password:Password,uname:uname,num:num,city:city,country:country,pin:pin};
    if(name===""||email===""||Password===""||uname===""||num===""||city===""||country===""||pin==="")
    {
      alert("Please fill all the field");
    }
    else{
       alert("Your account created successfully");
       signArr.push(obj);
       setSignarr([...signArr]);
        document.getElementById("uname").value="";
        document.getElementById("uemail").value="";
        document.getElementById("passwd").value="";
        document.getElementById("username").value="";
        document.getElementById("mobile").value="";
        document.getElementById("city").value="";
        document.getElementById("country").value="";
        document.getElementById("pincode").value="";
       console.log(signArr);
    }
  }
  const login=()=>
  {
    let name=document.getElementById("luname").value;
    let passwd=document.getElementById("lpasswd").value;
    let temp=-1;
    for(let i=0;i<signArr.length;i++)
    {
      if(signArr[i].name===name &&signArr[i].Password===passwd )
      {
         temp=i;
      }
    }
    if(temp!==-1)
    {
      
        alert("your are login successful");
        navigate("/feed");
      
    }
    else{
     alert("Invalid Value");
    }
    
  }
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Signup create={signup}/>}/>
      <Route path='/login' element={<Login login={login}/>}></Route>
      <Route path='feed' element={<Feedcomp></Feedcomp>}></Route>
    </Routes>
    </>
  );
}

export default App;
