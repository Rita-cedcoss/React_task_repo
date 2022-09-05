import React, { Component } from 'react'

export class Component2 extends Component {
  render(props) {
    return (
      <>
       <div id="imageComp1">
         <img src={this.props.imgComp1} alt=''></img>
         <h1>{this.props.prodName}</h1>
         <p>{this.props.prodPrice}</p>
         <button>{this.props.btnText}</button>
       </div>
      </>
    )
  }
}

export default Component2