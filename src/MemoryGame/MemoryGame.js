import React from 'react'

const MemoryGame = (props) => {
  return (
    <>
    <div id="outer">
             <h1>Memory Game</h1>
             <h2 id="result"></h2>
        <div id="gridContainer">
     
            {
                props.arr.map((item,i)=>{
                    return(
                        <>
                        <div className="grid" index={i}  onClick={props.clickHandler}><img height="100%" width="100%" src={item.img1}></img></div>
                        </>
                    )
                })
            }   
        </div>
    </div>
    </>
  )
}

export default MemoryGame