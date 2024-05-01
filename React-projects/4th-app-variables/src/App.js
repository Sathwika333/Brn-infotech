import './App.css';
import InterMarksheet from './components/interMarksheet';


function App() {
  return (
    <div className="App">
      <InterMarksheet name="SITHA INTERMEDIATE MARKS" eng="96" sansk="99" mathA="75" mathB="75" phys="60" chem="60" inWords="*NINE**SEVEN***ONE*" ></InterMarksheet>
      <InterMarksheet name="GITHA INTERMEDIATE MARKS" eng="26" sansk="88" mathA="27" mathB="28" phys="43" chem="35" inWords="*SEVEN**FIVE***THREE*" ></InterMarksheet>
    </div>
  );
}

export default App;
