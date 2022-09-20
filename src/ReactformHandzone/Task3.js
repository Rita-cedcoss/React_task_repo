import React, { useState } from 'react'
function Task3() {
    const daysarr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const [arr,setArr]=useState();
    const selectOption=(e)=>
    {
      let value=e.target.value;
      console.log(value);
      console.log(daysarr[value-1]);
      setArr(daysarr[value-1]);
    //   console.log(arr);
      e.preventDefault();

    }
  return (
    <form>
    <div>
        <h3>Create a Dropdown list that has entries from 1 to 7, onchange of this dropdown the respective day must be printed</h3>
        <select onChange={selectOption}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
        </select>
        <p>{arr}</p>
    </div>
    </form>
  )
}

export default Task3