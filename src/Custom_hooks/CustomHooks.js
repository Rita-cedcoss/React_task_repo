import React, { useEffect, useState } from 'react'
import useCustomHook from './useCustomHook';

const CustomHooks = () => {
    const [DataArr,setData]=useState([]);
    const[pageCount,setPageCount]=useState(0);
    useCustomHook("https://jsonplaceholder.typicode.com/posts?_start="+pageCount+"&_limit=5",DataArr,setData);
   
    useEffect(()=>{
    window.addEventListener('scroll',()=>{
            const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
            if(scrollTop+clientHeight===scrollHeight)
            {
              setTimeout(()=>{
                  setPageCount((count)=>count+5);                
              },3000)
              document.getElementById("load").removeAttribute('class','visibility');
            }
     })
   },[])
   

    return (
    <>
    <div id="outer">
        <div id="gridContainer">
           {
            DataArr.map((item,i)=>{
                return(
                    <>
                    <div id="grid">
                      <div id="Title"><h3>{item.id}</h3><h2>{item.title}</h2></div>
                      <div id="Content"><p>{item.body}</p></div>
                    </div>
                    </>
                )
            })
           }
           {
            (DataArr.length===100)? <h4>No New Posts Available.......</h4>:  <div id="load" className="visibility"><img height="100%" width="30%" alt="" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"></img></div>
           }
        </div>
        
    </div>
    </>
  )
}

export default CustomHooks