import React,{useRef} from 'react'

function InterMarks(props) {

    let nameInputRef=useRef();
    let engInputRef  = useRef();
    let sansInputRef = useRef();
    let mathAInputRef  = useRef();
    let mathBInputRef = useRef();
    let physInputRef  = useRef();
    let chemInputRef = useRef();
    let resultRef = useRef();

    let engResultRef=useRef();
    let sansResultRef=useRef();
    let mathAResultRef=useRef();
    let mathBResultRef=useRef();
    let physResultRef=useRef();
    let chemResultRef=useRef();

  return (
    <div>
         <form>
            <h2>{props.name}📖✏️</h2>
            <div>
                <label>NAME</label>
                <input ref={nameInputRef}
                  onFocus={()=>{
                    console.log("name:");
                    nameInputRef.current.style.backgroundColor="lightsalmon";
                    nameInputRef.current.style.width="260px";
                }}
                onBlur={()=>{
                    nameInputRef.current.style.backgroundColor="lightgray";
                }}
                ></input>
            </div>
            <div>
            <label>ENGLISH</label>
            <input ref = {engInputRef} 
            onFocus={()=>{
                console.log("english marks:");
                engInputRef.current.style.backgroundColor="lightsalmon";
            }}
            onChange={()=>{
                console.log("engInputRef.current.value:" >=35 ? 'Pass' : 'Fail' );
                engResultRef.current.innerHTML=engInputRef.current.value >=35 ? 'Pass' : 'Fail';
                engResultRef.current.style.backgroundColor=engInputRef.current.value >=35 ? 'green' : 'red';

            }}
            onBlur={()=>{
                engInputRef.current.style.backgroundColor="lightgray";
            }}></input>
            <span ref={engResultRef}></span>
            </div>
            <div>
            <label>SANSKRIT</label>
            <input ref = {sansInputRef}
             onFocus={()=>{
                console.log("sanskrit marks:");
                sansInputRef.current.style.backgroundColor="lightsalmon";
            }}
            onChange={()=>{
                console.log("engInputRef.current.value:" >=35 ? 'Pass' : 'Fail' );
                sansResultRef.current.innerHTML=sansInputRef.current.value >=35 ? 'Pass' : 'Fail';
                sansResultRef.current.style.backgroundColor=engInputRef.current.value >=35 ? 'green' : 'red';

            }}
            onBlur={()=>{
                sansInputRef.current.style.backgroundColor="lightgray";
            }}></input>
             <span ref={sansResultRef}></span>
            </div>
            <div>
            <label>MATHS-(A)</label>
            <input ref = {mathAInputRef}
             onFocus={()=>{
                console.log("mathsA marks:");
                mathAInputRef.current.style.backgroundColor="lightsalmon";
            }}
            onChange={()=>{
                console.log("mathAInputRef.current.value:" >=27 ? 'Pass' : 'Fail' );
                mathAResultRef.current.innerHTML=mathAInputRef.current.value >=27 ? 'Pass' : 'Fail';
                mathAResultRef.current.style.backgroundColor=engInputRef.current.value >=35 ? 'green' : 'red';

            }}
            onBlur={()=>{
                mathAInputRef.current.style.backgroundColor="lightgray";
            }}></input>
            <span ref={mathAResultRef}></span>
            </div>
            <div>
            <label>MATHS-(B)</label>
            <input ref = {mathBInputRef}
             onFocus={()=>{
                console.log("mathsB marks:");
                mathBInputRef.current.style.backgroundColor="lightsalmon";
            }}
            onChange={()=>{
                console.log("mathBInputRef.current.value:" >=28 ? 'Pass' : 'Fail' );
                mathBResultRef.current.innerHTML=mathBInputRef.current.value >=28 ? 'Pass' : 'Fail';
                mathBResultRef.current.style.backgroundColor=engInputRef.current.value >=35 ? 'green' : 'red';

            }}
            onBlur={()=>{
                mathBInputRef.current.style.backgroundColor="lightgray";
            }}></input>
            <span ref={mathBResultRef}></span>
            </div>
            <div>
            <label>PHYSICS</label>
            <input ref = {physInputRef}
             onFocus={()=>{
                console.log("physics marks:");
                physInputRef.current.style.backgroundColor="lightsalmon";
            }}
            onChange={()=>{
                console.log("physInputRef.current.value:" >=21 ? 'Pass' : 'Fail' );
                physResultRef.current.innerHTML=physInputRef.current.value >=21 ? 'Pass' : 'Fail';
                physResultRef.current.style.backgroundColor=engInputRef.current.value >=35 ? 'green' : 'red';

            }}
            onBlur={()=>{
                physInputRef.current.style.backgroundColor="lightgray";
            }}></input>
            <span ref={physResultRef}></span>
            </div>
            <div>
            <label>CHEMISTRY</label>
            <input ref = {chemInputRef}
             onFocus={()=>{
                console.log("chemistry marks:");
                chemInputRef.current.style.backgroundColor="lightsalmon";
            }}
            onChange={()=>{
                console.log("chemInputRef.current.value:" >=21 ? 'Pass' : 'Fail' );
                chemResultRef.current.innerHTML=chemInputRef.current.value >=21 ? 'Pass' : 'Fail';
                chemResultRef.current.style.backgroundColor=engInputRef.current.value >=35 ? 'green' : 'red';

            }}
            onBlur={()=>{
                chemInputRef.current.style.backgroundColor="lightgray";
            }}></input>
            <span ref={chemResultRef}></span>
            </div>
            <button type="button" onClick= {() => { 

            // engInputRef.current.style.backGroundColor= "blue";
               
                let firstName=(nameInputRef.current.value);
                let english=Number(engInputRef.current.value);
                let sanskrit=Number(sansInputRef.current.value);
                let mathsA=Number(mathAInputRef.current.value);
                let mathsB=Number(mathBInputRef.current.value);
                let physics=Number(physInputRef.current.value);
                let chemistry=Number(chemInputRef.current.value);

                let totalMarks=english+sanskrit+mathsA+mathsB+physics+chemistry;
                let perc=totalMarks/470*100;
                // alert(totalMarks);
                resultRef.current.innerHTML=`${firstName} got ${totalMarks} marks with ${perc}%`;
            }}>Calculate</button>
            <div>
                <p ref={resultRef}></p>
            </div>
        </form>
    </div>
  )
}

export default InterMarks