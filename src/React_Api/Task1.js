import React, { useEffect, useState } from 'react'

const Task1 = () => {
    const [Data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((result)=>{
           result.json()
           .then((resp)=>{
             setData(resp);
             console.log(resp);
           })
        })
       },[])
       
    return (
    <div id="Outer">
        <h1>React API Task1</h1>
        <table>
            <tr><th>Id</th><th>Name</th><th>Phone Number</th><th>User Name</th></tr>
            {
                Data.map(item=>{
                    return(
                        <tr><td>{item.id}</td><td>{item.name}</td><td>{item.phone}</td><td>{item.username}</td></tr>
                    )
                })
            } 
        </table>
    </div>
  )
}

export default Task1