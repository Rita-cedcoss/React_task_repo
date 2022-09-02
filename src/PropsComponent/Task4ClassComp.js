import React, { Component } from 'react'
 class Task4ClassComp extends Component {
    
   

    render() {
    return (
      <div>Task4 Addition of two numbers
          <p>{eval(this.props.num1+this.props.operator+this.props.num2)}</p>
      </div>
    )
  }
}

export default Task4ClassComp