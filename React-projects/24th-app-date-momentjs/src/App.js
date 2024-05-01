import React, { useRef } from 'react';
import './App.css';
import moment from 'moment';

function App() {
  let dateInputRef= useRef();
  // let monthsArr=["January","Febraury","March","April","May","June","July","August","September","October","December"];
  // let daysArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return (
    <div className="App">
           <input type="datetime-local" ref={dateInputRef}></input>

<button onClick={()=>{
  let dateObj=new Date(dateInputRef.current.value);
 // let dateObj=new Date();
 // let dateObj=new Date("4 march 2024");
 // let dateObj=new Date(2024,2,4,24,60,60,120);
 // console.log(dateObj.getFullYear());
 // console.log(monthsArr[dateObj.getMonth()]);
 // console.log(dateObj.getDate());
 // console.log(dateObj.getHours());
 // console.log(dateObj.getMinutes());
 // console.log(dateObj.getSeconds());
 // console.log(dateObj.getMilliseconds());
 // console.log(daysArr[dateObj.getDay()]);
console.log( moment(dateObj).format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment(dateObj).add(1, 'days').calendar());
console.log(moment(dateObj).format('LL'));
}}>Date</button>
     
    </div>
  );
}

export default App;
