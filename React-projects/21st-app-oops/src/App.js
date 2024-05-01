import './App.css';
import TenthStudent from './classes/TenthStudent';
import React,{useRef} from 'react';

function App() {
  let sitha=useRef(new TenthStudent(99,95,25,97,98,99,"sitha"));
  let githa= new TenthStudent(99,95,66,97,77,99,"githa");
  // sathwika.engMarks=91;
  // sathwika.telMarks=95;
  // sathwika.hindiMarks=99;
  // sathwika.mathsMarks=99;
  // sathwika.sciMarks=95;
  // sathwika.sociMarksMarks=99;
  // sathwika.studentName="y.sathwika";

  githa.calculateResult();

 
  return (
    <div className="App">
      <button onClick={()=>{
        sitha.current.calculateResult();
      }} 
      >Tenth Result</button>
      
    </div>
  );
}

export default App;
