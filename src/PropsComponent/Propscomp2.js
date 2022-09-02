import React, { Component } from 'react'
import Propscomp3 from './Propscomp3'
class Propscomp2 extends Component {
  render() {
    return (
        <>
      <Propscomp3 name={this.props.name}></Propscomp3>
      </>
    )
  }
}

export default Propscomp2