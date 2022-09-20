import React, { createRef, useState } from 'react'
function Task1() {
    const inpNumber=createRef();
    const [number,setNumber]=useState();
    const submit=(event)=>
    {
      var num= inpNumber.current.value
      setNumber(num);
      event.preventDefault();
    }
    return (
    <>
    <h3>Create a text box that accepts only numbers and display the same using buttons</h3>
    <div>
        <form>
        <input ref={inpNumber} type="number"></input>
        <button onClick={submit}> Submit</button>
        <p>{number}</p>
        </form>
    </div>
    </>
  )
}

export default Task1