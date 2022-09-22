import React, { useState } from 'react'
import './expensemanager.css'
let indexgrocery; let total=0;  let indexvegies;let indextravelling;let indexmiscel;let amount;let text;let expenseqdata; 
function Expensemanagersystem() {
    const[arrgrocery,setArrgrocery]=useState([]);
    const[arrveggies,setArrveggies]=useState([]);
    const[arrtravelling,setArrtravelling]=useState([]);
    const[arrmiscellaneous,setArrMiscellaneous]=useState([]);
    const[Income,setIncome]=useState('0');
    const[arrIncome,setArrincome]=useState([]);
    const[expense,setExpense]=useState('0');
    const[balance,setBalance]=useState('0');
    const[totalgrocery,setTotalgroce]=useState('0');
    const[totalvegies,setTotalvegies]=useState('0');
    const[totaltravel,setTotaltravel]=useState('0');
    const[totalmis,setTotalmis]=useState('0');
    
   const transaction=(event)=>
   {
     let selcat=document.getElementById("selcategory").value;
     let pricecategory=document.getElementById("selpricecat").value;
      text=document.getElementById("text").value;
         amount=document.getElementById("amount").value;
     let obj={name:text,amount:amount}
     let btnvalue=document.getElementById("transaction").innerHTML;
     console.log(btnvalue);
    if(btnvalue==="Add transaction"){
    if(selcat==="Grocery")
    {   
        if(pricecategory==="Expense"){
            arrgrocery.push(obj);
            var expenseamt4=parseInt(expense)-parseInt(amount);
            var balanceamt=parseInt(Income)+parseInt(expenseamt4);
            setBalance(balanceamt);
            let gtotal=parseInt(totalgrocery)+parseInt(amount);
            setTotalgroce(gtotal);
            setExpense(expenseamt4);
        }
        setArrgrocery([...arrgrocery]);
    }
    else if(selcat==="Veggies")
    {
        if(pricecategory==="Expense"){
            arrveggies.push(obj);
            var expenseamt3=parseInt(expense)-parseInt(amount);
            var balanceamt1=parseInt(Income)+parseInt(expenseamt3);
            let vtotal=parseInt(totalvegies)+parseInt(amount);
            setTotalvegies(vtotal);
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
            var balanceamt2=parseInt(Income)+parseInt(expenseamt1);
            let ttotal=parseInt(totaltravel)+parseInt(amount);
            setTotaltravel(ttotal);
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
            var balanceamt3=parseInt(Income)+parseInt(expenseamt);
            let mistotal=parseInt(totalmis)+parseInt(amount);
            setTotalmis(mistotal);
            setBalance(balanceamt3);
            setExpense(expenseamt);
        }
        setArrMiscellaneous([...arrmiscellaneous]);
    }
    else if(pricecategory==="Income")
    {
        var uincome=parseInt(Income)+parseInt(amount);
        var incbalance=parseInt(uincome)+parseInt(expense);
        setBalance(incbalance);
        setIncome(uincome);
        console.log(Income);
        arrIncome.push(obj);
        setArrincome([...arrIncome]);

        console.log(arrIncome);
    }
  }
  else if(btnvalue==="Update Transaction")
  {
    if(selcat==="Grocery")
    {
      if(pricecategory==="Expense")
      {
        arrgrocery[indexgrocery].name=document.getElementById("text").value;
        arrgrocery[indexgrocery].amount=document.getElementById("amount").value;
        setArrgrocery([...arrgrocery]);
        let groctotal=parseInt(totalgrocery)+parseInt(arrgrocery[indexgrocery].amount);
        setTotalgroce(groctotal);
        let expensgquant=parseInt(expense)-parseInt(arrgrocery[indexgrocery].amount);
        setExpense(expensgquant);
        let balancegroce=parseInt(Income)+parseInt(expensgquant);
        setBalance(balancegroce);
        document.getElementById("text").value=""
        document.getElementById("amount").value="";
        document.getElementById("transaction").innerHTML="Add transaction";
     }
    }
    else if(selcat==="Veggies")
    {
      if(pricecategory==="Expense")
      {
        arrveggies[indexvegies].name=document.getElementById("text").value;
        arrveggies[indexvegies].amount=document.getElementById("amount").value;
        setArrveggies([...arrveggies]);
        let vegtotal=parseInt(totalvegies)+parseInt(arrveggies[indexvegies].amount);
        setTotalvegies(vegtotal);
        let expensvquant=parseInt(expense)-parseInt(arrveggies[indexvegies].amount);
        setExpense(expensvquant);
        let balanceveg=parseInt(Income)+parseInt(expensvquant);
        setBalance(balanceveg);
        document.getElementById("text").value="";
        document.getElementById("amount").value="";
        document.getElementById("transaction").innerHTML="Add transaction";
     }
    }
    else if(selcat==="Travelling")
    {
      if(pricecategory==="Expense")
      {
        arrtravelling[indextravelling].name=document.getElementById("text").value;
        arrtravelling[indextravelling].amount=document.getElementById("amount").value;
        setArrtravelling([...arrtravelling]);
        let expenstravelquant=parseInt(expense)-parseInt(arrtravelling[indextravelling].amount);
        setExpense(expenstravelquant);
        let traveltotal=parseInt(totaltravel)+parseInt(arrtravelling[indextravelling].amount);
        setTotaltravel(traveltotal);
        let balancetravel=parseInt(Income)+parseInt(expenstravelquant);
        setBalance(balancetravel);
        document.getElementById("text").value=""
        document.getElementById("amount").value="";
        document.getElementById("transaction").innerHTML="Add transaction";
     }
    }
    else if(selcat==="Miscellaneous")
    {
      if(pricecategory==="Expense")
      {
        arrmiscellaneous[indexmiscel].name=document.getElementById("text").value;
        arrmiscellaneous[indexmiscel].amount=document.getElementById("amount").value;
        setArrtravelling([...arrtravelling]);
        let expensmisquant=parseInt(expense)-parseInt(arrmiscellaneous[indexmiscel].amount);
        setExpense(expensmisquant);
        let balancemis=parseInt(Income)+parseInt(expensmisquant);
        setBalance(balancemis);
        let mistotal=parseInt(totalmis)+parseInt(arrmiscellaneous[indexmiscel].amount);
        setTotalmis(mistotal);
        document.getElementById("text").value=""
        document.getElementById("amount").value="";
        document.getElementById("transaction").innerHTML="Add transaction";
     }
    }
  }
        document.getElementById("text").value="";
        document.getElementById("amount").value="";
        event.preventDefault();
   }
   const groceryDelete=(e)=>
   {
       let index=e.target.getAttribute("ind");
       let indamount=arrgrocery[index].amount;
       let expenseamt= parseInt(expense)+parseInt(indamount);
       let incomeamt=parseInt(Income)+parseInt(expenseamt);
       setBalance(incomeamt);
       setExpense(expenseamt);
       let gtotaldel=parseInt(totalgrocery)-parseInt(indamount);
       setTotalgroce(gtotaldel);
       arrgrocery.splice(index,1);   
       setArrgrocery([...arrgrocery]);
   }
   const veggiesDelete=(e)=>
   {
       let index=e.target.getAttribute("ind");
       let indamount=arrveggies[index].amount;
       let expenseamt= parseInt(expense)+parseInt(indamount);
       let incomeamt=parseInt(Income)+parseInt(expenseamt);
       setBalance(incomeamt);
       setExpense(expenseamt);
       let vtotal=parseInt(totalvegies)-parseInt(indamount);
       setTotalvegies(vtotal);
       arrveggies.splice(index,1);
       setArrveggies([...arrveggies]);
   }
   const travellingDelete=(e)=>
   {
     let index=e.target.getAttribute("ind");
     let indamount=arrtravelling[index].amount;
     let expenseamt= parseInt(expense)+parseInt(indamount);
     let incomeamt=parseInt(Income)+parseInt(expenseamt);
     setBalance(incomeamt);
     setExpense(expenseamt);
     let traveltotal=parseInt(totaltravel)-parseInt(indamount);
     setTotaltravel(traveltotal);    
     arrtravelling.splice(index,1);
     setArrtravelling([...arrtravelling]);
   }
   const misceldelete=(e)=>
   {
    let index=e.target.getAttribute("ind");
    let indamount=arrmiscellaneous[index].amount;
     let expenseamt= parseInt(expense)+parseInt(indamount);
     let incomeamt=parseInt(Income)+parseInt(expenseamt);
     setBalance(incomeamt);
     setExpense(expenseamt); 
     let mistotal=parseInt(totalmis)-parseInt(indamount);
     setTotalmis(mistotal);
    arrmiscellaneous.splice(index,1);
     setArrveggies([...arrmiscellaneous]);
   }
   
    const editgrocery=(e)=>
    {
      let valtext=e.target.getAttribute("valuetext");
      let valamount=e.target.getAttribute("valueamount");
      document.getElementById("selcategory").value="Grocery";
      document.getElementById("selpricecat").value="Expense";
      document.getElementById("text").value=valtext;
      document.getElementById("amount").value=valamount;
      document.getElementById("transaction").innerHTML="Update Transaction";
      indexgrocery=e.target.getAttribute("btnind");
      let gtotal=parseInt(totalgrocery)-parseInt(valamount)
      setTotalgroce(gtotal);
      expenseqdata=parseInt(expense)+parseInt(valamount);
      setExpense(expenseqdata);
      let balancegrocery=parseInt(Income)+parseInt(expenseqdata);
      setBalance(balancegrocery);
      console.log(expenseqdata);
      console.log(indexgrocery);
    }
    const editvegies=(e)=>
    {
      let valtext=e.target.getAttribute("valuetext");
      let valamount=e.target.getAttribute("valueamount");
      let vtotal=parseInt(totalvegies)-parseInt(valamount)
      setTotalvegies(vtotal);
      document.getElementById("selcategory").value="Veggies";
      document.getElementById("selpricecat").value="Expense";
      document.getElementById("text").value=valtext;
      document.getElementById("amount").value=valamount;
      document.getElementById("transaction").innerHTML="Update Transaction";
      indexvegies=e.target.getAttribute("btnind");
      console.log(indexvegies);
      expenseqdata=parseInt(expense)+parseInt(valamount);
      setExpense(expenseqdata);
      let balancevegies=parseInt(Income)+parseInt(expenseqdata);
      setBalance(balancevegies);
    }
    const edittravelling=(e)=>
    {
      let valtext=e.target.getAttribute("valuetext");
      let valamount=e.target.getAttribute("valueamount");
      document.getElementById("selcategory").value="Travelling";
      document.getElementById("selpricecat").value="Expense";
      document.getElementById("text").value=valtext;
      document.getElementById("amount").value=valamount;
      document.getElementById("transaction").innerHTML="Update Transaction";
      indextravelling=e.target.getAttribute("btnind");
      console.log(indextravelling);
      let ttotal=parseInt(totaltravel)-parseInt(valamount)
      setTotaltravel(ttotal);
      let expensetdata=parseInt(expense)+parseInt(valamount);
      setExpense(expensetdata);
      let balancetraveling=parseInt(Income)+parseInt(expensetdata);
      setBalance(balancetraveling);
    }
    const editmiscel=(e)=>
    {
      let valtext=e.target.getAttribute("valuetext");
      let valamount=e.target.getAttribute("valueamount");
      document.getElementById("selcategory").value="Miscellaneous";
      document.getElementById("selpricecat").value="Expense";
      document.getElementById("text").value=valtext;
      document.getElementById("amount").value=valamount;
      document.getElementById("transaction").innerHTML="Update Transaction";
      indexmiscel=e.target.getAttribute("btnind");
      let mistotal=parseInt(totalmis)-parseInt(valamount)
      setTotalmis(mistotal);
      let expensemisdata=parseInt(expense)+parseInt(valamount);
      setExpense(expensemisdata);
      let balancemis=parseInt(Income)+parseInt(expensemisdata);
      setBalance(balancemis);
    }    
  return (
     <>
     <h2>Expense Tracker </h2>
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
    <h3>Grocery <span>Total ={totalgrocery}</span></h3>
     <ul id="list" class="list">
        {
         arrgrocery.map((item,index)=>{
            return(
                <li class="minus" ind={index}>
                {item.name} <span>{item.amount}</span><button class="delete-btn" onClick={groceryDelete} ind={index}>x</button><button id="updategrocery" valuetext={item.name} valueamount={item.amount} btnind={index} onClick={editgrocery}>edit</button>
              </li>
            )
         })
        }
     </ul>
    </div>
    <div>
    <h3>Veggies <span>Total ={totalvegies}</span></h3>
     <ul id="list" class="list">
     {
         arrveggies.map((item,index)=>{
            return(
                <li class="minus">
                {item.name} <span>{item.amount}</span><button onClick={veggiesDelete} ind={index} class="delete-btn">x</button><button id="updatevegies" valuetext={item.name} valueamount={item.amount} btnind={index} onClick={editvegies}>edit</button>
              </li>
            )
         })
        }
     </ul>
    </div>
    <div>
    <h3>Travelling <span>Total ={totaltravel}</span></h3>
     <ul id="list" class="list">
     {
         arrtravelling.map((item,index)=>{
            return(
                <li class="minus">
                {item.name} <span>{item.amount}</span><button ind={index} onClick={travellingDelete} class="delete-btn">x</button><button id="updatetravelling" valuetext={item.name} valueamount={item.amount} btnind={index} onClick={edittravelling}>edit</button>
              </li>
            )
         })
        }
     </ul>
    </div>
    <div>
    <h3>Miscellaneous <span id="mis">Total ={totalmis}</span></h3>
     <ul id="list" class="list">
     {
         arrmiscellaneous.map((item,index)=>{
            return(
                <li class="minus">
                {item.name} <span>{item.amount}</span><button ind={index} onClick={misceldelete} class="delete-btn">x</button><button id="updatemisceldelete" valuetext={item.name} valueamount={item.amount} btnind={index}  onClick={editmiscel} >edit</button>               
              </li>
            )
         })
        }
     </ul>
    </div>
    <div>
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
     <button class="btn" id="transaction" onClick={transaction}>Add transaction</button>
  </form>
</div>
     </>
  )
}

export default Expensemanagersystem