import React, { createRef, useState } from 'react'
let arr=[];
function Task5() {
    const checkbox1=createRef();
    const checkbox2=createRef();
    const checkbox3=createRef();
    var box1; var box2;var box3; 
    const[boxvalue,setBoxvalue]=useState([]);
   const submitvalue=(e)=>
   {
      setBoxvalue([...arr]);
      e.preventDefault();
   }
   const checkedValue1=(e)=>
   {
     box1=e.target.value;
     arr.push(box1);
   }
   const checkedValue2=(e)=>
   {
     box2=e.target.value;
    arr.push(box2);
   }
   const checkedValue3=(e)=>
   {
     box3=e.target.value;
    arr.push(box3);
   }
  return (
    <>
    <form>
        <div>
            <input type="checkbox" value="Dancing" onClick={checkedValue1} ref={checkbox1}></input>Dancing<br></br>
            <input type="checkbox" value="Singing" onClick={checkedValue2} ref={checkbox2}></input>Singing<br></br>
            <input type="checkbox" value="Playing" onClick={checkedValue3} ref={checkbox3}></input>Playing<br></br>
            <br></br>
            <button onClick={submitvalue}>submit</button>
             {
              boxvalue.map((item)=>{
                return (<p>{item}</p>)
              })
             }
        </div>
    </form>
    </>
  )
}

export default Task5