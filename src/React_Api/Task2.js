import React, { useEffect, useState } from 'react'

const Task2 = () => {
    const [Data,setData]=useState([]);
    useEffect(()=>{
        fetch(`https://api.github.com/users`).then((result)=>{
         result.json()
         .then((resp)=>{
            setData(resp);
           console.log(resp);
         })
        })
    },[])
   return(
    <>
    <div id="gitcontainer">
    <h1>React API Task2 </h1>
   <p> Q2. Get the Github users data using Rest API through React</p>  
    <table>
            <tr><th>Id</th><th>Name</th><th>Git URL</th><th>Organizations URL</th></tr>
            {
                Data.map(item=>{
                    return(
                        <tr><td>{item.id}</td><td>{item.login}</td><td>{item.repos_url}</td><td>{item.organizations_url}</td></tr>
                    )
                })
            } 
        </table>
        </div>
    </>
   )
}

export default Task2