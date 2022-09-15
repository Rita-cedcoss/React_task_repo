import logo from './logo.svg';
import './App.css';
import SignupLogin from './Restuarantapp/SignupLogin';
import SiteComponent from './Restuarantapp/SiteComponent';
import { useState } from 'react';
function App() {
  const[count,setCount]=useState(true);
  const hide=()=>{
    setCount(false);
  }
  if(count)
  {
    return(
      <SignupLogin click={hide}></SignupLogin>
    ) 
  }
  else{
  return (
    <>
    <SiteComponent></SiteComponent>
    </>
  );
}
}

export default App;
