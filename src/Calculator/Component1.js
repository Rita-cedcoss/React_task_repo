import React, {useState } from 'react'
import './Component.css'
var flagDec=true;
function Component1() {   
     let [screen,setScreen]=useState(""); 
     const [result,setResult]=useState(""); 
    const btnAdd=(e)=>
    {
        var btn=e.target.getAttribute("value");
        setScreen(screen.concat(btn));       
    }
    const operator=(e)=>
    {
      flagDec=true;
      let lastElement=screen.length-1;
      if(screen[lastElement]==="+"||screen[lastElement]==="-"||screen[lastElement]==="*"||screen[lastElement]==="/")
      {
        return;
      }
      else if(screen===""&&(e.target.value==="/"||e.target.value==="*"||e.target.value==="+"||e.target.value==="-")){
        return;
      }
      else{
        screen=screen.concat(e.target.value);
      }
        setScreen(screen);
    }
    const decimal=(e)=>
    {
      if(flagDec===true)
     {
      screen=screen.concat(e.target.value); 
     }
     setScreen(screen);
     flagDec=false; 
    }
    const calculate=()=>
    {
        setResult(eval(screen).toString());
        setScreen("");
    } 
    const clear=()=>
    {
      setScreen("");
      setResult("");
    }
  return (
    <>   
    <div>
         <div id="outer">
        <h1>Calculator</h1>
      <div  className="container"> 
        <input type="text"  value={screen} name="screen" id="screen"/><br></br>
        <input type="text"  value={result} name="screen" id="screen"/><br></br>
         <table>  
            <tr id="btnC">
                <td><button onClick={clear}>C</button></td>      
            </tr>
            <tr>
                <td><button value="7" onClick={btnAdd}>7</button></td>
                <td><button value="8" onClick={btnAdd}>8</button></td>
                <td><button value="9"onClick={btnAdd}>9</button></td>
                <td><button value="*" onClick={operator}>X</button></td>
            </tr>
            <tr>
                <td><button value="4"onClick={btnAdd}>4</button></td>
                <td><button value="5"onClick={btnAdd}>5</button></td>
                <td><button value="6"onClick={btnAdd}>6</button></td>
                <td><button value="-" onClick={operator}>-</button></td>
            </tr>
            <tr>
                <td><button value="1"onClick={btnAdd}>1</button></td>
                <td><button value="2"onClick={btnAdd}>2</button></td>
                <td><button value="3"onClick={btnAdd}>3</button></td>
                <td><button value="+" onClick={operator}>+</button></td>
            </tr>
            <tr>
                <td><button value="0"onClick={btnAdd}>0</button></td>
                <td><button value="."onClick={decimal}>.</button></td>
                <td><button value="/" onClick={operator}>/</button></td>
                <td><button onClick={calculate}>=</button></td>
            </tr>
         </table>
        </div> 
    </div>
    </div>
    </>
  )
}

export default Component1