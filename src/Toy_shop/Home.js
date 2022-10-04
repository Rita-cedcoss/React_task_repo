import React from 'react'
import { Link } from 'react-router-dom'
import Shop from './Shop'

function Home() {
  return (
    <>
     <div id="homeouter">
     <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img id="slideimg" src="https://www.dalmamall.ae/media/2531/hero-banner1400x500-toys3.png?center=0.50549450549450548,0.50196078431372548&mode=crop&width=1190&height=425&rnd=131846966350000000" alt="Los Angeles" class="d-block" style={{"height":"500px","width":"100%"}}/>
  </div>
  <div class="carousel-item">
    <img src="https://blobsvc.wort.lu/picture/be599a06148d31bb09ba71cb6fdd580d/1200/800/wortv3/04725d32d6597da6dfd5cca2b5b0401a25e9a60c" alt="Chicago" class="d-block" style={{"height":"500px", "width":"100%"}}/>
  </div>
  <div class="carousel-item">
    <img src="https://im.whatshot.in/img/2019/Oct/toy3-1570176631.jpg" alt="New York" class="d-block" style={{"height":"500px","width":"100%"}}/>
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div> 
     </div>

     <div id="middle">
      <div className="middiv1">
        <img alt="" src="delever.png" height="40%" width="50%"></img>
        <h4>FAST DELIVERY</h4>
        <p>
          Aspernatur magnam unde dolores necessitatibus nihil, numquam eaque recusandae corporis ullam
        </p>
      </div>
      <div className="middiv1">
      <img alt="" src="bestquality.png" height="40%" width="50%"></img>
        <h4>BEST QUALITY</h4>
        <p>
          Aspernatur magnam unde dolores necessitatibus nihil, numquam eaque recusandae corporis ullam
        </p>
      </div>
      <div className="middiv1">
      <img alt="" src="freeshipping.png" height="40%" width="50%"></img>
        <h4>FREE SHIPING</h4>
        <p>
          Aspernatur magnam unde dolores necessitatibus nihil, numquam eaque recusandae corporis ullam
        </p>
      </div>
      </div>
      <div id="bottom">
        <div className="botLeft">
          <img alt="" src="https://html.design/demo/zoutoys/images/about-img.jpg" height="100%" width="100%"></img>
        </div>
        <div className="botLeft">
          <h2>About Us</h2>
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
        </div>
        <div id="bottomtop">
        <h2>New Arrivals</h2>
        <div id="bottom1">  
         <div className="bottom1div">
         <img alt='' height="80%" width="80%" src="https://rukminim1.flixcart.com/image/416/416/kcnp8y80/stuffed-toy/d/f/y/soft-toys-teddy-bear-70-cm-70-sterling-original-imaftqknjbgjfrgy.jpeg?q=70"></img> 
        <h3>Toy For Kids</h3>
         </div>  
         <div className="bottom1div">
         <img alt='' height="80%" width="80%" src="https://i.pinimg.com/736x/0a/19/85/0a1985c684739b55f851ea877a93f35e.jpg"></img> 
         <h3>Toy For Kids</h3>
         </div>  
         <div className="bottom1div">
         <img alt='' height="80%" width="80%" src="https://rukminim1.flixcart.com/image/416/416/jhgl5e80/doll-doll-house/p/f/g/barbie-birthday-wishes-doll-barbie-original-imaf5hbvhm4qyxnh.jpeg?q=70"></img> 
         <h3>Toy For Kids</h3>
          </div>  
         <div className="bottom1div">
         <img alt='' height="80%" width="80%" src="https://m.media-amazon.com/images/I/51g-F-rictL._AC_.jpg"></img> 
         <h3>Toy For Kids</h3>
          </div>  
          
        </div>
        <button id="btnshop"><Link to="/shop">Shop Now</Link></button>  
        </div>
    </>
  
  )
}

export default Home