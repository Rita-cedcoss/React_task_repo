import React, { Component, createRef } from 'react'
import './task4.css'

class Userlist extends Component {
   inpval=createRef();
//    username;
    arr=[];
   constructor(props) {
     super(props)
     
     this.state = {
        inpval1:'',
        userarr:this.arr,
     }
   }
    addUserDetail=()=>
   {
    this.username=this.inpval.current.value;  
    this.obj={uname:this.username};
    this.arr.push(this.obj);
    this.setState({
        inpval1:this.username,
    })
    this.setState({
        userarr:this.arr
    })
    console.log(this.state.userarr)
    this.inpval.current.value="";
    this.inpval.current.focus();
   }
   delete=(e)=>
   {
    let index=e.target.getAttribute("index");
    console.log(index);
    this.state.userarr.splice(index,1);
    this.setState({
    userarr:this.arr,
    })
   }
    render() {
    return (
      <>
      <div id="task4">
      <div id="addDetail">
         <input type="text" ref={this.inpval}></input>
         <button onClick={this.addUserDetail}>Submit</button>
         <div id="productDetail">
            <table>
         {
            this.state.userarr.map((item,i)=>{return<tr><td id="lefttd"><button index={i} onClick={this.delete}>X</button></td><td id="righttd">{item.uname}</td></tr>})
         }
         </table>
         </div>
      </div>
      
    </div>
      </>
    )
  }
}

export default Userlist