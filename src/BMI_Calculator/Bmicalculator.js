import React, { useState } from 'react'
import './bmicalculator.css'
var calBmi;var inp1;var inp2; var msg;
function Bmicalculator() {
   const[bmicalculation,setBmicalculation]=useState();
   const[bmimsg,setMessage]=useState();
   const calculation=()=>
   {
     inp1=document.getElementById("input1").value;
     inp2=document.getElementById("input2").value;
     var selectValue=document.getElementById("sel").value;
    if(selectValue==="kg-meters")
    {     
        if(inp1===""||inp2==="")
        {
            msg="Plaese enter the value in  all fields";
        }
        else if(inp1==="" && inp2==="")
       {
        msg="Plaese Enter Weight and height value";
       }
       else{
       calBmi=(inp1/(inp2*inp2));  
       if(calBmi<18.5)
       {
        msg="underweight";
       } 
       else if(calBmi>18.5 && calBmi<24.9)
       {
        msg="Healthy weight";
       }
       else if(calBmi>25.0 && calBmi<29.9)
       {
        msg="overweight";
       }
       else if(calBmi>=30.0){
        msg="obesity";
       }
      }
     }
  else if(selectValue==="Pond and inches")
    {
       if(inp1===""||inp2==="")
        {
            msg="Plese Enter the Value in all fields";
        }
        else if(inp1==="" && inp2==="")
        {
            msg="Plese Enter the Value of weight and height";
        }  
        else{
        calBmi=((inp1/(inp2*inp2))*703);
        if(calBmi<18.5)
        {
            msg="Underweight";
        }
        else if((calBmi>18.5 && calBmi<24.9))
        {
            msg="Healthy weight";
        }
        else if(calBmi>25.0 && calBmi<29.9)
        {
            msg="overweight";
        }
        else if(calBmi>=30)
        {
            msg="obesity";
        }
      }
    }
    setBmicalculation(calBmi);
    setMessage(msg);
   }
    return (
    <>
     <div id="bmiOuter">
      <div id="bmi_main">
        <h1>BMI Calculator</h1>
        <select id="sel">
            <option>select</option>
            <option>kg-meters</option>
            <option>Pond and inches</option>
        </select><br></br>
      <span>Weight :</span><input id="input1" type="number"></input><br></br>
      <span>Height : </span><input id="input2" type="number"></input><br></br>
      <button onClick={calculation} id="btnsubmit">Submit</button>
      <p>{bmicalculation}</p>
      <p>{bmimsg}</p>
      </div>
     
     </div>
    </>
  )
}

export default Bmicalculator