import { Drawer } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
    if(props.cartArr.length>0)
    {
    let grandtotal=0;
  return (
    <>
    <div id="Navbar">
            <div id="left"><Link to="/"><h1>Shopping_Cart Website</h1></Link></div>
            <div id="right">
               <Link to="/cart"><img height="90%" width="15%" alt="" src='img_cart.png'></img></Link> 
            </div>
    </div>
    <div id="carttbl">
    <h2>Cart Item</h2>
    <table>
        <tr>
            <th>Id</th><th>image</th><th>Name</th><th>Price</th><th>quantity</th><th>Amount</th><th>Action</th>
        </tr>
    {props.cartArr.map((item,i)=>
    {
        grandtotal=parseInt(grandtotal)+parseInt(item.calprice);
      return(
       <tr>
        <td>{item.id}</td><td><img height="50px" width="50px" alt="" src={item.image}></img></td><td>{item.productname}</td><td>{item.price}</td><td><button className='btninc' ind={i} onClick={props.decrement}>-</button><span id="quant">{item.quantity}</span><button className='btninc' index={i} onClick={props.increment}>+</button></td><td>{item.calprice}</td><td><button index={i} id="btnremove" onClick={props.remove}>Remove</button></td>
       </tr>
      )
    })
    }
    <tr><td id="grandtot" colspan="7"><p>Grand Total={grandtotal}</p></td></tr>
    </table>
    <button id="cartempty" onClick={props.cartEmpty}>Empty Cart</button>
   </div>
    </>
  )
}
else{
    return(<>
    <div id="Navbar">
            <div id="left"><Link to="/"><h1>Shopping_Cart Website</h1></Link></div>
            <div id="right">
               <Link to="/cart"><img height="90%" width="15%" alt="" src='img_cart.png'></img></Link> 
            </div>
    </div>
    <h2>Cart is empty</h2>
    </>
    )
}
}

export default Cart