import React, { Component } from 'react'
 class Task4ClassComp extends Component {
    render() {
    return (
      <div><h1>Task4 Addition of two numbers</h1>
          <p>{eval(this.props.num1+this.props.operator+this.props.num2)}</p>
      </div>
    )
  }
}

export default Task4ClassComp