import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [products, setProducts] = useState([]);

  useEffect(()=>{getProductsFromServer()},[])

  let getProductsFromServer = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch(
      "https://api.escuelajs.co/api/v1/products",
      reqOptions
    );
    let JSOData = await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          getProductsFromServer();
        }}
      >
        GET
      </button>

      <div className="productsContainer">
      {products.map((ele) => {
        return (
          <div className="productsDetail">
        <img src={ele.images} alt='...'></img>
        <p>{ele.description}</p>
        <h4>{ele.title}</h4>
        <h2>price:${ele.price}</h2>
       </div>
        )

      })}
      </div>
    </div>
  );
}

export default App;
