import React, { useContext } from 'react'
import { Context } from '../App'
const Context3 = () => {
     const context1=useContext(Context);
    return (
    <div>Context Value:{context1}
        
    </div>
  )
}

export default Context3