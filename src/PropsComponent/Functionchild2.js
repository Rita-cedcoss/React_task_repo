import React from 'react'
import Functionchild3 from './Functionchild3'
function Functionchild2(props) {
  return (
    <Functionchild3 name={props.name}></Functionchild3>
  )
}

export default Functionchild2