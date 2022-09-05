import React, { Component } from 'react'
import './Component.css'
import Component2 from './Component2'
class Component1 extends Component {
  render() {
    return (
     <>
      <div id="outer">
        <div id="upperComponent">
            <Component2 imgComp1="https://t4.ftcdn.net/jpg/00/96/13/71/360_F_96137109_ojPuIAl4e3LqslKAMxJ5CgmbqOQeCcHr.jpg" prodName="Football" prodPrice="$150" btnText="Add to cart"></Component2>
            <Component2 imgComp1="https://i.pinimg.com/originals/a3/b6/ee/a3b6ee2cac3066b2300ce288d7127e03.png" prodName="Tennis" prodPrice="$120" btnText="Add to cart"></Component2>
            <Component2 imgComp1="https://m.media-amazon.com/images/I/81TXO9F4aHL._AC_SX425_.jpg" prodName="Basket Ball" prodPrice="$90" btnText="Add to cart"></Component2>
        </div>
        <div id="lowerComponent">
        <Component2 imgComp1="https://www.allabouttabletennis.com/images/xushaofa-ball.jpg" prodName="Table Tennis" prodPrice="$110" btnText="Add to cart"></Component2>
        <Component2 imgComp1="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1928px-Football_%28soccer_ball%29.svg.png" prodName="Soccer" prodPrice="$80" btnText="Add to cart"></Component2>
        </div>
      </div>
     
     </>
    )
  }
}

export default Component1