import React from 'react'
import { Link } from 'react-router-dom'

const Productdesp = (props) => {
  return (
    <>
     <div id="navbar">
         <Link to="/home"> <img
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
    <div id="proddescp" className='hidden' >
     <div id="prodDescpouter" >
        <div id="divDispimg"><img className='despimg' src={props.prodInd.image} alt=""></img></div>
        <div id="divDispCart">
            <h3>{props.prodInd.productname}</h3>
            <p>{props.prodInd.discription}</p>
            <h4>{props.prodInd.price}</h4>
             <button className="btncart"  ind={props.prodInd.id} onClick={props.addCart}>Add to Cart</button>
        </div>
     </div> 
    </div>
    </>
  )
}

export default Productdesp