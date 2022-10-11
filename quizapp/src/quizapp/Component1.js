import React, { useState } from 'react'
let selvalue;let sel2;
const Component1 = () => {
    let arr=[
        {
          "id":"1",
          "question":"Find 2+2",
          "option1":"2",
          "option2":"5",
          "option3":"4",
          "option4":"3"
        },
        {
          "id":"2",
          "question":"Find 2*3",
          "option1":"2",
          "option2":"5",
          "option3":"6",
          "option4":"3"
        },
        {
          "id":"3",
          "question":"Find 4/2",
          "option1":"2",
          "option2":"5",
          "option3":"7",
          "option4":"3"
        },
        {
          "id":"4",
          "question":"Find 6*2",
          "option1":"2",
          "option2":"12",
          "option3":"14",
          "option4":"36"
        },
        {
          "id":"5",
          "question":"Find 7*2",
          "option1":"2",
          "option2":"12",
          "option3":"14",
          "option4":"36"
        },
        {
          "id":"6",
          "question":"Find 8*8",
          "option1":"64",
          "option2":"72",
          "option3":"64",
          "option4":"36"
        }
       ]
       const question1=()=>
       {
        document.getElementById("div11").setAttribute("class","show");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","yellow");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","div2");
        document.getElementById("count4").setAttribute("class","div2");
        document.getElementById("count5").setAttribute("class","div2");
        document.getElementById("count6").setAttribute("class","div2");
       
       }
       const question2=()=>
       {
        document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","show"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","yellow");
        document.getElementById("count3").setAttribute("class","div2");
        document.getElementById("count4").setAttribute("class","div2");
        document.getElementById("count5").setAttribute("class","div2");
        document.getElementById("count6").setAttribute("class","div2");
       }
       const question3=()=>
       {
        document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","show");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","yellow");
        document.getElementById("count4").setAttribute("class","div2");
        document.getElementById("count5").setAttribute("class","div2");
        document.getElementById("count6").setAttribute("class","div2");
       
       }
       const question4=()=>
       {
        document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","show"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","div2");
        document.getElementById("count4").setAttribute("class","yellow");
        document.getElementById("count5").setAttribute("class","div2");
        document.getElementById("count6").setAttribute("class","div2");
       }
       const question5=()=>
       {
        document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","show");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","div2");
        document.getElementById("count4").setAttribute("class","div2");
        document.getElementById("count5").setAttribute("class","yellow");
        document.getElementById("count6").setAttribute("class","div2");
       
       }
       const question6=()=>
       {
        document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","show"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","div2");
        document.getElementById("count4").setAttribute("class","div2");
        document.getElementById("count5").setAttribute("class","div2");
        document.getElementById("count6").setAttribute("class","yellow");
       }
       const [selectedvalue,setSelected]=useState([]);
       const saveNext1=()=>
       {
         let value=selvalue;
         let obj={value:value};
         selectedvalue.push(obj);
         console.log(selectedvalue);
         document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","show"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","yellow");
        
       }
       const saveNext2=()=>
       {
         let value=sel2;
         let obj={value:value};
         selectedvalue.push(obj);
         console.log()
         document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","show");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","yellow");
       }
       const saveNext3=()=>
       {
         let value=selvalue;
         let obj={value:value};
         selectedvalue.push(obj);
         document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","show"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","div2");
        document.getElementById("count4").setAttribute("class","yellow");
       }
       const saveNext4=()=>
       {
         let value=selvalue;
         let obj={value:value};
         selectedvalue.push(obj);
         document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","show");
        document.getElementById("div16").setAttribute("class","hidden"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","div2");
        document.getElementById("count4").setAttribute("class","div2");
        document.getElementById("count5").setAttribute("class","yellow");
       }
       const saveNext5=()=>
       {
         let value=selvalue;
         let obj={value:value};
         selectedvalue.push(obj);
         document.getElementById("div11").setAttribute("class","hidden");
        document.getElementById("div12").setAttribute("class","hidden"); 
        document.getElementById("div13").setAttribute("class","hidden");
        document.getElementById("div14").setAttribute("class","hidden"); 
        document.getElementById("div15").setAttribute("class","hidden");
        document.getElementById("div16").setAttribute("class","show"); 
        document.getElementById("count1").setAttribute("class","div2");
        document.getElementById("count2").setAttribute("class","div2");
        document.getElementById("count3").setAttribute("class","div2");
        document.getElementById("count4").setAttribute("class","div2");
        document.getElementById("count5").setAttribute("class","div2");
        document.getElementById("count6").setAttribute("class","yellow");
       }
       const inpval1=(e)=>
       {
        selvalue=e.target.value;
       }
      const inpval2=(e)=>
      {
        sel2=e.target.value;
      }
  return (
    <div id="outer">
       <div id="top">Quiz App</div>
      <div id="bottom">
        <div id="left">
            {/* question1 */}
        <div className="left-top" id="div11">
         <h4>Question -{arr[0].id}</h4>
         <p>{arr[0].question}</p>
         <input type="radio" name="a" id="val1" onChange={inpval1}  value="2"></input><span>{arr[0].option1}</span><br></br>
         <input type="radio" name="a" id="val2"  onChange={inpval1} value="5"></input><span>{arr[0].option2}</span><br></br>
         <input type="radio"  name="a" id="val3" onChange={inpval1} value="4"></input><span>{arr[0].option3}</span><br></br>
         <input type="radio" name="a" id="val4" onChange={inpval1} value="3"></input><span>{arr[0].option4}</span><br></br>
         <button id="btn1" onClick={saveNext1} >Save and next</button><button id="btn2">Clear Response</button><button id="btn3">Mark For Review</button>
         <button id="btnsrn">Save and mark for review and next</button><button id="btn4">Submit and close</button>
         </div>
         {/* ques 2 */}
         <div  className="left-top hidden" id="div12">
         <h4>Question -{arr[1].id}</h4>
         <p>{arr[1].question}</p>
         <input type="radio" name="a" id="val4"  onChange={inpval2} value="3"></input><span>{arr[1].option1}</span><br></br>
         <input type="radio" name="a" id="val1"  onChange={inpval2} value="5"></input><span>{arr[1].option2}</span><br></br>
         <input type="radio"  name="a" id="val3"  onChange={inpval2} value="4"></input><span>{arr[1].option3}</span><br></br>
         <input type="radio" name="a" id="val4"  onChange={inpval2} value="3"></input><span>{arr[1].option4}</span><br></br>
         <button id="btn1" onClick={saveNext2}>Save and next</button><button id="btn2">Clear Response</button><button id="btn3">Mark For Review</button>
         <button id="btnsrn">Save and mark for review and next</button><button id="btn4">Submit and close</button>
         </div>
          {/* ques 3 */}
          <div  className="left-top hidden " id="div13">
         <h4>Question -{arr[2].id}</h4>
         <p>{arr[2].question}</p>
         <input type="radio" name="a" id="val1"  value="2"></input><span>{arr[2].option1}</span><br></br>
         <input type="radio" name="a" id="val2"  value="5"></input><span>{arr[2].option2}</span><br></br>
         <input type="radio"  name="a" id="val3"  value="4"></input><span>{arr[2].option3}</span><br></br>
         <input type="radio" name="a" id="val4"  value="3"></input><span>{arr[2].option4}</span><br></br>
         <button id="btn1" onClick={saveNext3}>Save and next</button><button id="btn2">Clear Response</button><button id="btn3">Mark For Review</button>
         <button id="btnsrn">Save and mark for review and next</button><button id="btn4">Submit and close</button>
         </div>
          {/* ques 4 */}
          <div  className="left-top hidden " id="div14">
         <h4>Question -{arr[3].id}</h4>
         <p>{arr[3].question}</p>
         <input type="radio" name="a" id="val1"  value="2"></input><span>{arr[3].option1}</span><br></br>
         <input type="radio" name="a" id="val2"  value="5"></input><span>{arr[3].option2}</span><br></br>
         <input type="radio"  name="a" id="val3"  value="4"></input><span>{arr[3].option3}</span><br></br>
         <input type="radio" name="a" id="val4"  value="3"></input><span>{arr[3].option4}</span><br></br>
         <button id="btn1" onClick={saveNext4} >Save and next</button><button id="btn2">Clear Response</button><button id="btn3">Mark For Review</button>
         <button id="btnsrn">Save and mark for review and next</button><button id="btn4">Submit and close</button>
         </div>
          {/* ques 5 */}
          <div  className="left-top hidden " id="div15">
         <h4>Question -{arr[4].id}</h4>
         <p>{arr[4].question}</p>
         <input type="radio" name="a" id="val1"  value="2"></input><span>{arr[4].option1}</span><br></br>
         <input type="radio" name="a" id="val2"  value="5"></input><span>{arr[4].option2}</span><br></br>
         <input type="radio"  name="a" id="val3"  value="4"></input><span>{arr[4].option3}</span><br></br>
         <input type="radio" name="a" id="val4"  value="3"></input><span>{arr[4].option4}</span><br></br>
         <button id="btn1" onClick={saveNext5}>Save and next</button><button id="btn2">Clear Response</button><button id="btn3">Mark For Review</button>
         <button id="btnsrn">Save and mark for review and next</button><button id="btn4">Submit and close</button>
         </div>
            {/* ques 6 */}
         <div  className="left-top hidden " id="div16">
         <h4>Question -{arr[5].id}</h4>
         <p>{arr[5].question}</p>
         <input type="radio" name="a" id="val1"  value="2"></input><span>{arr[5].option1}</span><br></br>
         <input type="radio" name="a" id="val2"  value="5"></input><span>{arr[5].option2}</span><br></br>
         <input type="radio"  name="a" id="val3"  value="4"></input><span>{arr[5].option3}</span><br></br>
         <input type="radio" name="a" id="val4"  value="3"></input><span>{arr[5].option4}</span><br></br>
         <button id="btn1" >Save and next</button><button id="btn2">Clear Response</button><button id="btn3">Mark For Review</button>
         <button id="btnsrn">Save and mark for review and next</button><button id="btn4">Submit and close</button>
         </div>

        </div>
        <div id="right">
        <div id="right_Top">
            <div id="rtopOuter">
            <div id="divmain"><div class="div1" id="div1"></div><span>Not visited</span></div>
            <div id="divmain"><div className="div1" id="div2"></div><span>Not Answered</span></div>
            </div>
            <div id="rtopOuter">
            <div id="divmain"><div className="div1" id="div3"></div><span>Answered</span></div>
            <div id="divmain"><div className="div1" id="div4"></div><span>Marked for review</span></div>
            </div>
            <div id="rtopOuter">
            <div id="divmain1"><div className="div1" id="div5"></div><span id="spara">Answer And Marked for review</span></div>
            </div>
          </div>
          <div id="right_bottom">
            <div className='div2 yellow' id="count1" onClick={question1}>1</div>
            <div className='div2' id="count2" onClick={question2}>2</div>
            <div className='div2' id="count3" onClick={question3}>3</div>
            <div className='div2' id="count4" onClick={question4}>4</div>
            <div className='div2' id="count5" onClick={question5}>5</div>
            <div className='div2' id="count6" onClick={question6}>6</div>
          </div>
        </div>
      </div>

     </div>
  )
}

export default Component1