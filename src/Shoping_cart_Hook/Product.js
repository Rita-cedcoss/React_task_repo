import React, { useState } from 'react'
import Cart from './Cart';

const Product = () => {
    var products = [{"id":101,"name":"Basket Ball","image":"https://img.freepik.com/premium-photo/basketball-ball-white-background_93675-130644.jpg?w=2000","price":150,"quantity":"1","calprice":"150"},
    {"id":102,"name":"Football","image":"http://cdn.shopify.com/s/files/1/0877/6118/articles/footballglovesstickyspray_61cd82ed-c059-4d25-92ad-37de50f5ca1d_1024x1024.jpg?v=1563412448","price":120,"quantity":"1","calprice":"120"},
    {"id":103,"name":"Soccer","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_Bn0EvTFQnMnOnIn_T2nZOGso1qUlWOzEIWM3KXdPcifTOSCRm3fZpd6hWc0iEOoPdo&usqp=CAU","price":110,"quantity":"1","calprice":"110"},
    {"id":104,"name":"Table Tennis","image":"https://www.allabouttabletennis.com/images/xushaofa-ball.jpg","price":130,"quantity":"1","calprice":"130"},
    {"id":105,"name":"Tennis","image":"https://rukminim1.flixcart.com/image/416/416/k5msb680/ball/y/2/y/50-100-standard-2-5-cricket-tennis-ball-tennis-pack-of-1-tennis-original-imafz9uur3m42vke.jpeg?q=70","price":100,"quantity":"1","calprice":"100"}];
    const [cartArr,setCartarr]=useState([]);
    const addCart=(e)=>
    {
      let ind=e.target.getAttribute("index");
    let temp=-1;
      for(let i=0;i<cartArr.length;i++)
      {
        if(cartArr[i].id===products[ind].id)
        {
        temp=i;
        }
      }
      if(temp>=0)
      {
        cartArr[temp].quantity++;
        cartArr[temp].calprice=cartArr[temp].price*cartArr[temp].quantity;
        setCartarr([...cartArr]);
            
      }
      else{
      cartArr.push(products[ind]);
      setCartarr([...cartArr]);
      console.log(cartArr);
    }
    }
    const decrement=(e)=>
    {
       let index=e.target.getAttribute("ind");
       console.log(index);
       if(cartArr[index].quantity>1)
       {
       cartArr[index].quantity--;
       cartArr[index].calprice=cartArr[index].quantity*cartArr[index].price;
       }
       setCartarr([...cartArr]);
    }
    const increment=(e)=>
    {
      let index=e.target.getAttribute("index");
      console.log(index);
      cartArr[index].quantity++;
      cartArr[index].calprice=cartArr[index].price*cartArr[index].quantity;
      setCartarr([...cartArr]);
    }
    const itemremove=(e)=>
    {
      let ind=e.target.getAttribute("index");
      cartArr.splice(ind,1);
      setCartarr([...cartArr]);
    }
    const cartEmpty=()=>
    {
    setCartarr([]);
    }
    return (
    <div id="outer">
       <h1>React Shopping Cart</h1>  
        <div class="grid-container">
          {
            products.map((item,i)=>{
                return(
                    <>
                    <div class="grid-item">
                      <img alt="" height="50%" width="80%" src={item.image}></img>
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                      <button id="btnCart" index={i} onClick={addCart}>Add To Cart</button>
                    </div> 
                    </>
                )
            })
          } 
       </div>
       
       <Cart cartArr={cartArr} increment={increment} decrement={decrement} cartEmpty={cartEmpty} remove={itemremove}></Cart>
    
    </div>
  )
}

export default Product