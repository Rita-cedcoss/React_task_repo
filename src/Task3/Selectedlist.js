import React, { useState } from 'react'
import './task3.css'
let arrRight=["PHP","ASP.net","Node.js","Python","MySQL"];  let arr=["HTML","CSS","Bootstrap","javascript","Reactjs"];
function Selectedlist() {
  const [leftsarrlist,setLeftarrlist]=useState([...arr]);
  const [rightarrlist,setRightarrlist]=useState([...arrRight]);
  let leftarrow=">>>";
  let rightarrow="<<<";
  const LeftBoxItem=()=>
    {
        var selItem=document.getElementById("select_first").value;
        var selindex= document.getElementById("select_first").selectedIndex;
        rightarrlist.push(selItem);
        console.log(rightarrlist);
        leftsarrlist.splice(selindex,1);
        setRightarrlist([...rightarrlist]);
        setLeftarrlist([...leftsarrlist])
               
    }
    const RightBoxItem=()=>
    {
        var selItem=document.getElementById("select_Second").value;
        var selindex= document.getElementById("select_Second").selectedIndex;
        console.log(selItem);
        leftsarrlist.push(selItem);
        rightarrlist.splice(selindex,1);
        setLeftarrlist([...leftsarrlist]);
        setRightarrlist([...rightarrlist]);
    }
  return (
    <>
    <div id="selDiv">  
    <div> <h1>Group1</h1>
    <select id="select_first" multiple>
        {
        leftsarrlist.map((item,i)=>
        {
            return(
                <option id={i}>{item}</option>
            )
        })
        } 
    </select>
    </div> 
    <div id="btnArange">
    <button onClick={LeftBoxItem}>{leftarrow}</button><br></br>
    
    <button onClick={RightBoxItem}>{rightarrow}</button>
    </div>
    <div>
        <h1>Group2</h1>
    <select id="select_Second" multiple>
        {
        rightarrlist.map((item)=>
        {
            return(
                <option>{item}</option>
            )
        })
        } 
    </select>
    </div>
    </div>
    </>
  )
}

export default Selectedlist