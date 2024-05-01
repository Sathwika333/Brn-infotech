import React from 'react';
import './App.css';

function App() {
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

      <button onClick={()=>{
        console.log(movies);
        movies.push("12th Fail")
        console.log(movies);
      }}>Push</button>

      <button onClick={()=>{
        console.log(movies);
        movies.pop()
        console.log(movies);
      }}>Pop</button>

      <button onClick={()=>{
        console.log(movies);
        movies.shift()
        console.log(movies);
      }}>Shift</button>

      <button onClick={()=>{
        console.log(movies);
        movies.unshift("Animal")
        console.log(movies);
      }}>Unshift</button>

      <button onClick={()=>{
        movies.splice(4,0,"oh baby","salaar","kushi")
        console.log(movies)
      }}>Splice</button>

      <button onClick={()=>{
        console.log(movies.at(4));
      }}>At</button>

      <button onClick={()=>{
        let movies1=["Hit","sarkaru vaari paata","v","pengiun"];
        let movies2=movies.concat(movies1);
        console.log(movies2);
      }}>Concat</button>

      <button onClick={()=>{
        movies.fill("psycho",3)
        console.log(movies)
      }}>Fill</button>

      <button onClick={()=>{
        let movies1=["Hit","sarkaru vaari paata","v","pengiun"];
        let movies2=[movies1];
        let flattendArr=  movies2.flat();;
        console.log(flattendArr);        
      }}>Flat</button>

      <button onClick={()=>{
        console.log(movies.includes("Hi nanna"));
        console.log(movies.includes("v"));
      }}>Includes</button>

      <button onClick={()=>{
         console.log(movies.indexOf("Hi nanna"));
         console.log(movies.indexOf("v"));
      }}>IndexOf</button>

      <button onClick={()=>{
        console.log(movies.lastIndexOf("joe"));
        console.log(movies.lastIndexOf("v"));
      }}>LastIndexOf</button>

      <button onClick={()=>{
        console.log(Array.isArray("sathwika"));
        console.log(Array.isArray(["name","sathwika"]));
      }}>isArray</button>

      <button onClick={()=>{
        console.log(movies.slice(1,3))
      }}>slice</button>
      
    </div>
  );
}

export default App;
