import React from 'react'
const Task5Funcomp=(props)=> {
  return (
    <div>
        <h1>Task5 multiplication of two numbers</h1>
        <p>{eval(props.num1+props.operator+props.num2)}</p>
    </div>
  )
}

export default Task5Funcomp