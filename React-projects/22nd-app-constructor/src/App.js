import './App.css';
import DaughterDetails from './classes/Daughter';
import FatherDetails from './classes/Father';

function App() {
  let fatherDetails=new FatherDetails("Y.Ramesh",52);
  let daughterDetails=new DaughterDetails("Y.Sathwika",22);

  fatherDetails.displayDetails();
  daughterDetails.displayDetails();


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
