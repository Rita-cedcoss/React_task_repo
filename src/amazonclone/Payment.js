import React from 'react'
import { Link } from 'react-router-dom'

const Payment = (props) => {
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
        <div id="paymentinner">
            <div id="left">
                <h3>Enter Your Payment Detail</h3>
                <p>Card Holder's Name</p>
                <input type="text" id="name"></input>
                <p>Card Number</p>
                <input type="text" id="num"></input>
                <p>Expiry Date</p>
                <input type="text" id="date"></input>
                <p>CVV</p>
                <input type="text" id="cvv"></input><br></br>
                <button id="btnpay" onClick={props.payamount}>Make a Payment</button>
            </div>
            <div id="right">
                <div id="rpaytop"><h3>Total Amount={props.gpay}</h3></div>
                <div id="rpaybottom"><img alt="" height="100%" width="100%" src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126089.jpg?w=2000"></img></div>
            </div>
        </div>
   </>
  )
}

export default Payment