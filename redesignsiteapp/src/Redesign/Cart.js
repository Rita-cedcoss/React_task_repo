import React from 'react'

const Cart = (props) => {
  let grandTotal=0;
  if(props.arrCart.length>0){
  return (
    <>
    <div id="cartid" >
    <table>
      <th>Product Id</th><th>Product Image</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th><th>Amount</th><th>Action</th>
    {
  props.arrCart.map(
    (element,i) => {
         grandTotal=parseInt(grandTotal)+parseInt( element.calprice);
        return (
          <>
              <tr><td>{element.id}</td><td><img id="cartimg" src={element.image} alt=""/></td><td>{element.productname}</td><td>{element.price}</td><td> <button className='btnIncdec' id="inpdec" indx={i} onClick={props.decrementCart} >-</button><input  type="number" ref={props.refinput} value={element.prodquantity} className='quantIncdec'/><button  id="btninc" className='btnIncdec' indx={i} onClick={props.incrementCart}>+</button></td><td>{element.calprice}</td><td><button id="remove" indx={i} onClick={props.remove}>Remove</button></td></tr>
          </>    
        )  
       
 }
)
}
<tr><td colspan="7"><p style={{textAlign:"right"}}>Grand Total={grandTotal}</p></td></tr>

</table>
</div>
    </>
  )
}
else{
  return(
    <div id="cartid" >
    <h1>Cart is empty</h1>
 </div>
  )
  
}
}

export default Cart