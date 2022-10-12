import logo from './logo.svg';
import './App.css';
import Signin from './Blog/Signin';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Blog/Login';
import './Blog/component.css'
import Blog from './Blog/Blog';
import Navbar from './Blog/navbar';
function App() {
  const [signarr,setSignarr]=useState([]);
  const navigate=useNavigate();
  const SignIn=()=>
  {
    // alert("");

    let name=document.getElementById("uname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("passwd").value;
    let obj={name:name,email:email,passwd:password};
    if(name==""||email==""||password=="")
    {
      alert("Please fill all fields");
    }
    else{
      signarr.push(obj);
    setSignarr([...signarr]);
    alert("Your Account Created Successfully");
    document.getElementById("uname").value="";
    document.getElementById("email").value="";
    document.getElementById("passwd").value="";
    console.log(signarr);
    }
  }
  const login=()=>
  {
    let email=document.getElementById("email").value;
    let password=document.getElementById("passwd").value;
    console.log(email,password);
    let temp=-1;
   for(let i=0;i<signarr.length;i++)
   {
     if(signarr[i].email==email && signarr[i].passwd==password)
     {
      temp=i;
     console.log(temp);
     }
   }
   if(temp!==-1)
   {
     alert("You are login successfully");
     navigate("/blog");
   }
   else{
    alert("please enter valid detail");
   }
  }
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Signin Signin={SignIn}/>}></Route>
      <Route path='/login' element={<Login login={login} />}/>
      <Route path="/blog" element={<Blog></Blog>}></Route>
    </Routes>
    </>
  );
}

export default App;
