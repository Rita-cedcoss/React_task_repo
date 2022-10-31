import React from 'react'

const Sign_in = () => {
  return (
    <div id="outer">
        <div id="sign_in">
            <div id='top'>
                <img height="100%" width="100%" alt="" src='topsign_cleanup1.png'></img> 
            </div>
            <div id="sign_up_mid">
              <input placeholder='Username' type="text"/>
                <input placeholder='Full Name' type="text"/>
                <input placeholder='E-mail' type="text"/>
                <input placeholder='Password' type="text"/><br/>
                <input className='checkbox' type="checkbox"/><span className='checkbox_text'>Agree with term and Condition</span><br></br>
                <button>Sign-Up</button>
                <p>I am ready a member</p>
            </div>
        </div>
    </div> 
  )
}

export default Sign_in
