import React, { useState } from 'react'

function Component1() {
   const[count,setCount]=useState(1);
   const[str,setStr]=useState("odd");
   const counter=()=>
    {    
        if(count%2!==0)
        {
         setStr("even")  ;
        }
        else 
        {
            setStr("odd"); 
        }
        setCount(count+1);
    }
   
  return (
    <>
     <button onClick={counter}>Click {count} Times</button>
       <p>{count} &nbsp; &nbsp;is &nbsp;&nbsp;{str}&nbsp;&nbsp; number</p>
     </>
    
  )
}

export default Component1