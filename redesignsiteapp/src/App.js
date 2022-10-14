import logo from './logo.svg';
import './App.css';
import Navbar from './Redesign/Navbar';
import './Redesign/component.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Redesign/Home';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
