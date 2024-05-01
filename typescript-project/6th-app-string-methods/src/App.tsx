import React from 'react';
import './App.css';

function App() {
  let name="Sathwika";
  return (
    <div className="App">
      <button onClick={()=>{
        console.log(name.toUpperCase());
        console.log(name.toLowerCase());
      }}>toUpperCase/toLowerCase</button>

      <button onClick={()=>{
        let message="    My name is sathwika    ";

        console.log(`----->${message.trim()}<-----`);
        console.log(`----->${message.trimStart()}<-----`);
        console.log(`----->${message.trimEnd()}<-----`);

      }}>trim/trimStart/trimEnd</button>

      <button onClick={()=>{
        let name="sathwika";
        console.log(name.padStart(100,"s"));
        console.log(name.padEnd(100,"a"));
      }}>padStart/padEnd</button>

      <button onClick={()=>{
        let firstName="Yadhire";
        let lastName="Sathwika";
        let fullName=firstName.concat(lastName);
        console.log(fullName);
      }}>concat</button>

      <button onClick={()=>{
         let message="My name is sathwika";
         console.log(message.replace("sathwika","y.sathwika"));
         console.log(message.replaceAll("s","S"));
      }}>replace/replaceAll</button>

      <button onClick={()=>{
           let message="My name is sathwika";
           console.log(message.repeat(10));
      }}>repeat</button>

      <button onClick={()=>{
        let msg="Nothing is impossible. The word itself says 'I'm possible!'";
        console.log(msg.split("i"));
      }}>split</button>

      <button onClick={()=>{
        let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log(alphabets.slice(9,14));
        console.log(alphabets.substring(9,14));
        console.log(alphabets.substr(9,5));
      }}>slice/substring/substr</button>

      <button onClick={()=>{
         let msg="Nothing is impossible. The word itself says 'I'm possible!'";
         console.log(msg.length);
      }}>length</button>

      <button onClick={()=>{
         let msg="Nothing is impossible. The word itself says 'I'm possible!'";
         for(let i=0;i<=msg.length;i++){
          console.log(msg.charAt(i));
         }
      }}>charAt</button>

      <button onClick={()=>{
         let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         console.log(alphabets.charCodeAt(0));
         console.log(alphabets.charCodeAt(5));
      }}>charcodeAt</button>

      <button onClick={()=>{
        for(let i=65;i<=100;i++){
          console.log(String.fromCharCode(i));
        }
      }}>fromcharcode</button>
  
      <button onClick={()=>{
        let msg="Nothing is impossible. The word itself says 'I'm possible!'";
        console.log(msg.startsWith("Nothing"));
        console.log(msg.endsWith("pass"));
      }}>startsWith/endsWith</button>

      <button onClick={()=>{
          let msg="Nothing is impossible. The word itself says 'I'm possible!'";
          console.log(msg.includes("is"));
      }}>includes</button>

      <button onClick={()=>{
           let msg="Nothing is impossible. The word itself says 'I'm possible!'";
           console.log(msg.search(/impossible/i));
      }}>search</button>
     
    </div>
  );
}

export default App;
