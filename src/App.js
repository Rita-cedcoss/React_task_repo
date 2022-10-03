import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './React_Router_Navbar/Home';
import About from './React_Router_Navbar/About';
import Contactus from './React_Router_Navbar/Contactus';
import Navbar from './React_Router_Navbar/Navbar';
import './React_Router_Navbar/Component.css'
import Gallery from './React_Router_Navbar/Gallery';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path='/contact' element={<Contactus></Contactus>}></Route>
      <Route path="/Gallery" element={<Gallery></Gallery>}></Route>
    </Routes>
    </>
  );
}

export default App;
