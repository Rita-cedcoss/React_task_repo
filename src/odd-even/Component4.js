import React, {useState } from 'react'
let hr,min,sec,milisec;
function Component4() {
    const[Hours,setHours]=useState(0);
    const[Mins,setMinute]=useState(0);
    const[Sec,setSecond]=useState(0);
    const[Milsec,setMilisecond]=useState(0);
    const[interval,setTime]=useState(); 
    const start=()=>
    {
      hr=0;
      min=0;
      sec=0;
      milisec=0;
     setTime(setInterval(stopWatch,10));
    }
    const stop=()=>
    {
      clearInterval(interval);
    }
    const reset=()=>
    {
      setHours(0);
      setMinute(0);
      setSecond(0);
      setMilisecond(0);
    }
  const stopWatch=()=>
    {
       if(milisec<99)
            {
             milisec++;
            }
            else
            {
              milisec=0;
               if(sec<59)
               {
                sec++;
               }
               else
               {
                sec=0
                 if(min<59)
                 {
                  min++;
                 }
                 else
                 {
                    min=0;
                  if(hr<59)
                  {
                    hr++;
                  }
       
                 }
               }
            }
            setHours(hr);
            setMinute(min);
            setSecond(sec);
            setMilisecond(milisec);
    }   
    return (
        <>
        <p>{Hours}:{Mins}:{Sec}:{Milsec}</p>
        <button onClick={start}>Start</button><button onClick={stop}>Stop</button><button onClick={reset}>Reset</button>
        </>
  
  )
}

export default Component4