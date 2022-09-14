import React from 'react'

function Fruits_list() {
  const listarr=["Apple","mango","banana","orange"];
    return (
    <div>
       <ul>
        {
          listarr.map((item,index)=><li key={index}>{item}</li>)
        }
        </ul>
    </div>
  )
}

export default Fruits_list