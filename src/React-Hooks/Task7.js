import React, { useCallback, useState } from 'react'
let flag=true;
const Task7 = () => {
  const[number,setNumber]=useState(0);
  const[dark,setDark]=useState("dark");
  const successor=(e)=>{
   let number1=e.target.value;
    setNumber(number1);
  }
  const toggle=()=>
  {
    if(flag==true){
     setDark("light");
     flag=false;
    }
    else
    {
      setDark("dark");
      flag=true;
    }
  }
 return (
    <div className={dark}>
      <input type="number" onChange={successor}></input><button id="toggle" onClick={toggle}>Theme Toggle</button>
      <p >{number==0?"":number}</p>
      <p >{number == 0 ? "" : parseInt(number)+1}</p>
      <p >{number==0?"":parseInt(number)+2}</p>
    </div>
  )
}

export default Task7