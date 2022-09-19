import React, { createRef, useState } from 'react'
import './Reactform.css'
function Reactform() {
     let refname=createRef();
     let refemail=createRef();
     let refPasswd=createRef();
     let refNumber=createRef();
     let reftextarea=createRef();
     let refradiomale=createRef();
     let refradiofemale=createRef();
     let refcheckbox1=createRef();
     let refcheckbox2=createRef();
     let refcheckbox3=createRef();
     let refFile=createRef();
     let refdate=createRef();
     const[msgname,setMsgname]=useState('');
     const[msgemail,setEmail]=useState('');
     const[passwd,setPassword]=useState('')
     const[textval,setTextval]=useState('');
     const[numvalid,setNumvalid]=useState('');
  const inputname=(event)=>
  {
    var name=event.target.value;
    console.log(name);
    let regexName=/^[A-Za-z.\s_-]+$/;
    if(!name.match(regexName))
    {
      setMsgname("*Please enter only Character");
    }
    else{
        setMsgname("");
    }
  }
  const inpemail=(e)=>
  {
    var email=e.target.value;
    console.log(email);
   let regexemail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(regexemail))
    {
        setEmail(" *Please valid email");
    }
    else
    {
        setEmail("");
    }
  }
  const upassword=(e)=>
  {
    var psswd=e.target.value;
    console.log(psswd);
    var regexpsswd= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!psswd.match(regexpsswd))
    {
        setPassword(" *Please enter alteast 6 character");
    }
    else
    {
        setPassword("");
    }
  }
  const funtextarea=(e)=>
  {
    var testval=e.target.value;
    console.log(textval);
    
    if(testval==="")
    {
        setTextval("Please Enter the value");
    }
    else
    {
        setTextval("");
    }
  }
  const validnumber=(e)=>
  {
    var num=e.target.value;
    let regexnum=/^(\+\d{1,3}[- ]?)?\d{10}$/
    if(!num.match(regexnum))
    {
        setNumvalid("Mobile Number feild should Contain 10 digits");
    }
    else
    {
        setNumvalid("");
    }
  }
  const submit=( event)=>
  {
    let inpName= refname.current.value;
    let inpemail=refemail.current.value;
    let inppsswd=refPasswd.current.value;
    let inpnum=refNumber.current.value;
    let textarea=reftextarea.current.value;
    let rdmale=refradiomale.current.value;
    let rdfmale=refradiofemale.current.value
    let checkbox1=refcheckbox1.current.value;
    let checkbox2=refcheckbox2.current.value;
    let checkbox3=refcheckbox3.current.value;
    let file=refFile.current.value;
    let date=refdate.current.value;
    let regexName=/^[A-Za-z.\s_-]+$/;
    let regexemail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regexpsswd= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let regexnum=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    console.log(inpName,inpemail,inppsswd,inpnum,textarea,rdmale,rdfmale,checkbox1,checkbox2,checkbox3,file,date);
    if(inpName===""||inpemail===""||inppsswd===""||inpnum===""||textarea===""||rdmale===""||rdfmale===""||checkbox1===""||checkbox2===""||checkbox3===""||file===""||date==="")
     {
        alert("please fill the all field");
     }
     else if(!inpName.match(regexName))
     {
        setMsgname("*Please enter only Character in name field");
     }
     else if(!inpemail.match(regexemail))
    {
        setEmail(" *Please enter valid email in email field");
    }
    else if(!inppsswd.match(regexpsswd))
    {
        setPassword(" *Please enter valid password on password feild");
    }
    else if(!inpnum.match(regexnum))
    {
        setNumvalid("Mobile Number field should contain 10 digits");
    }
     else{
         alert("Data Submited Successfully");
         reset();
     }
    event.preventDefault();
  }
  const reset=()=>{
    refname.current.value="";
    refemail.current.value="";
    refPasswd.current.value="";
    refNumber.current.value="";
    reftextarea.current.value="";
    refradiomale.current.value="";
    refradiofemale.current.value=""
    refcheckbox1.current.value="";
    refcheckbox2.current.value="";
    refcheckbox3.current.value="";
    refFile.current.value="";
    refdate.current.value="";
  }
    return (
    <>
    <div id="outer">
        <div id="outerForm">
            <h1>React Form</h1>
            <form>
               <div className='inputStyle'>
                 <label>Enter Your Name</label>
                  <input  type="text" ref={refname} onChange={inputname}></input>
                  <span>{msgname}</span>
               </div>
              <div className='inputStyle'>
                  <label>Enter Your Email</label>
                  <input type="text" ref={refemail} onChange={inpemail} ></input>
                  <span>{msgemail}</span>
              </div>
                <div className='inputStyle'>
                  <label>Enter Your Password</label>
                  <input type="password" ref={refPasswd} id="inpstyle1" onChange={upassword}></input>
                  <span>{passwd}</span>
                </div>
                <div className='inputStyle'>
                  <label>Enter Your Address</label>
                
                 <textarea ref={reftextarea} onChange={funtextarea}></textarea>
                  <span>{textval}</span>
                </div>
                <div className='inputStyle'>
                  <label>Enter Your Mobile</label>
                  <input type="Number" onChange={validnumber} ref={refNumber}className="inpstyle"></input>
                  <span>{numvalid}</span>
                </div>
                <div className='inputStyle'>
                  <label>Select Your Gender</label>
                  <input type="radio" className='inputElement1'  ref={refradiomale} name="a" value="Male"></input><label>Male</label>
                  <input type="radio" className='inputElement1' ref={refradiofemale} name="a" value="Female"></input><label>Female</label>
                  <span></span>
                </div>
                <div className='inputStyle'>
                  <label id="hobby">Choose Your Hobbies</label>
                  <input type="checkbox" ref={refcheckbox1}  id="checkbox1" className='inputElement'></input><label>Crickert</label>
                  <input type="checkbox" ref={refcheckbox2} className='inputElement'></input><label>Singing</label>
                  <input type="checkbox" ref={refcheckbox3} className='inputElement'></input><label>Dancing</label>
                  <span></span>
                </div>
                <div className='inputStyle'>
                  <label>Choose Profile Pic</label>
                  <input type="file" ref={refFile}></input>
                  <span></span>
                </div>
                <div className='inputStyle'>
                  <label>Select Your DOB</label>
                  <input type="Date" ref={refdate}></input>
                  <span></span>
                </div>
                <div className='inputStyle1'>
                  <button onClick={submit}>Register Me</button>
                  <button onclick={reset}>Reset</button>
                </div>
            </form>
        </div>
    </div>
    </>
    
  )
}
export default Reactform