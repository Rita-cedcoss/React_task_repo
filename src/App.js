import logo from './logo.svg';
import './App.css';
import MemoryGame from './MemoryGame/MemoryGame';
import './MemoryGame/memoryComponent.css'
import { useState } from 'react';
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
let presClass ,prevClass; let child;
function App() {
  const arr=[{id:1,img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4KHhO6XgFElGQ0aUc8XTEaANJiXYn25Th3ZZPJzxEAvN5t78S0M5EHzXBU_ntzgpNYw&usqp=CAU"},
  {id:1,img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4KHhO6XgFElGQ0aUc8XTEaANJiXYn25Th3ZZPJzxEAvN5t78S0M5EHzXBU_ntzgpNYw&usqp=CAU"},
  {id:2,img1:"https://cortlandfreelibrary.org/wp-content/uploads/2022/02/istockphoto-1182596507-612x612-1.jpg"},
  {id:2,img1:"https://cortlandfreelibrary.org/wp-content/uploads/2022/02/istockphoto-1182596507-612x612-1.jpg"},
  {id:3,img1:"https://www.kindpng.com/picc/m/64-641632_fish-cartoon-watercolor-painting-cartoon-clown-fish-png.png"},
  {id:3,img1:"https://www.kindpng.com/picc/m/64-641632_fish-cartoon-watercolor-painting-cartoon-clown-fish-png.png"},
  {id:4,img1:"https://media.istockphoto.com/photos/perfect-red-apple-with-green-leaf-on-white-background-picture-id996100390?k=20&m=996100390&s=170667a&w=0&h=ytModGpW5qWNNcRHvtHt-41C-mBv6BnBc8u-olzz2oU="},
  {id:4,img1:"https://media.istockphoto.com/photos/perfect-red-apple-with-green-leaf-on-white-background-picture-id996100390?k=20&m=996100390&s=170667a&w=0&h=ytModGpW5qWNNcRHvtHt-41C-mBv6BnBc8u-olzz2oU="},
  {id:5,img1:"https://www.kindpng.com/picc/m/97-974750_clip-art-rubber-duck-clip-art-hd-png.png"},
  {id:5,img1:"https://www.kindpng.com/picc/m/97-974750_clip-art-rubber-duck-clip-art-hd-png.png"},
  {id:6,img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4qGB4KNiRNojWjCfX1aBXcuunOjY-zU6ZA&usqp=CAU"},
  {id:6, img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4qGB4KNiRNojWjCfX1aBXcuunOjY-zU6ZA&usqp=CAU"},
  {id:7,img1:"https://www.pngitem.com/pimgs/m/500-5004460_stack-of-books-vector-clip-art-book-clipart.png"},
  {id:7,img1:"https://www.pngitem.com/pimgs/m/500-5004460_stack-of-books-vector-clip-art-book-clipart.png"},
  {id:8,img1:"https://www.dogsinpictures.com/images/white-tan-brown-clip-art-dog.jpg"},
  {id:8,img1:"https://www.dogsinpictures.com/images/white-tan-brown-clip-art-dog.jpg"},
  {id:9,img1:"https://img.freepik.com/free-vector/sticker-template-elephant-cartoon-character_1308-73023.jpg?w=2000"},
  {id:9,img1:"https://img.freepik.com/free-vector/sticker-template-elephant-cartoon-character_1308-73023.jpg?w=2000"},
  {id:10,img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvjp8cS6YDvhrn829Sge3e_xjkL0jNuIHzz5TqECFqb3JTNFxNBRTSNZrqqgQV2kg_YA&usqp=CAU"},
  {id:10,img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvjp8cS6YDvhrn829Sge3e_xjkL0jNuIHzz5TqECFqb3JTNFxNBRTSNZrqqgQV2kg_YA&usqp=CAU"},
  {id:11,img1:"https://img.wattpad.com/cover/263604982-256-k776510.jpg"},
  {id:11,img1:"https://img.wattpad.com/cover/263604982-256-k776510.jpg"},
  {id:12,img1:"https://www.kindpng.com/picc/m/22-223759_donald-duck-clipart-hd-png-download.png"},
  {id:12,img1:"https://www.kindpng.com/picc/m/22-223759_donald-duck-clipart-hd-png-download.png"}, 
]
const [arrCard,setArrcard]=useState(arr.sort(()=>Math.random(0)-0.5));
const [previous,setPrevious]=useState(-1);
let [present,setPresent]=useState(-1);
let [count,setCount]=useState(24);
let [steps,setSteps]=useState(0);
const clickHandler=(e)=>{
  let ind=e.target.getAttribute("index");
  if(previous==-1){
    e.target.children[0].classList.add('show');
    prevClass= e.target;
    setPrevious(ind);      
}
else if(present==-1){
    e.target.children[0].classList.add('show');
    presClass=e.target;
    present=ind;
    setTimeout(()=>checkMatchValue(),2000)
}
}
const checkMatchValue=()=>{
  if(arrCard[present].id===arrCard[previous].id)
  {
    prevClass.classList.add('hide');
    presClass.classList.add('hide');
    count-=2;
    setCount(count);
    if(count==0){
      alert("you won the match");
      document.getElementById("result").innerHTML="Congratulation you won the match and  you take"+steps+" steps";
    }

  }
  else{
      presClass.children[0].classList.remove("show");
      prevClass.children[0].classList.remove("show");
  }
  
     steps+=1;
  setPresent(-1);
  setPrevious(-1);
  setSteps(steps);
  console.log("helo",steps)
}


  return (
    <>
    <MemoryGame arr={arrCard} clickHandler={clickHandler}></MemoryGame>
    </>
  );
}

export default App;
