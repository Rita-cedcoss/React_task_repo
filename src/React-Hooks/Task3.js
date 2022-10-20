import React, { useState } from 'react'
let hr,min,sec;let setInter
const Task3 = () => {
    const[hours,setHours]=useState(0);
    const[minutes,setMinutes]=useState(0);
    const[second,setSecond]=useState(0);
    const clock=()=>
    {
        hr=new Date().getHours();
        min=new Date().getMinutes();
        sec=new Date().getSeconds();
        clearInterval(setInter);
       setInter= setInterval(decrement,1000);
    }
    const decrement=()=>
    {
        if(sec>=1)
        {
            sec--;
        }
        else {
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
         setMinutes(min);
         setSecond(sec);
    }
    return (
    <>
    <div>
        <p>{hours}:{minutes}:{second}</p>
        <button className='btninc' onClick={clock}>Start</button>
    </div>
    </>
  )
}

export default Task3