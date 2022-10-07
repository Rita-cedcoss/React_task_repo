import React from 'react'

const Memocomp = ({name}) => {
    console.log("Memo component");
  return (
    <div>{name}</div>
  )
}

export default React.memo( Memocomp)