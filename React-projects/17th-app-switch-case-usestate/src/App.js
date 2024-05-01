import "./App.css";
import { useRef,useState } from "react";

function App() {
  let resultLabelRef = useRef();
  let [fruit,setfruit]=useState(0);
  let [vegetables,setvegetables]=useState(0);

  let OnChange = (eo) => {
    console.log(eo.target.value);

    switch (eo.target.value) {
      case "apple":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "banana":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "carrot":
        resultLabelRef.current.innerHTML = "vegetable";
        break;
      case "dragon fruit":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "eggplant":
        resultLabelRef.current.innerHTML = "vegetable";
        break;
      case "fig":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "guava":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "horseradish":
        resultLabelRef.current.innerHTML = "vegetable";
        break;
      case "jack fruit":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "kiwi":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "lemon":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "mango":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "orange":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "potato":
        resultLabelRef.current.innerHTML = "vegetable";
        break;
      case "raspberry":
        resultLabelRef.current.innerHTML = "fruit";
        break;
      case "spinach":
        resultLabelRef.current.innerHTML = "vegetable";
        break;
      case "tomato":
        resultLabelRef.current.innerHTML = "vegetable";
        break;
      case "watermelon":
        resultLabelRef.current.innerHTML = "fruit";
        break;

      default:
        resultLabelRef.current.innerHTML = "invalid";

        break;
    }
  };
  return (
    <div className="App">
      <div className="main">
        <label>FRUITS AND VEGETABLES</label>
        <select
          onChange={(eo) => {
            OnChange(eo);
          }}
        >
          <option>apple</option>
          <option>banana</option>
          <option>carrot</option>
          <option>dragon fruit</option>
          <option>eggplant</option>
          <option>fig</option>
          <option>almond</option>
          <option>kajju</option>
          <option>flakseed</option>
          <option>milk</option>
          <option>watermelonseed</option>
          <option>guava</option>
          <option>horseradish</option>
          <option>jack fruit</option>
          <option>kiwi</option>
          <option>lemon</option>
          <option>mango</option>
          <option>orange</option>
          <option>potato</option>
          <option>raspberry</option>
          <option>spinach</option>
          <option>tomato</option>
          <option>watermelon</option>
        </select>
        <label ref={resultLabelRef}>Fruit or vegetable</label>
      </div>
      <div className="state">
        <h2>Result:{fruit}/{vegetables}</h2>
        <button onClick={()=>{
          setfruit(fruit+1);
        }}>fruits</button>
        <br></br>
        <button onClick={()=>{
          setvegetables(vegetables+3);
        }}>vegetables</button>
        
      </div>
    </div>
  );
}

export default App;
