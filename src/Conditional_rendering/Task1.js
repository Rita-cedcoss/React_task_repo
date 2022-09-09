import React, { useState } from 'react'
import './task.css'
function Task1() {
   const arrName=["Aarav","Aarush","Bhaavik","Darshit","Daksh","Dhairya","Eeshan","Ehsaan","Farhan","Faiyaz","Pranay","Gauransh","Gatik","Hardik" ,"Ram","Shyam","Rita","Rohan","Mohan" ,"apple","basket"];
   const suggest=[];
   let inputText;
   const[suggests,setSuggest]=useState(suggest);
    const suggestion=(e)=>
    {
         inputText=e.target.value;
        console.log(inputText);
        if(inputText!=="")
        {
          for(let i=0;i<arrName.length;i++)
          {    
            if (inputText.toLowerCase() === arrName[i].slice(0, inputText.length).toLowerCase()) {              
                 suggest.push(arrName[i]);              
            }
          }          
        }
        setSuggest([...suggest]);
    }
  return (
    <div className="suggest">
        <h3>suggestion box</h3>
        <div className='para'>
        <input onChange={suggestion} type="text"></input>
        {suggests.map(item=><p>{item}</p>)}</div>
    </div>
  )
}
export default Task1