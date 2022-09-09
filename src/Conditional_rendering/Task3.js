import React, { useState } from 'react'
import './task.css'

function Task3() {
    var theme="light";
    const[bgcolor,setBgcolor]=useState("light");
    const themeChange=(e)=>
    {
        var text =e.target.getAttribute("id");
        if(text==="light")
        {
            theme="light";
        }
        else if(text==="dark")
        {
            theme="dark";
        }
        else if(text==="party")
        {
            theme="party";
        }
        setBgcolor(theme);
    }
    return (
    <div id="buttonChanger" className={bgcolor}>
        <button className={bgcolor}  onClick={themeChange} id="light">Light</button>
        <button  className={bgcolor} onClick={themeChange} id="dark">Dark</button>
        <button className={bgcolor}  onClick={themeChange} id="party">Party</button>     

    </div>
  )
}

export default Task3