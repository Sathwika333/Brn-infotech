import { useEffect, useState } from 'react';
import './App.css';
import Product from './Components/Product';

function App() {
  const[products,setproducts]=useState([]);

  const getAllProducts=async()=>{
    const res=await fetch('http://localhost:4000/products',{
      method:"GET"
    })
    const data=await res.json();
    setproducts(data)
  }

  useEffect(()=>{
    getAllProducts();
  })
  return (
    <main className="Container">
      {products.map((item)=>{
        return <Product item={item}/>
      })}

    </main>
  );
}

export default App;
