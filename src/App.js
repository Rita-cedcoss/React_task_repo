import logo from './logo.svg';
import './App.css';
import Component1 from './Shopping_Cart/Component1';
import './Shopping_Cart/Component.css'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Shopping_Cart/Cart';
function App() {
 
  let  arrProduct=[
    {
       "id":"1",
       "image":"https://m.media-amazon.com/images/I/616kuuRyy-L._SL1024_.jpg",
       "productname":"Toy Bicycle",
       "price":"250",
       "quantity":"1",
       "prodquantity":"1",
       "calprice":"",
       "discription":"A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels",
    },
    {
      "id":"2",
      "image":"https://i.pinimg.com/736x/42/9c/2b/429c2b9a3525b7f9fed41d26670501b9.jpg",
      "productname":"Train",
      "price":"350",
       "quantity":"1",
       "prodquantity":"1",
       "calprice":"",
      "discription":"A toy train is a toy that represents a train. It is distinguished from a model train by an emphasis on low cost and durability, rather than scale modeling.",
   },
   {
      "id":"3",
      "image":"https://rukminim1.flixcart.com/image/416/416/k6tniq80/doll-doll-house/w/h/h/cute-realistic-baby-doll-toy-with-movable-body-parts-for-kids-original-imafp7gyhdxuhf9e.jpeg?q=70",
      "productname":"Doll",
      "price":"200",
       "quantity":"1",
       "prodquantity":"1",
       "calprice":"",
      "discription":"A doll is a toy that looks like a small person, often a baby. When kids play with dolls, they might dress them up, push them in toy strollers, and have pretend tea parties with them.",
   }
   ,{
      "id":"4",
      "image":"https://m.media-amazon.com/images/I/71olYvEpf0L._SY355_.jpg",
      "productname":"teddy bear",
      "price":"350",
      "quantity":"1",
      "prodquantity":"1",
      "calprice":"",
      "discription":"Early teddy bears were made to look like real bears, with extended snouts and beady eyes. Modern teddy bears tend to have larger eyes and foreheads and smaller noses, babylike features intended to enhance the toy's ",
   },
   {
      "id":"5",
      "image":"https://m.media-amazon.com/images/I/31JiOlc9pqL._SY355_.jpg",
      "productname":"rubber ducky",
      "price":"200",
      "quantity":"1",
      "prodquantity":"1",
      "calprice":"",
      "discription":"A rubber duck or a rubber ducky is a toy shaped like a stylized duck, generally yellow with a flat base. It may be made of rubber or rubber-like material",
   },
   {
    "id":"6",
    "image":"https://s3.dutchcrafters.com/product-images/pid_12462-Deluxe-Amish-Rocking-Horse--5.jpg",
    "productname":"Rocking-Horse",
    "price":"500",
    "quantity":"1",
    "prodquantity":"1",
    "calprice":"",
    "discription":"A rocking horse is a toy horse which a child can sit on and which can be made to rock backwards and forwards."
 }]
   const [cartArr,setCartarr]=useState([]);
   const [modal,setModal]=useState(false);
  const add_cart=(e)=>{
      let indx=e.target.getAttribute("index");
      let temp=-1;
      for(let i=0;i<cartArr.length;i++)
      {
         if(cartArr[i].id===arrProduct[indx].id)
         {
          temp=i;
         }
      }
      if(temp>=0)
      {
        cartArr[temp].quantity++;
        cartArr[temp].calprice=parseInt(cartArr[temp].price)*parseInt(cartArr[temp].quantity);
        alert("Product Added in cart");
      }
      else{
        arrProduct[indx].calprice=arrProduct[indx].price;
        cartArr.push(arrProduct[indx]);
        alert("Product Added in cart");
      }
      setCartarr([...cartArr]);
      console.log(cartArr);
  }
  const increment=(e)=>{
    let ind=e.target.getAttribute("index");
    
    cartArr[ind].quantity=parseInt(cartArr[ind].quantity)+parseInt(1);
    cartArr[ind].calprice=parseInt(cartArr[ind].price)*parseInt(cartArr[ind].quantity);
    setCartarr([...cartArr]); 
    console.log(cartArr);
  }
  const decrement=(e)=>{
    let ind=e.target.getAttribute("ind");
    console.log(ind);
    if(cartArr[ind].quantity>1)
    {
      cartArr[ind].quantity--;
      cartArr[ind].calprice=parseInt(cartArr[ind].price)*parseInt(cartArr[ind].quantity);
    }
    setCartarr([...cartArr]);
  }
  const cartEmpty=()=>{
     setCartarr([]);
  }
  const remove=(e)=>{
     let ind=e.target.getAttribute("index");
    cartArr.splice(ind,1);
    setCartarr([...cartArr]);
  }
  return (
    <>
       
    <Routes>
      <Route path='/' element={<Component1 arrProduct={arrProduct} add_cart={add_cart} setModal={setModal}/>}></Route>
      <Route path="/cart" element={<Cart increment={increment} cartEmpty={cartEmpty} remove={remove} decrement={decrement} cartArr={cartArr}></Cart>}></Route>
    </Routes>
   
    </>
  );
}

export default App;
