import logo from './logo.svg';
import './App.css';
import Task1 from './React-Hooks/Task1';
import Task2 from './React-Hooks/Task2';
import Task3 from './React-Hooks/Task3';
import { createContext } from 'react';
import Context1 from './React-Hooks/Context1';
import Cureencyconverter from './React-Hooks/Cureencyconverter';
import './React-Hooks/Component.css'
import Task6 from './React-Hooks/Task6';
import Task7 from './React-Hooks/Task7';
import Component1 from './React-Hooks/todolist/Component1';
const Context=createContext();
const objArr=createContext();
function App() {
  const obj= {"Select":"","USD":1,"AED":3.67,"AFN":88.11,"ALL":116,"AMD":405.36,"ANG":1.79,"AOA":431.16,"ARS":142.08,"AUD":1.47,"AWG":1.79,"AZN":1.7,"BAM":1.95,"BBD":2,"BDT":99.69,"BGN":1.95,"BHD":0.376,"BIF":2029.8,"BMD":1,"BND":1.4,"BOB":6.89,"BRL":5.12,"BSD":1,"BTN":79.29,"BWP":13.03,"BYN":2.54,"BZD":2,"CAD":1.31,"CDF":2008.8,"CHF":0.958,"CLP":897.98,"CNY":6.94,"COP":4360.07,"CRC":651.16,"CUP":24,"CVE":109.96,"CZK":24.45,"DJF":177.72,"DKK":7.44,"DOP":53.16,"DZD":140.7,"EGP":19.32,"ERN":15,"ETB":52.67,"EUR":0.997,"FJD":2.21,"FKP":0.865,"FOK":7.44,"GBP":0.865,"GEL":2.83,"GGP":0.865,"GHS":10.34,"GIP":0.865,"GMD":55.74,"GNF":8645.36,"GTQ":7.72,"GYD":209.44,"HKD":7.85,"HNL":24.59,"HRK":7.51,"HTG":117.86,"HUF":396.36,"IDR":14862.36,"ILS":3.42,"IMP":0.865,"INR":79.29,"IQD":1461.26,"IRR":41912.65,"ISK":137.9,"JEP":0.865,"JMD":151.78,"JOD":0.709,"JPY":143.81,"KES":120.77,"KGS":81.97,"KHR":4120.41,"KID":1.47,"KMF":490.62,"KRW":1383.23,"KWD":0.3,"KYD":0.833,"KZT":472.94,"LAK":17744.86,"LBP":1507.5,"LKR":356.7,"LRD":153.65,"LSL":17.33,"LYD":4.96,"MAD":10.74,"MDL":19.32,"MGA":4116.41,"MKD":60.58,"MMK":2746.93,"MNT":3219.33,"MOP":8.09,"MRU":37.8,"MUR":44.47,"MVR":15.4,"MWK":1036.36,"MXN":20,"MYR":4.5,"MZN":64.53,"NAD":17.33,"NGN":424.33,"NIO":35.88,"NOK":10.03,"NPR":126.87,"NZD":1.66,"OMR":0.384,"PAB":1,"PEN":3.86,"PGK":3.52,"PHP":56.87,"PKR":231.33,"PLN":4.68,"PYG":6901.53,"QAR":3.64,"RON":4.89,"RSD":116.53,"RUB":60.05,"RWF":1075.33,"SAR":3.75,"SBD":8.01,"SCR":13.05,"SDG":565.01,"SEK":10.62,"SGD":1.4,"SHP":0.865,"SLE":14.34,"SLL":14335.09,"SOS":569.11,"SRD":26.05,"SSP":650.38,"STN":24.43,"SYP":2509.26,"SZL":17.33,"THB":36.5,"TJS":10.28,"TMT":3.5,"TND":2.92,"TOP":2.34,"TRY":18.25,"TTD":6.76,"TVD":1.47,"TWD":31.01,"TZS":2330.35,"UAH":36.9,"UGX":3809.72,"UYU":40.75,"UZS":10958.94,"VES":8,"VND":23557.21,"VUV":116.99,"WST":2.71,"XAF":654.15,"XCD":2.7,"XDR":0.766,"XOF":654.15,"XPF":119,"YER":250.01,"ZAR":17.33,"ZMW":15.58,"ZWL":598.4}
  return (
    <>
    <div className='App'>
      <h3>Task1 : Create a Button that counts no of clicks and displays on button itself</h3>
    <Task1></Task1>
    <hr></hr>
    <h3>Task2 : Create a counter with increment, decrement and reset functionality.</h3>
    <Task2></Task2>
    <hr></hr>
    <h3>Task3:Create a count down clock that starts on a button click with current time as start and decrements second by second.</h3>
    <Task3></Task3>
    <hr></hr>
    <h3>Task4 :Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of useContext hook to perform this.</h3>
     <Context.Provider value="Context API app">
        <Context1></Context1>
     </Context.Provider>
     <hr></hr>
     <h3>Task 5:  Make the currency converter you made using context,  now with useContext Hook</h3>
    <objArr.Provider value={obj}>
    <Cureencyconverter></Cureencyconverter>
    </objArr.Provider>
    <hr></hr>
    <h3>
    Make a functional component Parent that has two buttons 'increment 1' and 'increment 2'. Both on click, increment count by one. Along with the value of count, it also displays Odd or Even as per the value of count. Now add a loop inside the event handler of increment 1. This loop loops over a big number like 2000000000 just to introduce delay. Now, if you click on first button the delay in display is obvious but on clicking button 2 it is still there but it should not be there. So find a solution for this.
    </h3>
    <Task6></Task6>
    <hr></hr>
    <h3>Task 7:On changing the number inside the textbox, the number and its next two successors must be printed. On click of Toggle theme, the theme must change.
    </h3>
    <Task7></Task7>
    <hr></hr>
    <h3>Task 8: Create a ToDo list based on template provided.     Conditions: add/delete/update todo mark complete todo list completed and pending todos in different group as in template once use click edit todo, value should populate in top todo form and ADD button should change to UPDATE button.</h3>
    <Component1></Component1>
    <hr></hr>
    </div>
    
    </>
  );
}

export default App;
export {Context,objArr}