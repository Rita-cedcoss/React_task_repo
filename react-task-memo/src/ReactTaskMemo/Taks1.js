import React, { Component } from 'react'
import Memocomp from './Memocomp'
class Taks1 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           name:"Rita",
       }
     }
     componentDidMount()
     {
        setInterval(()=>{
            this.setState({
                   name:"Rita",
                })
        },2000)
     }
    render() {
        console.log("*****Parent Component*********");
    return (
      <div>Parent Component
        <Memocomp name={this.state.name}></Memocomp>
      </div>
    )
  }
}

export default Taks1