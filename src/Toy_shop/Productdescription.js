import React from 'react'

const Productdescription = (props) => {
  return (
    <>
    {/* <div><p>helo</p></div> */}
    <div id="proddescp" className='hidden' >
     <div id="prodDescpouter" >
        <div id="divDispimg"><img className='despimg' src={props.index.image} alt=""></img></div>
        <div id="divDispCart">
            <h3>{props.index.productname}</h3>
            <p>{props.index.discription}</p>
            <h4>{props.index.price}/{props.index.quantity}</h4>
             <button className="btncart"  ind={props.index.id} onClick={props.add}>Add to Cart</button>
        </div>
     </div> 
    </div>
    </>
  )
}

export default Productdescription