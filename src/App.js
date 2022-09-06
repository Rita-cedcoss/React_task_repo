import logo from './logo.svg';
import './App.css';
import Component1 from './odd-even/Component1';
import Component2 from './odd-even/Component2';
import Component3 from './odd-even/Component3';
import Component4 from './odd-even/Component4';
function App() {
  return (
    <>
    <div className='App'>
      <h1>Task1 : Even and odd</h1>
     <Component1></Component1>
     <hr></hr>
     <h1>Task2 : Counter</h1>
     <Component2></Component2>
     <hr></hr>
     <h1>Task3: Count Down Clock</h1>
     <Component3></Component3>
     <h1>Task4 : Stop Watch</h1>
     <Component4/>

     </div>
    </>
  );
}

export default App;
