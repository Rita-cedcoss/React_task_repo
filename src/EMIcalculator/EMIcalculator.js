import React, { useState } from 'react'
import './EMIcalculator.css'
var Period;var interest;var emicalculate;var totalpayment;var totalInterest;
function EMIcalculator() {
  const[emiresult,setEmiresult]=useState();
  const[show,setShow]=useState("detail  ");
  const emiCalculation=()=>
  {
    var inpLoan=document.getElementById("inp1").value;//amount
    var inpInterest=document.getElementById("inp2").value;
    interest=inpInterest/100/12;
    var inpPeriod1=document.getElementById("inp3").value;
    var inpPeriod2=document.getElementById("inp31").value;
    Period=parseInt(inpPeriod1*12)+parseInt(inpPeriod2);//month calculate
    emicalculate=((inpLoan*interest*Math.pow(1+interest,Period))/(Math.pow(1+interest,Period)-1));
    document.getElementById("inp4").value=emicalculate;
    setEmiresult(emicalculate);
    console.log(emiresult);
    totalpayment=emicalculate*Period;
    console.log(totalpayment);
    totalInterest=totalpayment-inpLoan;
    console.log(totalInterest); 
  }
const reset=()=>
{
    document.getElementById("inp1").value="";
    document.getElementById("inp2").value="";
    document.getElementById("inp3").value="";
    document.getElementById("inp31").value="";
    document.getElementById("inp4").value="";
    setShow("detail");
    emicalculate="";
    totalpayment="";
    totalInterest="";
}
const detailShow=()=>
{
  setShow("detail1");
}
  return (
   <>
    <div id="Emiouter">
        <div id="main">
           <div id='header'><i class="fa fa-bars faico"></i><h1>EMI Calculator</h1></div>
           <div id="middle">
                <span className='emitext1'>Loan Amount</span><input id="inp1" type="number"></input><br></br>
                 <span className='emitext2'>Interest</span><input id="inp2" type="number"></input><br></br>
                  <span className='emitext3'>Period</span><input id="inp3" type="number"></input><input id='inp31' type="number"></input><br></br>
                  <span className='emitext4'>EMI</span><input id="inp4" type="number"></input>
                  <br></br>
                 <button onClick={emiCalculation}>Calculate</button>
                  <button onClick={reset}>Reset</button>
                  <button onClick={detailShow}>Details</button>
                  <div id="emiDetail" className={show}>
                    <table>
                     <tr>
                       <td>Monthly Emi</td>
                       <td>{emicalculate}</td>
                     </tr>
                     <tr>
                       <td>Total Interest</td>
                       <td>{totalInterest}</td>
                     </tr>
                     <tr>
                       <td>Total Payment</td>
                       <td>{totalpayment}</td>
                     </tr>
                    </table>
                  </div>
           </div>   
        </div> 
    </div>
   </>
  )
}
export default EMIcalculator