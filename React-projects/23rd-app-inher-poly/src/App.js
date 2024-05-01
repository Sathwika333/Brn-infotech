import './App.css';
import DaughterDetails from './classes/Daughter';
import FatherDetails from './classes/Father';

function App() {
  let fatherDetails=new FatherDetails("Y.Ramesh",52,1234567890);
  fatherDetails.displayDetails();

  let daughterDetails=new DaughterDetails("Y.Sathwika",22,9874056321);
  daughterDetails.displayDetails();
 
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
