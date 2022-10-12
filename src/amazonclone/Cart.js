import React from 'react'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    let grandTotal=0;
  // if(props.arrCart>0){
    return (
   <>
      <div id="navbar">
        <Link to="/home"><img
            id="img-logo"
            src="amzonlog-removebg-preview.png"
            alt=""
            height="40%"
            width="10%"
          ></img>
      </Link>
          <p>
            <i
              class="fas fa-map-marker-alt"
              style={{ fontSize: "20px", color: "white" }}
            ></i>{" "}
            Select Your Address{" "}
          </p>
          <div id="searchdiv">
            <input type="text"></input>
            <button id="btnsearch">Search</button>
          </div>
          <div className="divnav">
            <p>English</p>
            <img
              alt=""
              height="40%"
              width="50px"
              src="https://flagman.ie/flags/wp-content/uploads/2015/10/India-Flag-600x360.png"
            ></img>
          </div>
          <div className="divnav">
            <p>Helo Sign In</p>
            <p>Account and List</p>
          </div>
          <div className="divnav">
            <p>Return and orders</p>
          </div>
          <div className="divnav">
            <Link to="/cart"><p>
              <i
                class="fas fa-shopping-cart"
                style={{ fontSize: "20px", color: "white" }}
              ></i>
              cart
            </p>
            </Link>
          </div>
        </div>
        <div id="navbottom">
          <p>
            <i
              class="fa fa-bars"
              style={{ fontSize: "20px", color: "white" }}
            ></i>
            All
          </p>
          <p>Sell</p>
          <p>Best Sellers</p>
          <p>Today's Deals</p>
          <p>Mobiles</p>
          <p>Customer Services</p>
          <p>Electronics</p>
          <p>Books</p>
          <p>Fashion</p>
          <p>Home and Kitchens</p>
          <p>Prime</p>
          <img alt="" height="39px" width="400px" src="navimage.jpg"></img>
        </div>

    <div id="cartid" >
    <table>
      <th>Product Id</th><th>Product Image</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th><th>Amount</th><th>Action</th>
    {
  props.arrCart.map(
    (element,i) => {
         grandTotal=parseInt(grandTotal)+parseInt( element.calprice);
         console.log(grandTotal);
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
{/* <div><Link to="/payment">Proceed to payment</Link></div> */}
<div><button id="btnproceed" gtot={grandTotal} onClick={props.pay}>Proceed to payment</button></div>
</div>
   </>
  )
// }
// else{
//   <>
//    <div id="navbar">
//         <Link to="/home"><img
//             id="img-logo"
//             src="amzonlog-removebg-preview.png"
//             alt=""
//             height="40%"
//             width="10%"
//           ></img>
//       </Link>
//           <p>
//             <i
//               class="fas fa-map-marker-alt"
//               style={{ fontSize: "20px", color: "white" }}
//             ></i>{" "}
//             Select Your Address{" "}
//           </p>
//           <div id="searchdiv">
//             <input type="text"></input>
//             <button id="btnsearch">Search</button>
//           </div>
//           <div className="divnav">
//             <p>English</p>
//             <img
//               alt=""
//               height="40%"
//               width="50px"
//               src="https://flagman.ie/flags/wp-content/uploads/2015/10/India-Flag-600x360.png"
//             ></img>
//           </div>
//           <div className="divnav">
//             <p>Helo Sign In</p>
//             <p>Account and List</p>
//           </div>
//           <div className="divnav">
//             <p>Return and orders</p>
//           </div>
//           <div className="divnav">
//             <Link to="/cart"><p>
//               <i
//                 class="fas fa-shopping-cart"
//                 style={{ fontSize: "20px", color: "red" }}
//               ></i>
//               cart
//             </p>
//             </Link>
//           </div>
//         </div>
//         <div id="navbottom">
//           <p>
//             <i
//               class="fa fa-bars"
//               style={{ fontSize: "20px", color: "white" }}
//             ></i>
//             All
//           </p>
//           <p>Sell</p>
//           <p>Best Sellers</p>
//           <p>Today's Deals</p>
//           <p>Mobiles</p>
//           <p>Customer Services</p>
//           <p>Electronics</p>
//           <p>Books</p>
//           <p>Fashion</p>
//           <p>Home and Kitchens</p>
//           <p>Prime</p>
//           <img alt="" height="39px" width="400px" src="navimage.jpg"></img>
//         </div>
//         <div><h3>Cart is empty</h3></div>
//   </>
// }
}

export default Cart