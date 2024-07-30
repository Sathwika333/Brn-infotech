
import { useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  let inputRef=useRef();
  let dispatch =useDispatch();
  let storeObj = useSelector((store)=>{
    return store;
  });

  return (
    <div className="App">
      <div >
        <input ref={inputRef}></input>
        <button onClick={()=>{
           dispatch ({type:"addMovies",data:inputRef.current.value});

        }}>AddMovies</button>
         <button onClick={()=>{
           dispatch ({type:"addActors",data:inputRef.current.value});

        }}>AddActors</button>
        <h2>Movies:{storeObj.movies.join()}</h2>
        <h2>Actors:{storeObj.actors.join()}</h2>
      </div>
     
    </div>
  );
}

export default App;
