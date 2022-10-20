import React, { useState } from 'react'

const Task2 = () => {
    const [count,setCount]=useState(0);
    const start=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
       if(count>0)
       {
        setCount(count-1);
       }
    }
    const reset=()=>
    {
        setCount(0);
    }
  return (
   <>
   <div id="counter">
    <p>{count}</p>
    <button  className="btninc" onClick={start}>increment</button><button className="btninc" onClick={decrement}>decrement</button><button className="btninc" onClick={reset}> Reset</button>
   </div>
   </>
  )
}

export default Task2