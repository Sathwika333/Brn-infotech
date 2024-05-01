import React, { useEffect, useState } from 'react'

function FCCounter() {
    let [score,setScore]=useState(0);
    let [wickets,setWickets]=useState(0);


    useEffect(()=>{
        console.log("FCCounter loaded");
    });

    useEffect(()=>{
        console.log("Score or Wickets sv value changes")
    },[score,wickets]);

    useEffect(()=>{
        return()=>{
        console.log("FCCounter will unload");
        }
    });

  return (
    <div className='counter'>
        <h3>FCCounter</h3>
        <h1>Score:{score}</h1>
        <h1>Wickets:{wickets}</h1>
        <button onClick={()=>{
            setScore(score+1);
        }}>Increment Score</button>

        <button onClick={()=>{
            setScore(score-1);
        }}>Decrement Score</button>
        <br></br>
        <br></br>

       <button onClick={()=>{
            setWickets(wickets+1);
        }}>Increment Wickets</button>
    
        <button onClick={()=>{
            setWickets(wickets-1);
        }}>Decrement Wickets</button>

    </div>
  )
}

export default FCCounter
