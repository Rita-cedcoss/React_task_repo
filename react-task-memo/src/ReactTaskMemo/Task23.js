import React from 'react'
import { UserConsumer } from './userContext'

const Task23 = () => {
  return (
    <UserConsumer>
        {
            (username)=>
            {
                return(
                    <div><p>Task23 {username}</p></div>
                )
            }
        }
    </UserConsumer>
  )
}

export default Task23