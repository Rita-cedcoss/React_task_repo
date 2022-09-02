import React from 'react'
import Functionchild1 from './Functionchild1'
const FunctionProps=(props)=> {
  return (
   <div>
     <h1>Third Task3</h1>
     <p>Hello {props.uname}</p>
     <Functionchild1 name={props.uname}></Functionchild1>

   </div>
  )
}

export default FunctionProps