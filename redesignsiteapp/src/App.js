import logo from './logo.svg';
import './App.css';
import Navbar from './Redesign/Navbar';
// import './Redesign/component.css'
import './Redesign/Redesign.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Redesign/Home';
import { useState } from 'react';
import Cart from './Redesign/Cart';
function App() {
  const[cartArr,setCartarr]=useState([]);
  let arrProduct=[
    {
       "id":"1",
       "image":"https://m.media-amazon.com/images/I/71DYmqoq-VL._SL1024_.jpg",
       "productname":"Tomato",
       "price":"10",
        "prodquantity":"0",
         "calprice":"0",
       "quantity":"200g",
       "discription":"The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.",
    },
    {
      "id":"2",
      "image":"https://m.media-amazon.com/images/I/61yXL70-RaL._SX679_.jpg",
      "productname":"Potato",
      "price":"20",
       "quantity":"1kg",
       "prodquantity":"0",
       "calprice":"0",
      "discription":"The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable and a fruit native to the Americas. The plant is a perennial in the nightshade family Solanaceae.",
   },
   {
      "id":"3",
      "image":"http://cdn.shopify.com/s/files/1/1891/6405/products/shop-online-from-usa-vegetables-red-onion-fresh-food-in-dubai-and-abu-dhabi-24624338062_1200x1200.jpg?v=1536787851",
      "productname":"Onion",
      "price":"20",
       "quantity":"1kg",
       "prodquantity":"0",
       "calprice":"0",
      "discription":"An onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2010.",
   }
   ,{
      "id":"4",
      "image":"https://www.jiomart.com/images/product/600x600/590003545/brinjal-nagpure-500-g-product-images-o590003545-p590003545-0-202203152230.jpg",
      "productname":"Brinjal",
      "price":"20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
      "discription":"Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition",
   },
   {
      "id":"5",
      "image":"https://www.maaz.lk/wp-content/uploads/2021/05/Lady-FInger.jpg",
      "productname":"Ladie Fingers",
      "price":" 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
      "discription":"Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It has edible green seed pods.",
   },
   {
    "id":"6",
    "image":"https://media.istockphoto.com/photos/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-picture-id864053288?k=20&m=864053288&s=612x612&w=0&h=8HEr_Yxju24vyhbXlcbsOwJur5YP7s6tbDKo_JUaDjk=",
    "productname":"Papaya",
    "price":"10",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
    "discription":"The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.",
 },
 {
   "id":"7",
   "image":"https://img2.exportersindia.com/product_images/bc-full/2022/2/9723345/green-coconut-1645421344-6210662.jpeg",
   "productname":"Green Coconut",
   "price":"20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
   "discription":"The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable and a fruit native to the Americas. The plant is a perennial in the nightshade family Solanaceae.",
},
{
   "id":"8",
   "image":"https://www.jiomart.com/images/product/original/590003533/green-chilli-200-g-product-images-o590003533-p590003533-0-202203150435.jpg",
   "productname":"Green Chilli",
   "price":"20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
   "discription":"An onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2010.",
}
,{
   "id":"9",
   "image":"https://m.media-amazon.com/images/I/61SCxbFGpWL._SX679_.jpg",
   "productname":"Ginger",
   "price":"20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
   "discription":"Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition",
},
{
   "id":"10",
   "image":"https://5.imimg.com/data5/IC/BT/MY-38213580/fresh-green-capsicum-500x500-500x500.jpg",
   "productname":"Green Capsicum",
   "price":"20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
   "discription":"Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It has edible green seed pods.",
},
{
  "id":"11",
  "image":"https://www.collinsdictionary.com/images/full/carrot_125262134.jpg",
  "productname":"Carrot",
  "price":"10",
  "quantity":"1kg",
  "prodquantity":"0",
  "calprice":"0",
  "discription":"The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.",
},
{
 "id":"12",
 "image":"https://images.heb.com/is/image/HEBGrocery/000375269?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
 "productname":"kiwi",
 "price":"20",
  "quantity":"1kg",
  "prodquantity":"0",
  "calprice":"0",
 "discription":"The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable and a fruit native to the Americas. The plant is a perennial in the nightshade family Solanaceae.",
},
{
 "id":"13",
 "image":"https://5.imimg.com/data5/WT/GN/ZH/SELLER-3722283/pineapple-500x500.jpg",
 "productname":"Pineapple",
 "price":"20",
  "quantity":"1kg",
  "prodquantity":"0",
  "calprice":"0",
 "discription":"An onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2010.",
}
,{
 "id":"14",
 "image":"https://m.media-amazon.com/images/I/616PXhYj8iL._SX679_.jpg",
 "productname":"Beetroot",
 "price":"20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
 "discription":"Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition",
},
{
 "id":"15",
 "image":"https://img.freepik.com/premium-photo/banana-bunch-isolated_88281-1027.jpg?w=2000",
 "productname":"Banana",
 "price":"20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
 "discription":"Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It has edible green seed pods.",
}
  ]
const increment=(e)=>
{
  
  let elementId=e.target.previousElementSibling.innerHTML++;
  console.log(elementId);
}
const decrement=(e)=>
{
 let elementId=e.target.nextElementSibling.innerHTML;
 if(elementId>0)
 {
  e.target.nextElementSibling.innerHTML--;
 }
 console.log(elementId);
}
const addCart=(e)=>
{
   let spanvalue=e.target.previousElementSibling.previousElementSibling.innerHTML;
   let index=e.target.getAttribute("ind");
   let temp=-1;
   for(let i=0;i<cartArr.length;i++)
   {
    if(cartArr[i].id===arrProduct[index].id)
    {
      temp=i;
      // alert(temp);
    }
   }
   if(temp>=0)
   {
     cartArr[temp].prodquantity=parseInt(spanvalue)+parseInt(cartArr[temp].prodquantity);
     cartArr[temp].calprice=parseInt(cartArr[temp].prodquantity)*parseInt(cartArr[temp].price);
     alert("Product added successfully in cart");
   }
   else{
    let obj=arrProduct[index];
    // cartArr.push(arrProduct[index]);
    obj.prodquantity=spanvalue;
    obj.calprice=parseInt(obj.prodquantity)*parseInt(obj.price);
    cartArr.push(obj)
    alert("Product added successfully in cart");
   }
   setCartarr([...cartArr]);
   console.log(cartArr);
}
const remove=(e)=>{
    let ind=e.target.getAttribute("indx");
    cartArr.splice(ind,1);
    setCartarr([...cartArr]);
    console.log(cartArr);
}
const decrementCart=(e)=>
{
   let index=e.target.getAttribute("indx");
   if(cartArr[index].prodquantity>1)
   {
    cartArr[index].prodquantity--;
    cartArr[index].calprice=cartArr[index].prodquantity*cartArr[index].price;
   }
   setCartarr([...cartArr]);
   console.log(index);
}
const incrementCart=(e)=>
{
  let index=e.target.getAttribute("indx");
  cartArr[index].prodquantity++;
  cartArr[index].calprice=cartArr[index].prodquantity*cartArr[index].price;
  setCartarr([...cartArr]);
  console.log(index);
}
  return (
    <>
     <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home arr={arrProduct} increment={increment} decrement={decrement} addcart={addCart}></Home>}/>
    <Route path='/cart' element={<Cart arrCart={cartArr} remove={remove} incrementCart={incrementCart} decrementCart={decrementCart} ></Cart>}></Route>
    </Routes>
    </>
  );
}

export default App;
