import React from 'react'
import Functionchild2 from './Functionchild2'
function Functionchild1(props) {
  return (
    <Functionchild2 name={props.name}></Functionchild2>
  )
}

export default Functionchild1