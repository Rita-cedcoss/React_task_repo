import './App.css';
import Propscomp1 from './PropsComponent/Propscomp1';
import FunctionProps from './PropsComponent/FunctionProps';
import Task4ClassComp from './PropsComponent/Task4ClassComp';
function App() {
  return (
  <>
  <div id="PropsTask">
  <Propscomp1 name="Alice"></Propscomp1>
  <FunctionProps uname="Rita"></FunctionProps>
  <Task4ClassComp num1="4" num2="3" operator="+"></Task4ClassComp>
  </div>
  </>
  );
}

export default App;
