import React, { useState } from 'react'

function Fooddescription(props) {
  // const [dispProd,setDisp]=useState("showProduct");
 
  return (
    <>
    <div id="discriptionOuter" >
    <button onClick={props.showDiv} >Back</button>
       <div id="dispOuter">
       
        <img src={props.item.photograph}alt=""></img>
       <h1>Operational Hours ,</h1>
       <p>Monday:{props.item.operating_hours.Monday},
          Tuesday :{props.item.operating_hours.Tuesday},
          Wednesday:{props.item.operating_hours.Wednesday},
          Thursday:{props.item.operating_hours.Thursday},
          Friday: {props.item.operating_hours.Friday} ,
          Saturday:{props.item.operating_hours.Saturday},
          Sunday:{props.item.operating_hours.Sunday}
        </p><br/>
      <h1> reviews</h1>
       <p>{props.item.reviews[0].name}</p>
       <p>{props.item.reviews[0].date}</p>
       <p>{props.item.reviews[0].rating}</p>
       <p>{props.item.reviews[0].comments}
       </p><br/>
       <p>{props.item.reviews[1].name}</p>
       <p>{props.item.reviews[1].date}</p>
       <p> {props.item.reviews[1].rating}</p>
       <p>{props.item.reviews[1].comments}</p>
       <p>{props.item.reviews[2].name}</p>
       <p>{props.item.reviews[2].date}</p>
       <p>{props.item.reviews[2].rating}</p>
       <p>{props.item.reviews[2].comments}</p>           
       </div> 
    </div>
    </>
  )
}

export default Fooddescription