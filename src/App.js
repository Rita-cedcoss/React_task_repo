import './App.css';
import Bmicalculator from './BMI_Calculator/Bmicalculator';
import Billgenerator from './BillGenerator/Billgenerator';
import EMIcalculator from './EMIcalculator/EMIcalculator';
function App() {
  return (
   <>
   <Bmicalculator></Bmicalculator>
   <br/>
   <hr></hr>
   <Billgenerator></Billgenerator><br></br>
   <hr></hr><br/>
   <EMIcalculator></EMIcalculator>
   </>
  );
}

export default App;
