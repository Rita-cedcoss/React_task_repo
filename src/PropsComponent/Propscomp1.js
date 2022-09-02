import React, { Component } from 'react'
import Propscomp2 from './Propscomp2'
class Propscomp1 extends Component {
  render() {
    return (
        <>
        <h1>First task</h1>
       <div>Hii {this.props.name}</div>
      <Propscomp2 name={this.props.name}></Propscomp2>
      </>
    )
  }
}

export default Propscomp1