import React, { useState } from 'react'
import './billgenerator.css'
var bill;
function Billgenerator() {
   const[billcalculation,setBillcalculation]=useState();
   const billgenerator=()=>
   {
    var inputVal=document.getElementById("billinp").value;
    if(inputVal==="")
    {
        bill="Please Enter the units in unit box";
    }
    else if(inputVal<=50)
    {
    bill="Your Bill is:"+inputVal*(3.50); 
    } 
    else if(inputVal>50 && inputVal<151)
    {
        bill="Your Bill is:"+inputVal*(4.0); 
    }
    else if(inputVal>150 && inputVal<251)
    {
        bill="Your Bill is:"+inputVal*(5.20);
    }
    else
    {
        bill="Your Bill is :"+inputVal*(6.50);
    }
    setBillcalculation(bill);   
    console.log(billcalculation);
}
    return (
    <div id="billouter">
      <div id="bill_main">
        <h1>Bill Calculator </h1><hr></hr><br/>
         <span>Unit :</span>
         <input id="billinp" type="number"></input>
         <br></br>
         <button id="btnbill" onClick={billgenerator}>Bill Calculator</button>
         <h4>{billcalculation}</h4>
      </div>
    </div>
  )
}

export default Billgenerator