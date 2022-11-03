import React, { useEffect, useState } from 'react'

const useCustomHook = (setData) => {
    // const[limit,setLimit]=useState(5);
    const[pageCount,setPageCount]=useState(1);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_start='+pageCount+'_limit=5')
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
        setData(result);  
    })
   },[])

   const showData=()=>{
    console.log("helo");
    setTimeout(()=>{
        let count=parseInt(pageCount)+parseInt(5);
        setPageCount(count);
        console.log(pageCount);
    },300)
   }
   window.addEventListener('scroll',()=>{
    // console.log("hello i am rita");
          const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
          if(scrollTop+clientHeight>=scrollHeight)
          {
            console.log("hello i am rita");
            showData();
          }
   })
}

export default useCustomHook