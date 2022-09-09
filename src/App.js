import './App.css';
import './Conditional_rendering/task.css'
import Task1 from './Conditional_rendering/Task1';
import Task2parent from './Conditional_rendering/Task2parent';
import Task3 from './Conditional_rendering/Task3';

function App() {
  return (
    <>
    <div id="outer">
      <h1>Task1</h1>
      <p>Q1. a: Make a search suggestion application </p>
      <Task1></Task1>
      <hr></hr>
      <h1>Task2</h1>
      <p>Q2. Pass a prop that contains a number from a parent component to child component and set the background color on the basis of even or odd number</p>
      <Task2parent ></Task2parent>
      <hr></hr>
      <h1>Task3</h1>
      <p>Set the theme as dark, light and party on button click</p>
      <Task3></Task3>
   </div>
    </>
  );
}
export default App;
