import React, { useContext, useState } from 'react'
import {objArr} from '../App'
let calculation1;let calculation2;
const Cureencyconverter = () => {
    const obj=useContext(objArr);
    let arrowr="-->";
    let arrowl="<--";
    const[selval,setSelfromval]=useState();
    const[selfromval,setFromval]=useState();
    const[selvalto,setSelvalto]=useState();
    const[seldispto,setSeldispto]=useState();

   const selFrom=(e)=>
   {
      let selvalue=e.target.value;
     let index= e.target.selectedIndex;
      let option=e.target.childNodes[index];
      let valOpt=option.getAttribute("ele");
      setFromval(valOpt);
      let inpvalue=document.getElementById("inpval").value;
       calculation1=parseInt(selvalue)*parseInt(inpvalue);
      console.log(selvalue,inpvalue,calculation1);
      // setSelfromval(calculation1);
      // console.log(calculation1); 
   }
   const selTo=(e)=>
   {
      let selvalue=e.target.value;
      console.log(selvalue);
      let index= e.target.selectedIndex;
      let option=e.target.childNodes[index];
      let valOpt=option.getAttribute("ele");
      setSeldispto(valOpt);
      let inpvalue=document.getElementById("inpval").value;
       calculation2=parseInt(selvalue)*parseInt(inpvalue);
      console.log(selvalue,inpvalue,calculation2);
      // setSelvalto(calculation2);
      // console.log(calculation2); 
   }
   const exchange=()=>
   {
    setSelfromval(calculation1);
    console.log(calculation1); 
      setSelvalto(calculation2);
      console.log(calculation2);
    document.getElementById("disp").setAttribute("class","displayBlock");
   }
  return (
    <>
    <div id="currencyouter">
      <h1>Currency Converter</h1>
      <p>Enter Amount</p>
      <input type="text" id="inpval"></input>
      <div id="selectdiv">
        <div>
          <p>From</p>
          <select className="selleft" onChange={selFrom}>
            {
              Object.keys(obj).map((item,i)=>{
                // console.log(obj[item]);
                return(
                  <option index={i} ele={item} value={obj[item]}>{item}</option>
                )
              })
            }
          </select>
        </div>
        <div><button id="btnr">{arrowr}</button><br/><button id="btnl">{arrowl}</button></div>
        <div>
          <p>To</p>
          <select className="selleft" onChange={selTo}>
            {
              Object.keys(obj).map((item,i)=>{
                return(
                  <option index={i} ele={item} value={obj[item]}>{item}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div id="disp" className='displaynone'><p>{selfromval}:{selval} = {seldispto}:{selvalto}</p></div>
      <button id="btnrate" onClick={exchange}>Get Exchange Rate</button>
    </div>
    </>
  )
}

export default Cureencyconverter