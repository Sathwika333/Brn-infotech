import './App.css';
import React, {useRef} from "react";

function App() {

  let resultInputRef=useRef();
  

  let  OnClick=()=>{
    let results='';

  for(let i=1;i<=500;i++){
    if((i>6&&i<8)||(i>45&&i<47)||(i>58&&i<60)||(i>472&&i<474)||(i>346&&i<348)||(i>258&&i<260)){
      continue;
    }
    for(let j=1;j<=100;j++){
      if((j>5&&j<7)||(j>8&&j<10)||(j>11&&j<13)||(j>14&&j<16)||(j>15&&j<17)||(j>16&&j<18)||(j>22&&j<24)||(j>26&&j<28)||(j>33&&j<35)||(j>45&&j<47)||(j>54&&j<56)||(j>63&&j<65)||(j>78&&j<80)){
        continue;
      }
      results +=` ${i}*${j}=${i * j} <br>`;
    
    } 
  }
  resultInputRef.current.innerHTML = results;
}

  

  return (
    <div className="App">
      <h1>TABLES</h1>
      <button onClick={()=>{
        OnClick();
      }}>TABLES</button>
      <div className="result" ref={resultInputRef}></div>
    </div>
  );
}

export default App;
