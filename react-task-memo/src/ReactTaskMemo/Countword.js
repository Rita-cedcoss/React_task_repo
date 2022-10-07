import React, { useState } from 'react'

const Countword = () => {
    const[letter,setletter]=useState();
    const[count,setCount]=useState();
    const[character,setCharacter]=useState();
   const lowercase=()=>
   {
        let text=document.getElementById("word").value;
        let countword=text.toLowerCase();
        let wordcount=text.split(" ").length;
        let char=text.length;
        setCharacter(char);
        setCount(wordcount);
        setletter(countword);
        document.getElementById("dispword").setAttribute("class","displayBlock");
   }
   const uppercase=()=>
   {
    let text=document.getElementById("word").value;
    let char=text.length;
    setCharacter(char);
    let countword=text.toUpperCase();
    let wordcount=text.split(" ").length;
    setCount(wordcount);
    setletter(countword);
    document.getElementById("dispword").setAttribute("class","displayBlock");
   }
  return (
    <div id="countword" >
        <textarea id="word" value={letter}></textarea><br></br>
        <button onClick={uppercase} className='btncount'>Uppercase</button>
        <button onClick={lowercase} className='btncount'>Lowercase</button>
        <div id="dispword" className='displaynone'><p>{count} words {character} character</p></div>
    </div>
  )
}

export default Countword