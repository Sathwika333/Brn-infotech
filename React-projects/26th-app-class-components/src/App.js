
import { useState } from 'react';
import './App.css';
import FCCounter from './components/FCCounter';
import CCcounter from './components/CCcounter';



function App() {
  let [show,setShow]=useState(true);
  return (
    <div className="App">

      <button onClick={()=>{
        setShow(!show)
      }}>show/hide</button>
      <br></br>
      {show===true?<FCCounter/>:null}
      {show===true? <CCcounter/>:null}
    

     
    </div>
  );
}

export default App;
