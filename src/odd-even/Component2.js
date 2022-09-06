import React, { useState } from 'react'

function Component2() {
    const[count,setCount]=useState(0);
    const increment=()=>
    {
      setCount(count+1);
    }
    const decrement=()=>
    {
       
        if(count===0)
        {
            setCount(count);
        }
        else{
            setCount(count-1);
        }
    }
    const reset=()=>
    {
       
      setCount(0);
       
    }
  return (
    <>
     <p>{count}</p>
     <button onClick={increment}>Increment</button><button onClick={decrement}>Decrement</button><button onClick={reset}>Reset</button>
    </>
  )
}

export default Component2