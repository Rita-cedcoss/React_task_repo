import logo from './logo.svg';
import './App.css';
import Component1 from './odd-even/Component1';
import Component2 from './odd-even/Component2';
import Component3 from './odd-even/Component3';
function App() {
  return (
    <>
    <div className='App'>
      <h1>Task1</h1>
     <Component1></Component1>
     <hr></hr>
     <h1>Task2</h1>
     <Component2></Component2>
     <hr></hr>
     <h1>task3</h1>
     <Component3></Component3>

     </div>
    </>
  );
}

export default App;
