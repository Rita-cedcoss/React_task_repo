import React, { useEffect, useState } from 'react'

const useCustomHook = (url,data,setData) => {
    useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(result=>{  
        data=data.concat(result);
        setData([...data]);  
        document.getElementById("load").setAttribute('class','visibility');
    })
   },[url])

}

export default useCustomHook