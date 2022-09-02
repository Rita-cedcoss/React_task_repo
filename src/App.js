import './App.css';
import Propscomp1 from './PropsComponent/Propscomp1';
import FunctionProps from './PropsComponent/FunctionProps';
function App() {
  return (
  <>
  <div id="PropsTask">
  <Propscomp1 name="Alice"></Propscomp1>
  <FunctionProps uname="Rita"></FunctionProps>
  </div>
  </>
  );
}

export default App;
