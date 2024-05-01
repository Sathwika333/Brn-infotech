import "./App.css";

function App() {
  let details = [
    { name: "geetha", age: "22", gender: "female" },
    { name: "sitha", age: "19", gender: "female" },
    { name: "raju", age: "25", gender: "male" },
  ];
  console.log(details[0]);
  console.log(details[1].name);

  let[geetha,sitha,raju]=details;
  console.log(geetha);
  console.log(sitha);
  console.log(raju);


  return (
  <div className="App">
    <img src="https://www.infoandapps.com/wp-content/uploads/2021/04/How-to-merge-arrays-or-arrays-of-objects-in-javascript.png" alt="..."></img>
  

  </div>
  );
}

export default App;
