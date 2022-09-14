import React, { createRef, useState } from 'react'
import './Product_Tbl.css'
import Producttblfunctionality from './Producttblfunctionality'
var skupname;var prodname;var prodprice;var prodquality; const product_arr=[];
function Product_table() { 
        const[display,setDisplay]=useState("blocknone");
        const skuname=createRef();
        const pname=createRef();
        const pprice=createRef();
        const pquality=createRef();
        const[prodarr,setProdarr]=useState([]);
    const productAdded=()=>
    { 
         skupname=skuname.current.value;
         prodname=pname.current.value;
         prodprice=pprice.current.value;
         prodquality=pquality.current.value;
         var obj={skupname:skupname,prodname:prodname,prodprice:prodprice,prodquality:prodquality};
         if(skupname===""|| prodname===""||prodprice===""||prodquality==="")
         {
            alert("Please fill all the feild");
         }
         else{
         product_arr.push(obj);
         setProdarr([...product_arr]);
         console.log(prodarr);
         setDisplay("block");
        }
    }
    return (
    <>
    <div id="wrapper">
		<div id="add_product_form">
			<label for="product_sku">
				<span>Product SKU</span> 
				<input type="number" class="errorTextbox" ref={skuname} name="product_sku" id="product_sku"/>
				<span class="error1"></span>
			</label>
			<label for="product_name">
				<span>Product Name</span> 
				<input type="text" class="errorTextbox" ref={pname} name="product_name" id="product_name"/>
				<span class="error2"></span>
			</label>
			<label for="product_price">
				<span>Product Price</span> 
				<input type="number" class="errorTextbox" ref={pprice} name="product_price" id="product_price"/>
				<span class="error3"></span>
			</label>
			<label for="product_quantity">
				<span>Product Quantity</span> 
				<input type="number" class="errorTextbox" ref={pquality} name="product_quantity" id="product_quantity"/>
				<span class="error4"></span>
			</label>
			<p class="submit">
				<button id="add_product" name="add_product" onClick={productAdded}>Add Product</button> 
			</p>
		</div>
		   <div id="tbl">
           <Producttblfunctionality arr={prodarr} classItem={display}></Producttblfunctionality>
           </div>
	</div>
    </>
  )
}

export default Product_table