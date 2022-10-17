import logo from './logo.svg';
import './App.css';
import Component from './Colorpicke/Component';
import Navbar from './Food_delivery_app/Navbar';
import './Food_delivery_app/component.css'
import Product from './Food_delivery_app/Product';
import Footer from './Food_delivery_app/footer';
function App() {
  return (
    <>
    {/* <Component></Component> */}
    <Navbar></Navbar>
    <Product></Product>
    <Footer></Footer>
    </>
  );
}

export default App;
