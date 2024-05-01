import React from 'react';
import './App.css';
import Movies from './classes/Movies';

function App() {

let movie1 = new Movies("Bhimaa", 2023);
let movie2 = new Movies("ooru peru bhairavakona", 2024);
let movie3 = new Movies("joe", 2023);
let movie4=new Movies("naa saami ranga",2023);

movie1.displayInfo();
movie2.displayInfo();
movie3.displayInfo();
movie4.displayInfo();

Movies.displayClassInfo();

  let movies=["Bhimaa","ooru peru bhairavakona","Hi nanna","naa saami ranga","joe"]

  return (
    <div className="App">
      <button onClick={()=>{
        console.log(movies.length);
        console.log(movies[3].length);
      }}>Length</button>

      <button onClick={()=>{
        console.log(movies.join("/"));
      }}>Join</button>

      <button onClick={()=>{
        console.log(movies.toString());
      }}>toString</button>

      <button onClick={()=>{
        console.log(Array.from(movies));
        console.log(Array.from(movies[1]));
      }}>From</button>
     
    </div>
  );
}

export default App;
