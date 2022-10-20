import React, { useMemo, useState } from 'react'

const Task6 = () => {
    let [count1 ,setCount]=useState(0);
    let[count2,setCount2]=useState(0);
    const increment1=()=>
    {       count1++;
           setCount(count1);
    }
   
    const increment2 =() => {
      count2++;
      setCount2(count2);
    }
    const evenOdd=useMemo(()=>
    {
        let i=0;
        while(i<200000000000){ i++;
          return (count1%2===0)
        }
    },[count1]);
    return (
    <>
    <div> 
          <h2>{count1}{evenOdd?"even":"odd"}</h2>
          <button className='btninc' onClick={increment1}>Inc1:{count1}</button><button onClick={increment2} className='btninc'>Inc2: {count2}</button>
    </div>
    </>
  )
}

export default Task6