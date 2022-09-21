import React, { useState } from 'react'
import './expensemanager.css'
function Expensemanagersystem() {
    // let arrGrocery=[];
    const[arrgrocery,setArrgrocery]=useState([]);
    const[arrveggies,setArrveggies]=useState([]);
    const[arrtravelling,setArrtravelling]=useState([]);
    const[arrmiscellaneous,setArrMiscellaneous]=useState([]);
    const[Income,setIncome]=useState('0.00');
    const[arrIncome,setArrincome]=useState([]);
    const[expense,setExpense]=useState('0.00');
    const[balance,setBalance]=useState('0.00');
   const transaction=(event)=>
   {
     let selcat=document.getElementById("selcategory").value;
     let pricecategory=document.getElementById("selpricecat").value;
     let text=document.getElementById("text").value;
     let amount=document.getElementById("amount").value;
     let obj={name:text,amount:amount}
    if(selcat==="Grocery")
    {   
        if(pricecategory==="Expense"){
            arrgrocery.push(obj);
            var expenseamt4=parseInt(expense)-parseInt(amount);
            var balanceamt=parseInt(arrIncome)+parseInt(expenseamt4);
            setBalance(balanceamt);
            setExpense(expenseamt4);
            // setBalance(balanceamt);
        }
        setArrgrocery([...arrgrocery]);
    }
    else if(selcat==="Veggies")
    {
        if(pricecategory==="Expense"){
            arrveggies.push(obj);
            var expenseamt3=parseInt(expense)-parseInt(amount);
            var balanceamt1=parseInt(arrIncome)+parseInt(expenseamt3);
            setBalance(balanceamt1);
            setExpense(expenseamt3);
        }
        setArrveggies([...arrveggies]);
    }
    else if(selcat==="Travelling")
    {
        if(pricecategory==="Expense"){
            arrtravelling.push(obj);
            var expenseamt1=parseInt(expense)-parseInt(amount);
            var balanceamt2=parseInt(arrIncome)+parseInt(expenseamt1);
            setBalance(balanceamt2);
            setExpense(expenseamt1);
        }
        setArrtravelling([...arrtravelling]);
    }
    else if(selcat==="Miscellaneous")
    {
        if(pricecategory==="Expense"){
            arrmiscellaneous.push(obj);
            var expenseamt=parseInt(expense)-parseInt(amount);
            var balanceamt3=parseInt(arrIncome)+parseInt(expenseamt);
            setBalance(balanceamt3);
            setExpense(expenseamt);
        }
        setArrMiscellaneous([...arrmiscellaneous]);
    }
    else if(pricecategory==="Income")
    {
        // var incomeamt=parseInt(arrIncome)+parseInt(amount);
        // setArrincome(incomeamt);
        // var uincome=parseInt(Income)+parseInt(amount);
        // setIncome(uincome);
        arrIncome.push(obj);
        setArrincome([...arrIncome]);

        console.log(arrIncome);
    }
        console.log(text);
        console.log(amount);
        event.preventDefault();
   }
   const groceryDelete=(e)=>
   {
       let index=e.target.getAttribute("ind");
       arrgrocery.splice(index,1);
       setArrgrocery([...arrgrocery]);
     
   }
   const veggiesDelete=(e)=>
   {
    let index=e.target.getAttribute("ind");
    arrveggies.splice(index,1);
     setArrveggies([...arrveggies]);
   }
   const travellingDelete=(e)=>
   {
    let index=e.target.getAttribute("ind");
    arrtravelling.splice(index,1);
     setArrtravelling([...arrtravelling]);
   }
   const misceldelete=(e)=>
   {
    let index=e.target.getAttribute("ind");
    arrmiscellaneous.splice(index,1);
     setArrveggies([...arrmiscellaneous]);
   }
    
  return (
     <>
     <h2>Expense Tracker</h2>

     <div class="container">
       <h4>Your Balance</h4>
       <h1 id="balance">{balance}</h1>

     <div class="inc-exp-container">
        <div>
         <h4>Income</h4>
         <p id="money-plus" class="money plus">+{Income}</p>
        </div>
       <div>
        <h4>Expense</h4>
         <p id="money-minus" class="money minus">{expense}</p>
       </div>
     </div>
    <div>
    <h3>Grocery</h3>
     <ul id="list" class="list">
        {
         arrgrocery.map((item,index)=>{
            return(
                <li class="minus" ind={index}>
                {item.name} <span>{item.amount}</span><button class="delete-btn" onClick={groceryDelete} ind={index}>x</button>
              </li>
            )
         })

        }
       
     </ul>
    
    </div>
    <div>
    <h3>Veggies</h3>
     <ul id="list" class="list">
     {
         arrveggies.map((item,index)=>{
            return(
                <li class="minus">
                {item.name} <span>{item.amount}</span><button onClick={veggiesDelete} ind={index} class="delete-btn">x</button>
              </li>
            )
         })

        }
     </ul>
    </div>
    <div>
    <h3>Travelling</h3>
     <ul id="list" class="list">
     {
         arrtravelling.map((item,index)=>{
            return(
                <li class="minus">
                {item.name} <span>{item.amount}</span><button ind={index} onClick={travellingDelete} class="delete-btn">x</button>
              </li>
            )
         })

        }
     </ul>
    </div>
    <div>
    <h3>Miscellaneous</h3>
     <ul id="list" class="list">
     {
         arrmiscellaneous.map((item,index)=>{
            return(
                <li class="minus">
                {item.name} <span>{item.amount}</span><button ind={index} onClick={misceldelete} class="delete-btn">x</button>
              </li>
            )
         })

        }
     </ul>
    </div>
    <div>
    <h3>Income</h3>
     <ul id="list" class="list">
             {/* <li class="minus">
                Income<span>000</span><button class="delete-btn">x</button>
              </li> */}
              {
         arrIncome.map((item,index)=>{
            return(
                <li class="minus">
                {item.name} <span>{item.amount}</span><button ind={index} onClick={misceldelete} class="delete-btn">x</button>
              </li>
            )
         })

        }
     </ul>
    </div>
  <h3>Add new transaction</h3>
  <form id="form">
  <div class="form-control">
       <label for="text">Select Categories</label><br></br>
       <select id="selcategory">
        <option>select</option>
        <option>Grocery</option>
        <option>Veggies</option>
        <option>Travelling</option>
        <option>Miscellaneous</option>
       </select>
     </div>
     <div class="form-control">
       <label for="text">Text</label>
       <input type="text" id="text" placeholder="Enter text..." />
     </div>
     <div class="form-control">
       <label for="text">Select Amount Category</label><br></br>
       <select id="selpricecat">
        <option>select</option>
        <option>Expense</option>
        <option>Income</option>
       </select>
       {/* <input type="text" id="text" placeholder="Enter text..." /> */}
     </div>
     <div class="form-control">
        <label for="amount">Amount <br />
          (negative - expense, positive - income)</label>
        <input type="number" id="amount" placeholder="Enter amount..." />
     </div>  
     <button class="btn" onClick={transaction}>Add transaction</button>
  </form>
</div>
     </>
  )
}

export default Expensemanagersystem