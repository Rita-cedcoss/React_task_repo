import React from 'react'
import './task.css'
function Task2child(props) {
    if(props.num==="")
     {
     return (
        <div  id="bgChange">
        </div>
          )
     }
     else if(props.num%2===0)
     {
        return (
            <div className="red" id="bgChange">
            </div>
              )
     }
     else{
        return (
            <div className="blue" id="bgChange">
            </div>
               )
     }   

     
}

export default Task2child