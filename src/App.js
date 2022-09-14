import logo from './logo.svg';
import './App.css';
import Fruits_list from './List_Task/Fruits_list';
import Product_table from './List_Task/Product_table';
import Userlist from './Task4/Userlist';
import Selectedlist from './Task3/Selectedlist';
function App() {
  return (
    
    <>
    <div id="outer">
    <h1>Task1 Fruits List</h1>
    <p>Q1. Create a list of fruits and print it using map.</p>
    <Fruits_list></Fruits_list>
    <hr></hr>
    <h1>Task2 Product Table</h1>
    <p>Q2. Make a Products Table which should work as:  1. Fill form and submit values. 2. Product should add in product list and display in list below add product form.</p>
    <Product_table></Product_table>
    <hr></hr>
    <h1>task3</h1>
    <p>Q3. Move items between two groups as shown in attachment.</p>
    <Selectedlist></Selectedlist>
    <hr></hr>
    <h1>Task4</h1>
    <p>Q4.Using class components create a username list as shown.</p>
     <Userlist></Userlist>
     <br></br><br></br>
    </div>
    </>
  );
}

export default App;
