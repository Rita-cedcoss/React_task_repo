import logo from './logo.svg';
import './App.css';
import Taks1 from './ReactTaskMemo/Taks1';
import Task21 from './ReactTaskMemo/Task21';
import { UserProvider } from './ReactTaskMemo/userContext';
import Currencyconverter from './ReactTaskMemo/Currencyconverter';
import './ReactTaskMemo/Component.css'
import Countword from './ReactTaskMemo/Countword';
import Numtowords from './ReactTaskMemo/Numtowords';
function App() {
  return (
    <>
    <div className='App'>
    <h3>Q1. Make a class component named ParentComponent and inside componentDidMount start a timer that console.log a name every 2 seconds. Inside this ParentComponent there is a child functional component called ChildComponent. We don't want to render ChildComponent every time the ParentComponent renders. How will you do this?</h3>
    <Taks1></Taks1>
    <hr></hr>
    <h3>Q2. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of Context API</h3>
    <UserProvider value="Hello Rita">
        <Task21/>
    </UserProvider>
    <hr></hr>
    <h3>Q3 Make a Currency Converter as shown here</h3>
    <Currencyconverter></Currencyconverter>
    <hr></hr>
    <h3>Q4 Count Number of words and Characters</h3>
    <Countword></Countword>
    <hr></hr>
    <h3>Q5 Create a react app that changes no to word as per attached sample</h3>
    <Numtowords></Numtowords>
    <hr></hr>
    </div>
    </>
  );
}

export default App;
