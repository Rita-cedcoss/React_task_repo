import logo from './logo.svg';
import './App.css';
import Signup from './amazonclone/Signup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './amazonclone/Component.css'
import Login from './amazonclone/Login';
import { useState } from 'react';
import Home from './amazonclone/Home';
import Productdesp from './amazonclone/productdesp';
import Cart from './amazonclone/Cart';
import Payment from './amazonclone/Payment';
let gtotal;
function App() {
  const [signarr,setSignarr]=useState([]);
  const[prodInd,setProdind]=useState();
  const[cartArr,setCartarr]=useState([]);
  const[payarr,setPayarr]=useState([{name:"Ram",number:"1234567890",date:"25/3",cvvnum:"123"}]);
  // const[grandtot,setGrandtot]=useState();
  const navigate=useNavigate();

  const Signin=()=>
  {
    let name=document.getElementById("uname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("passwd").value;
    let obj={name:name,email:email,passwd:password};
    if(name==""||email==""||password=="")
    {
      alert("Please fill all fields");
    }
    else{
      signarr.push(obj);
    setSignarr([...signarr]);
    alert("Your Account Created Successfully");
    document.getElementById("uname").value="";
    document.getElementById("email").value="";
    document.getElementById("passwd").value="";
    console.log(signarr);
    }
  }
  const login=()=>
  {
    let email=document.getElementById("email").value;
    let password=document.getElementById("passwd").value;
    console.log(email,password);
    let temp=-1;
   for(let i=0;i<signarr.length;i++)
   {
     if(signarr[i].email==email && signarr[i].passwd==password)
     {
      temp=i;
     console.log(temp);
     }
   }
   if(temp!==-1)
   {
     alert("You are login successfully");
     navigate("/home");
   }
   else{
    alert("please enter valid detail");
   }
  }
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
    "discription":"A rocking horse is a toy horse which a child can sit on and which can be made to rock backwards and forwards.",
 },
 {
   "id":"7",
   "image":"https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBEST-GIFT-TOPIKA1124772368AC30E/1564600890029_0..jpg",
   "productname":"Blocks",
   "price":"150",
    "quantity":"1",
    "prodquantity":"1",
    "calprice":"",
   "discription":"Toy blocks (also building bricks, building blocks, or simply blocks) are wooden, plastic, or foam pieces of various shapes (cube, cylinder, arch etc.) and colors that are used as construction toys. Sometimes, toy blocks depict letters of the alphabet.",
},
{
   "id":"8",
   "image":"https://i5.walmartimages.com/asr/be979bcc-267b-4e4e-89aa-8c5a4780c162.f290932653d242d92176676789c3541e.jpeg",
   "productname":"Robot",
   "price":"600",
    "quantity":"1",
    "prodquantity":"1",
    "calprice":"",
   "discription":"robot, any automatically operated machine that replaces human effort, though it may not resemble human beings in appearance or perform functions in a humanlike manner",
}
,{
   "id":"9",
   "image":"https://rukminim1.flixcart.com/image/416/416/jduk2vk0/learning-toy/7/g/h/80pcs-plastic-kids-digital-puzzle-toy-assemble-educational-original-imaf2nzdesfkwdgn.jpeg?q=70",
   "productname":"Puzzle",
   "price":"150",
   "quantity":"1",
   "prodquantity":"1",
   "calprice":"",
   "discription":"A puzzle is a game, problem, or toy that tests a person's ingenuity or knowledge. In a puzzle, the solver is expected to put pieces together in a logical way, in order to arrive at the correct or fun solution of the puzzle",
},
{
   "id":"10",
   "image":"https://rukminim1.flixcart.com/image/416/416/ksqeky80/puzzle/z/w/w/1-rubik-cube-kuku-original-imag68fndxh9tcw7.jpeg?q=70",
   "productname":"Rubiks Cube",
   "price":"200",
   "quantity":"1",
   "prodquantity":"1",
   "calprice":"",
   "discription":"Rubik's Cube consists of 26 small cubes that rotate on a central axis; nine coloured cube faces, in three rows of three each, form each side of the cube.",
}
,{
 "id":"11",
 "image":"https://m.media-amazon.com/images/I/41gCVv9eiEL.jpg",
 "productname":"Mickey Mouse",
 "price":"420",
 "quantity":"1 ",
 "prodquantity":"1",
 "calprice":"",
 "discription":"Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney, who originally voiced the character, and Ub Iwerks. The longtime mascot of The Walt Disney Company, Mickey is an anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves.",
},
{
 "id":"12",
 "image":"https://i5.walmartimages.com/asr/7d8c91a8-7aff-4335-b6e0-fc74127df875_1.4ba72cd25f8c3f1f7a155ee82b12719b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
 "productname":"Batman",
 "price":"600",
 "quantity":"1",
 "prodquantity":"1",
 "calprice":"",
 "discription":"Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice",
},{
 "id":"13",
 "image":"https://m.media-amazon.com/images/I/91Doy4-1aaL._AC_SL1500_.jpg",
 "productname":"Barbie",
 "price":"450",
 "quantity":"1",
 "prodquantity":"1",
 "calprice":"",
 "discription":"The Barbie target demographic is young children. Barbie's full name is Barbara Millicent Roberts.",
},
{
 "id":"14",
 "image":"https://images-na.ssl-images-amazon.com/images/I/61vmNVLvrxL._SL1200_.jpg",
 "productname":"Pugs",
 "price":"350",
 "quantity":"1 kg",
 "prodquantity":"1",
 "calprice":"",
 "discription":"The Pug has been bred to be a companion and a pleasure to his owners. He has an even and stable temperament, great charm, and an outgoing, loving disposition",
}
 ]
 const prodDisplay=(e)=>
 {
  let index=e.target.parentElement.getAttribute("ind");
  setProdind(index);
  console.log(prodInd);
  console.log(arrProduct[prodInd]);
  navigate("/product");

 }
 const addCart=(e)=>
 {
   let index=e.target.getAttribute("ind");
   console.log(index-1);
   let temp=-1;
   for(let i=0;i<cartArr.length;i++)
   {
     if(cartArr[i].id===arrProduct[index-1].id)
     {
       temp=i;
     }
   }
   if(temp>=0)
   {
     cartArr[temp].prodquantity++;
     cartArr[temp].calprice=cartArr[temp].prodquantity*cartArr[temp].price;
     setCartarr(cartArr);
   }
   else{
   cartArr.push(arrProduct[index-1]);
   cartArr[index-1].calprice=cartArr[index-1].prodquantity*cartArr[index-1].price;
   setCartarr([...cartArr]);
   console.log(cartArr);
  }
 }
 const incrementCart=(e)=>
 { 
  let index=e.target.getAttribute("indx");
  console.log(index);
  cartArr[index].prodquantity++;
  cartArr[index].calprice=cartArr[index].price*cartArr[index].prodquantity;
  setCartarr([...cartArr]);
 }
 const decrementCart=(e)=>
 {
  let index=e.target.getAttribute("indx");
  console.log(index);
  if(cartArr[index].prodquantity>1)
  {
    cartArr[index].prodquantity--;
  }
  cartArr[index].calprice=cartArr[index].price*cartArr[index].prodquantity;
  setCartarr([...cartArr]);
 }
 const removeitem=(e)=>
 {
   let index= e.target.getAttribute("indx");
   console.log(index);
   cartArr.splice(index,1);
   setCartarr([...cartArr])
 }
 const pay=(e)=>
 {
  navigate("/payment");
   gtotal=e.target.getAttribute("gtot");
  console.log(gtotal);
 }
 const payamount=()=>
 {
  let name=document.getElementById("name").value;
  let number=document.getElementById("num").value;
  let date=document.getElementById("date").value;
  let cvvnum=document.getElementById("cvv").value;
  if(payarr[0].name==name && payarr[0].number==number&&payarr[0].date==date &&payarr[0].cvvnum==cvvnum)
  {
    alert("Payment Successfully Pay");
    navigate("/home");
  }
  else{
    alert("Please Enter valid detail");
  }
 }
  return (
    <>
    <Routes>
     <Route path='/' element={<Signup Signin={Signin}/>}/>
     <Route path='/login' element={<Login login={login}/>}/>
     <Route path="/home" element={<Home arr={arrProduct} prodDisplay={prodDisplay}/>}></Route>
     <Route path="/product" element={<Productdesp prodInd={arrProduct[prodInd]} addCart={addCart}></Productdesp>}></Route>
     <Route path="/cart" element={<Cart arrCart={cartArr} remove={removeitem} incrementCart={incrementCart} decrementCart={decrementCart} pay={pay}></Cart>}></Route>
     <Route path="/payment" element={<Payment gpay={gtotal} payamount={payamount}></Payment>}></Route>
    </Routes>
  
    </>
  );
}

export default App;
