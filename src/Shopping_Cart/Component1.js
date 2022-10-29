import React from 'react'
import { Link } from 'react-router-dom'

const Component1 = (props) => {
    // console.log(props.arrProduct);
    return (
    <div id="outer">
        <div id="Navbar">
            <div id="left"><Link to="/"><h1>Shopping_Cart Website</h1></Link></div>
            <div id="right">
               <Link to="/cart"><img height="90%" width="15%" alt="" src='img_cart.png'></img></Link> 
            </div>
        </div>
        <div>
            <div id="grid_container">
               {
                props.arrProduct.map((item,i)=>{
                    return(
                        <>
                        <div id="item">
                            <img alt='' height="70%" width="100%" src={item.image}></img>
                            <p>{item.productname}</p>
                            <p>{item.price}</p>
                            <button index={i} onClick={props.add_cart}>Add To Cart</button>
                        </div>
                        </>
                    )
                })
               }
                {/* <div id="item"></div>
                <div id="item"></div>
                <div id="item"></div>
                <div id="item"></div>
                <div id="item"></div> */}
            </div>
        </div>
    </div>
  )
}

export default Component1