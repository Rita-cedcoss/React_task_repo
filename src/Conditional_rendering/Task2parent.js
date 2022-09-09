import React, { useState } from 'react'
import './task.css'
import Task2child from './Task2child';
const Task2parent=()=> {
    
   const [num,setNum]=useState('');

  const numberHandler=(e)=>
  {
    
     var text=document.getElementById("num").value;
      setNum(text);
  }

    return (
      <>
    <div id="outer1" className=''>
        <input type="number" id="num" result={num} onChange={numberHandler}></input>
        {/* <p>{num}</p> */}
        <Task2child num={num}></Task2child>
    </div>
   
    </>
  )
}

export default Task2parent