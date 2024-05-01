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

      <button onClick={()=>{
        movies.forEach((ele)=>{
          console.log(ele);
        })
      }}>forEach</button>

      <button onClick={()=>{
        let marks=[91,99,75,82,88,65];
        let result=marks.every((ele)=>{
          return ele>=35
        })
        if(result===true){
          console.log("passed in tenth");
        }else{
          console.log("failed in tenth")
        }
      }}>Every</button>

      <button onClick={()=>{
        let marks=[91,10,99,25,75,82,11,10,88,65];
        let m1=marks.find((ele)=>{
          return ele<=25;
        })
        console.log(m1);

        let m2=marks.findIndex((ele)=>{
          return ele<=25;
        })
        console.log(m2);
      }}>find</button>

      <button onClick={()=>{
        let marks=[91,10,99,25,75,82,11,10,88,65];
        let failedMarks=marks.filter((ele)=>{
          return ele<35;
        });
        console.log(failedMarks);

        let above50Marks=marks.filter((ele)=>{
          return ele>=50;
        });
        console.log(above50Marks);

        let evenMarks=marks.filter((ele)=>{
          return ele %2 ===0;
        });
        console.log(evenMarks);

      }}>filter</button>

      <button onClick={()=>{
        console.log(movies.indexOf("joe"))
      }}>indexOf</button>

      <button onClick={()=>{
        console.log(movies);
        movies.sort();
        console.log(movies);
      }}>sort</button>

      <button onClick={()=>{
        let marks=[91,99,75,82,88,65];
        let result=marks.reduce((ele,tot= 0)=>{
          return (tot+=ele);
        })
        console.log(result);
       
      }}>reduce/reduceRight</button>

      <button onClick={()=>{
        let marks=[11,22,33,44,55,66,77];
        let marksWithBonus=marks.map((ele)=>{
        return ele+5;
      });
      console.log(marksWithBonus);

      }}>map</button>
    </div>
  );
}

export default App;
