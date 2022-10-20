import React, { createRef, useState } from 'react'
import './todocss.css'
const arrIncomp=[];  var text; const arrComp=[]; var indxComp; var indxIncomp;var status;
const Component1 = () => {
    const[arrInCompleted,setArr]=useState([]);
    const[arrCompletd,setArrComp]=useState([]);
    let textInput =createRef();
    let textBtn=createRef();
   const btnAdd=()=>
   {
    let btn=textBtn.current.innerHTML;
    if(btn==="Add"){  
     text=textInput.current.value;
      arrIncomp.push(text);
      setArr([...arrIncomp]);
    }
    else
    {
       if(btn==="Update")
        {
             if(status==="incomplete-tasks")
            {  
                arrIncomp[indxIncomp]=textInput.current.value;
                setArr([...arrIncomp]);  
            }
            else{
                alert();
                arrComp[indxComp]=textInput.current.value;
                setArrComp([...arrComp]);  
            }
            textInput.current.value="";
            textBtn.current.innerHTML="Add";  
        }
    }
   }
   const moveToCompletedArr=(e)=>
   {
     let indx=e.target.getAttribute("idinx");
      arrComp.push(arrIncomp[indx]);
      arrIncomp.splice(indx,1);
      setArrComp([...arrComp]);
      setArr([...arrIncomp]);   
   }
   const movetoTodoArr=(e)=>{
        let indextodo=e.target.getAttribute("idinx");
        arrIncomp.push(arrComp[indextodo]);
        arrComp.splice(indextodo,1);
        setArrComp([...arrComp]);
        setArr([...arrIncomp]);
   }
   const todoEdit=(e)=>
   {  
     var val=e.target.getAttribute('value');
     status=e.target.parentElement.parentElement.getAttribute('id');
     indxIncomp=e.target.parentElement.getAttribute('idx');
     console.log(indxIncomp);
     console.log(status);
     textInput.current.value = val;
     textInput.current.focus();
     textBtn.current.innerHTML = "Update";
   }
   const editCompletedArr=(e)=>
   {  
     var val=e.target.getAttribute('value');
     textInput.current.value = val;
     indxComp=e.target.parentElement.getAttribute('id');
     console.log(indxComp)
     status=e.target.parentElement.parentElement.getAttribute('id');
     console.log(status);
     textInput.current.focus();
     textBtn.current.innerHTML = "Update";
   }
   const todoDelete=(e)=>
   {
       let index=e.target.parentElement.getAttribute("idx");
      arrIncomp.splice(index,1);
      setArr([...arrIncomp]);
   }
   const CompArrDelete=(e)=>{
    let index=e.target.parentElement.getAttribute("idinx");
    arrComp.splice(index,1);
    setArrComp([...arrComp]);
   }
    return (
      <>
           <div className="container">
           <h2>TODO LIST</h2>
           <h4>Add Item</h4>
            <p>
                <input id="new-task" ref={textInput} type="text"/><button ref={textBtn}  onClick={btnAdd}>Add</button>
            </p>      

            <h4>Todo</h4>     
            <ul id="incomplete-tasks"> {
                arrInCompleted.map((item ,index)=>{
                    return(                 
                      <li idx={index}><input onClick={moveToCompletedArr} idinx={index} type="checkbox"/><label>{item}</label><input idinx={index} type="text"/><button value={item} idinx={index} onClick={todoEdit} className="edit">Edit</button><button className="delete" idinx={index} onClick={todoDelete}>Delete</button></li> 
                    )
                })
            }
            </ul>
            <h4>Completed</h4>
            <ul id="completed-tasks">{
            arrCompletd.map((item,index)=>{
              return(
                <li id={index}><input type="checkbox" idinx={index} onClick={movetoTodoArr} checked/><label>{item}</label><input  type="text"/><button value={item} id={index} onClick={editCompletedArr} className="edit">Edit</button><button onClick={CompArrDelete} className="delete">Delete</button></li>
              )
              })   
            }  
            </ul>
           </div>
       
      </>
  )
}

export default Component1