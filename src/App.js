import './App.css';
import Propscomp1 from './PropsComponent/Propscomp1';
import FunctionProps from './PropsComponent/FunctionProps';
import Task4ClassComp from './PropsComponent/Task4ClassComp';
import Task5Funcomp from './PropsComponent/Task5Funcomp';
function App() {
  return (
  <>
  <div id="PropsTask">
  <Propscomp1 name="Alice"></Propscomp1>
  <FunctionProps uname="Rita"></FunctionProps>
  <Task4ClassComp num1="4" num2="3" operator="+"></Task4ClassComp>
  <Task5Funcomp num1="7" num2="8" operator="*"></Task5Funcomp>
  </div>
  </>
  );
}

export default App;
