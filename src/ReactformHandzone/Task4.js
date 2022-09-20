import React, { useState } from 'react'
import './component.css'
function Task4() {
    const[mode,setMode]=useState("Light Mode");
    const[darkmode,setDarkmode]=useState("dark");
    const modeChanger=(e)=>
    {
       let val=e.target.textContent;
       console.log(val);
       if(val==="Light Mode")
       {
        setMode("Dark Mode");
        setDarkmode("light");

       }
       else
       {
        setMode("Light Mode");
        setDarkmode("dark");
       }
       e.preventDefault();

    }
  return (
    <form >
        <div id="outer">
         <div id="toggle" className={darkmode}>
           <button onClick={modeChanger}>{mode}</button>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
         </div>
        </div>
    </form>
  )
}

export default Task4