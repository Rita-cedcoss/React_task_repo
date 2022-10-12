import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Home = (props) => {
  return (
    <>
      <div id="homeouter">
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
        <div>
          <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                class="active"></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://i.gadgets360cdn.com/large/amazon_great_indian_festival_sale_2021_image_1_1633097531416.jpg"
                  alt="Los Angeles"
                  class="d-block"
                  style={{ width: "100%", height: "600px" }}/>
              </div>
              <div class="carousel-item">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/Diwali-Wave3/TEASER/TopBanner/Revised/PC_top-banner._CB450572186_.jpg"
                  alt="Chicago"
                  class="d-block"
                  width="100%"
                  height="600px"/>
              </div>
              <div class="carousel-item">
                <img
                  src="https://trak.in/wp-content/uploads/2021/09/IMG_20210913_141637-1024x550.jpg"
                  alt="New York"
                  class="d-block"
                  style={{ width: "100%", height: "600px" }}/>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
        <Product arr={props.arr} prodDisplay={props.prodDisplay}></Product>
      </div>
    </>
  );
};

export default Home;
