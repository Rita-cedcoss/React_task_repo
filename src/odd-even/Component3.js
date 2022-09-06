import React, { useState, useEffect } from 'react'
let date,hr,min,sec;
function Component3() {
    const [Hours,setHours]=useState(0);
    const[Mins,setMins]=useState(0);
    const[Sec,setSeconds]=useState(0);

    const Clk=()=>
     {
      date=new Date();
      hr=date.getHours();
      min=date.getMinutes();
      sec=date.getSeconds();
      setInterval(update,1000);
     }
     const update=() => {
      if(sec>=1)
      {
        sec--;
      }
      else{
        sec=59;
        if(min>=1)
        {
          min--;
        }
        else
        {
          min=59;
          if(hr>=1)
          {
            hr--;
          }
          else
          {
            hr=0;
          }
        }
      }
      setHours(hr);
      setMins(min);
      setSeconds(sec);  
      }
    return (
    <>
      <p>{Hours}:{Mins}:{Sec}</p>
      <button onClick={Clk}>Start</button>
    </>
  )
}
export default Component3