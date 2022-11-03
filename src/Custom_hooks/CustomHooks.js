import React, { useEffect, useState } from 'react'
import useCustomHook from './useCustomHook';

const CustomHooks = () => {
    const [DataArr,setData]=useState([]);
    useCustomHook(setData);
    return (
    <>
    <div id="outer">
        <div id="gridContainer">
           {
            DataArr.map((item)=>{
                return(
                    <>
                    <div id="grid">
                      <div id="Title"><h2>{item.title}</h2></div>
                      <div id="Content"><p>{item.body}</p></div>
                    </div>
                    </>
                )
            })
           }
        </div>
    </div>
    </>
  )
}

export default CustomHooks