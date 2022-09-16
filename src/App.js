import logo from './logo.svg';
import './App.css';
import SignupLogin from './Restuarantapp/SignupLogin';
import SiteComponent from './Restuarantapp/SiteComponent';
import { useState } from 'react';
// import {Route,Switch} from 'react-router-dom';

// import Fooddescription from './Restuarantapp/Fooddescription';
import { Route, Routes } from 'react-router-dom';
function App() {
  //  <Switch>
  //    <Route path='/Fooddescription' component="Fooddescription.js"></Route>
  //  </Switch>
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
