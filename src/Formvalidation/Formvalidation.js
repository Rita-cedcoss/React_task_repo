import React, { createRef, useState } from 'react'
import './formvalidation.css'
function Formvalidation() {
    let sname=createRef();
    let sLname=createRef();
    let sdob=createRef();
    let smradio=createRef();
    let sfradio=createRef();
    let stextareaf=createRef();
    let sffname=createRef();
    let sflname=createRef();
    let fedu=createRef();
    let sfnum=createRef();
    let sfemail=createRef();
    let foccup=createRef();
    let smfname=createRef();
    let smlname=createRef();
    let medu=createRef();
    let smnum=createRef();
    let smemail=createRef();
    let moccup=createRef();
    let address=createRef();
    let regxname=/^[A-Z][A-Za-z0-9_-]{2,19}$/;
    let regexnumber=/^[0-9]{10}$/;
    let regexemail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     const[sfname,setSfname]=useState('');
     const[slname,setSlname]=useState('');
     const[stextarea,setStextarea]=useState('');
     const[ffname,setFfname]=useState('');
     const[flname,setFlname]=useState('');
    const [fnum,setFnum]=useState('');
    const[fmail,setFemail]=useState('');
    const [mfname,setMfname]=useState('');
    const [mlname,setMlname]=useState('');
    const [mnum,setMnum]=useState('');
    const[mmail,setMemail]=useState('');
    let name;let lname;let field;let fFname;
    const inpname=(e)=>
     {
     name=e.target.value;
     if(!name.match(regxname))
     {
      setSfname("Please Enter name with 1st letter capital and min-length-3");
     }
     else{
      setSfname('');
     }
     }
     const inplname=(e)=>
     {
         lname=e.target.value;
        if(!lname.match(regxname))
        {
         setSlname("Please Enter name with 1st letter capital and min-length-3");
        }
        else{
         setSlname('');
        }
     }
     const textareadetail=(e)=>{
         field=e.target.value;
          if(field==="")
          {
            setStextarea("Please fill the field");
          }
          else{
            setStextarea('');
          }
     }
     const inpfname=(e)=>
     {
      fFname=e.target.value;
       if(!fFname.match(regxname))
       {
         setFfname('Please Enter name with 1st letter capital and min-length-3')
       }
       else{
        setFfname('');
        }
     }
     const inpflname=(e)=>
     {
      let flname=e.target.value;
      if(!flname.match(regxname))
      {
        setFlname('Please Enter name with 1st letter capital and min-length-3')
      }
      else{
       setFlname('');
       }
     }
     const fphonenum=(e)=>
     {
        let fnum=e.target.value;
        if(!fnum.match(regexnumber)){
            setFnum("Please Enter 10 digits Phone number");
        }
        else{
          setFnum('');
        }
     }
     const femail=(e)=>
     {
        let femail=e.target.value;
        if(!femail.match(regexemail))
        {
          setFemail("Please enter valid email");
        }
        else{
          setFemail("");
        }
     }
     const mFname=(e)=>{
      let mfname=e.target.value;
      if(!mfname.match(regxname))
      {
        setMfname('Please Enter name with 1st letter capital and min-length-3')
      }
      else{
       setMfname('');
       }
     }
     const mLname=(e)=>
     {
        let mlname=e.target.value;
        if(!mlname.match(regxname))
        {
          setMlname("Please Enter name with 1st letter capital and min-length-3");
        }
        else{
          setMlname("");
        }
     }
     const Mphonenum=(e)=>
     {
        let mnum=e.target.value;
        if(!mnum.match(regexnumber)){
            setMnum("Please Enter 10 digits Phone number");
        }
        else{
          setMnum('');
        }
     }
     const Memail=(e)=>
     {
        let memail=e.target.value;
        if(!memail.match(regexemail))
        {
          setMemail("Please enter valid email");
        }
        else{
          setMemail("");
        }
     }
    const formsubmit=(event)=>
    { 
        let sname1=sname.current.value;
        let sLname1=sLname.current.value;
        let sdob1=sdob.current.value;
        let smradio1=smradio.current.value;
        let sfradio1=sfradio.current.value;
        let stextareaf1=stextareaf.current.value;
        let sffname1=sffname.current.value;
        let sflname1=sflname.current.value;
        let fedu1=fedu.current.value;
        let sfnum1=sfnum.current.value;
        let sfemail1=sfemail.current.value;
        let foccup1=foccup.current.value;
        let smfname1=smfname.current.value;
        let smlname1=smlname.current.value;
        let medu1=medu.current.value;
        let smnum1=smnum.current.value;
        let smemail1=smemail.current.value;
        let moccup1=moccup.current.value;
        let address1=address.current.value;
      if(sname1===""||sLname1===""||sdob1===""||smradio1===""||sfradio1===""||stextareaf1===""||sffname1===""||sflname1===""||fedu1===""||sfnum1===""||sfemail1===""||foccup1===""||smfname1===""||smlname1===""||medu1===""||smnum1===""||smemail1===""||moccup1===""||address1==="" ){
         alert("Please fill all Empty field");
      }
      else if(!sname1.match(regxname))
      {
       setSfname("Please Enter name with 1st letter capital and min-length-3");
      }
      else if(!sLname1.match(regxname))
      {
       setSlname("Please Enter name with 1st letter capital and min-length-3");
      }
      else if(!sffname1.match(regxname))
      {
        setFfname('Please Enter name with 1st letter capital and min-length-3')
      }
      else if(!sflname1.match(regxname))
      {
        setFlname('Please Enter name with 1st letter capital and min-length-3')
      }
      else if(!sfnum1.match(regexnumber)){
        setFnum("Please Enter 10 digits Phone number");
       } 
       else if(!sfemail1.match(regexemail))
       {
         setFemail("Please enter valid email");
       }
       else if(!smfname1.match(regxname))
      {
        setFfname('Please Enter name with 1st letter capital and min-length-3')
      }
      else if(!smlname1.match(regxname))
      {
        setFlname('Please Enter name with 1st letter capital and min-length-3')
      }
      else if(!smnum1.match(regexnumber)){
        setFnum("Please Enter 10 digits Phone number");
       } 
       else if(!smemail1.match(regexemail))
       {
         setFemail("Please enter valid email");
       }
      else{
        alert("Data submitted successfully");
      sname.current.value="";
      sLname.current.value="";
      sdob.current.value="";
      smradio.current.value="";
      sfradio.current.value="";
      stextareaf.current.value="";
      sffname.current.value="";
      sflname.current.value="";
      fedu.current.value="";
      sfnum.current.value="";
      sfemail.current.value="";
      foccup.current.value="";
      smfname.current.value="";
      smlname.current.value="";
      medu.current.value="";
      smnum.current.value="";
      smemail.current.value="";
      moccup.current.value="";
      address.current.value="";
      }
      event.preventDefault();
    }
    return (
    <>
     <div id="outer">
      <div id="divform">
         <h1>Student Registration Form</h1>
         <form>
        <div id="form_outer">
            <h2 className='pname'>Student Information</h2>
            <p className='pname'>Name of applicant</p>
            <div id='m1'><div><input onChange={inpname} ref={sname} className='inpfield' placeholder='First' type="text"></input><p className='danger' id="fname">{sfname}</p></div>
            <div><input placeholder='Last' ref={sLname} className='inpfield' onChange={inplname}  type="text"></input><p className='danger' >{slname}</p></div>
            </div>
             <p className='pname'>Date of Birth</p>
             <div><input className='inpfield1' ref={sdob} type="Date"></input></div>
             <p className='pname'>Gender</p>
             <div><input className='inpfield2' ref={smradio} name="a" type="radio"></input><span>Male</span>
             <br></br><input className='inpfield2' ref={sfradio} name="a" type="radio"></input><span>Female</span></div>
             <p className='pname'>Detail Of Skill</p>
            <div><textarea onChange={textareadetail} ref={stextareaf} ></textarea><p className='danger'>{stextarea}</p></div>
            <h2 className='pname'>Parent Information</h2>
            <p className='pname'>Father's Name</p>
            <div id='m1'><div><input onChange={inpfname} ref={sffname} className='inpfield' placeholder='First' type="text"></input><p>{ffname}</p></div>
            <div><input placeholder='Last' ref={sflname} onChange={inpflname} className='inpfield'  type="text"></input><p className='danger'>{flname}</p></div>
            </div>
             <p className='pname'>Father's Qualification</p>
             <div><input className='inpfield1' ref={fedu} type="text"></input></div>
             <p className='pname'>Phone and Email</p>
             <div id='m1'><div><input ref={sfnum} onChange={fphonenum} className='inpfield' placeholder='Enter Your Phone Number' type="text"></input><p className='danger'>{fnum}</p></div>
            <div><input placeholder='Enter Your Email' onChange={femail} ref={sfemail} className='inpfield'  type="text"></input><p className='danger'>{fmail}</p></div>
            </div>
            <p className='pname'>Father's Occupation</p>
             <div><input className='inpfield1' ref={foccup} type="text"></input></div>
             <p className='pname'>Mother's Name</p>
             <div id='m1'><div><input onChange={mFname} ref={smfname} className='inpfield' placeholder='First' type="text"></input><p className='danger'>{mfname}</p></div>
            <div><input placeholder='Last' ref={smlname}   onChange={mLname} className='inpfield'  type="text"></input><p className='danger'>{mlname}</p></div>
            </div>
             <p className='pname'>Mother's Qualification</p>
             <div><input className='inpfield1' ref={medu} type="text"></input></div>
             <p className='pname'>Phone and Email</p>
             <div id='m1'><div><input ref={smnum} onChange={Mphonenum} className='inpfield' placeholder='Enter Your Phone Number' type="text"></input><p className='danger'>{mnum}</p></div>
            <div><input placeholder='Enter Your Email' ref={smemail} onChange={Memail} className='inpfield'  type="text"></input><p className='danger'>{mmail}</p></div>
            </div>
            <p className='pname'>Mother's Occupation</p>
             <div><input className='inpfield1' ref={moccup} type="text"></input></div>
             <p className='pname'>Address</p>
             <div><input className='inpfield1' ref={address} type="text"></input></div>
             <div><button onClick={formsubmit}>Submit</button></div>
        </div>
        </form>
      </div>

     </div>
    </>
  )
}

export default Formvalidation