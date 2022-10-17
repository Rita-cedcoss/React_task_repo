import React from 'react'
const Home = (props) => {
  return (
   <>
    <div id="homeouter">
        <div id="homeleft">
          <p>Lucknow Veg Express</p>
          <img alt="" height="30px" width="100px" src="star1.png"></img>
          <p>Average 3.5/5</p>
          <div id="homeleftdiv"><p>Fresh Fruits</p></div>
          <div id="homeleftdiv"><p>Fresh Vegetables</p></div>
          <div id="homeleftdiv"><p>Dry Fruits</p></div>
          <div id="homeleftdiv"><p>Dairy Product</p></div>
          <div id="homeleftdiv"><p>Frozen Products</p></div>
        </div>
        <div id="homeright">
            <div id="hometop">
            <p>Order Timing : 8:00 am To 6:00 pm </p>
                    <button className='btnstore'>Store Close</button>
                    <button className='btnoffers'>My Offers </button>
                    <button className='btnstore'>Page Like</button>
            </div>
            <div id="homebottom">
               <div id="bttop">
                <img id="homebttop" alt='' src="http://www.way2door.com/images/stores/banner_1574312382banner-lucknow-veg-express-min.png"></img>
               </div>
               <div id="homebtbottom">
                <div className="gridcontainer">
                {
                 props.arr.map((item,i)=>{

                  return(
                    <>
                    <div className="gridbottom">
                     <img height="40%" alt="" width="80%" src={item.image}></img> 
                     <p>{item.productname}</p>
                     <div id="gridin1">
                      <span>Rs.{item.price}</span><span>{item.quantity}</span>
                     </div>
                     <div id="gridin">
                     <input type="button" className='inp'  value="-" onClick={props.decrement}/> <span id="spanid" indx={i}>{item.prodquantity}</span><input type="button" indx={i} className='inp' value="+" onClick={props.increment}/><button className='btnadd' ind={i} onClick={props.addcart} quant={item.prodquantity}>Add to Cart</button>
                     </div>
                     </div>
                    </>
                  )
                 })
                }
                </div>
               </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Home