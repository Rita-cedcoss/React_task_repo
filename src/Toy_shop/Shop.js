import React from 'react'
import Productdescription from './Productdescription';

const Shop = (props) => {
  // console.log(props.a);
  return (
    <>
    <div id="productouter"> 
        <div id="Procduct">
            
            {
               props.prodarr.map((item,i)=>{
                  return(
                     <div className="productdetail" idx={item.id} index={i} onClick={props.propdisp} >
                     <img className='imgproduct' alt='img' src={item.image} style={{height:"30%",width:"80%"}}></img>
                     <p>{item.productname}</p>
                     <p>{item.quantity}/Rs-{item.price}</p>
                  </div>
                  )
               })
            }
           
        </div>
        
    </div>
    <Productdescription index={props.arrindex} add={props.funadd}></Productdescription>
    </>
  )
}

export default Shop