import React, { createRef, useState } from 'react'

function Task2() {
    const reftextarea=createRef();
    const [upercase,setUppercase]=useState();
    const uppercase=(event)=>
    {
          let uppercase=reftextarea.current.value;
          let x=uppercase.toUpperCase();
          setUppercase(x);
          event.preventDefault();
    }
  return (
  <>
  <form>
  <h3>Create a Text area and convert the text into uppercase using button</h3>
  <textarea ref={reftextarea} value={upercase}></textarea><br></br>
  <button onClick={uppercase}>Submit</button>
  </form>
  </>
  )
}

export default Task2