import React, { useState } from 'react'

const Task1 = () => {
    const[count,setCount]=useState(0);
   const increment=()=>
   {
       setCount(count+1);
   }
    return (
    <div>
        <button className="btninc" onClick={increment}>Click me {count}</button>
    </div>
  )
}

export default Task1