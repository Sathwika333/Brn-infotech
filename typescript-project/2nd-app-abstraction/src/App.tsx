import React from 'react';
import './App.css';
import DaughterDetails from './classes/Daughter';


function App() {
  let fatherDetails=new DaughterDetails("Y.Ramesh", 52,"Male", "1230456789");
  fatherDetails.displayDetails();

  let daughterDetails=new DaughterDetails("Y.Sathwika",22,"Female","9874056321");
  daughterDetails.displayDetails();

 
  return (
    <div className="App">
      <h1>Details</h1>
    </div>
  );
}

export default App;
