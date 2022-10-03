import logo from './logo.svg';
import './App.css';
import Navbar from './RouterWebsite/Navbar';
import './RouterWebsite/Component.css'
import { Route, Routes } from 'react-router-dom';
import About from './RouterWebsite/About';
import Cities from './RouterWebsite/Cities';
import Drive from './RouterWebsite/Drive';
import Blog from './RouterWebsite/Blog';
function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path='/cities' element={<Cities></Cities>}></Route>
      <Route path="/drive" element={<Drive></Drive>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
    </Routes>
    {/* <Home></Home> */}
    </>
  );
}

export default App;
