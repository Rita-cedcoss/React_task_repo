import React from 'react'

const CardComponent=(props)=> {
  return (
     <>
     <div id="main">
     <div id="divComp" style={{backgroundColor:props.color}}>
        <div id="top" style={{borderBottom:props.borderColor}}>
            <h3>{props.Text1}</h3>
        </div>
        <div id="bottom">
             <h3>{props.Text3}</h3>
            <p>
            {props.Text2}
            </p>     
                
        </div>
     </div>
     </div>
     </> 
    )
}

export default CardComponent