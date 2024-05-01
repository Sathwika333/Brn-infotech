import React,{useRef} from 'react'

function IntermarksSheet(props) {
    
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
                <label className="name">NAME</label>
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
            <input ref = {engInputRef} ></input>
            <button type="button" onClick={()=>{
               engInputRef.current.style.backgroundColor= "lightgrey";
               engInputRef.current.value=95;
                 if(engInputRef.current.value>=35){
                   engResultRef.current.innerHTML="pass";
                   engResultRef.current.style.backgroundColor="green";
                }else{
                    engResultRef.current.innerHTML="fail";
                   engResultRef.current.style.backgroundColor="red";
                }
            }}>english</button>
            <span ref={engResultRef}></span>
            </div>
            <div>
            <label>SANSKRIT</label>
            <input ref = {sansInputRef}></input>
             <button type="button" onClick={()=>{
               sansInputRef.current.style.backgroundColor= "lightgrey";
               sansInputRef.current.value=99;
                 if(sansInputRef.current.value>=35){
                    sansResultRef.current.innerHTML="pass";
                    sansResultRef.current.style.backgroundColor="green";
                }else{
                    sansResultRef.current.innerHTML="fail";
                    sansResultRef.current.style.backgroundColor="red";
                }
            }}>sanskrit</button>
             <span ref={sansResultRef}></span>
            </div>
            <div>
            <label>MATHS-(A)</label>
            <input ref = {mathAInputRef}></input>
             <button type="button" onClick={()=>{
               mathAInputRef.current.style.backgroundColor= "lightgrey";
               mathAInputRef.current.value=75;
                 if(mathAInputRef.current.value>=27){
                    mathAResultRef.current.innerHTML="pass";
                    mathAResultRef.current.style.backgroundColor="green";
                }else{
                    mathAResultRef.current.innerHTML="fail";
                    mathAResultRef.current.style.backgroundColor="red";
                }
            }}>mathsA</button>
             <span ref={mathAResultRef}></span>
            </div>
            <div>
            <label>MATHS-(B)</label>
            <input ref = {mathBInputRef}></input>
            <button type="button" onClick={()=>{
               mathBInputRef.current.style.backgroundColor= "lightgrey";
               mathBInputRef.current.value=74;
                 if(mathBInputRef.current.value>=28){
                    mathBResultRef.current.innerHTML="pass";
                    mathBResultRef.current.style.backgroundColor="green";
                }else{
                    mathBResultRef.current.innerHTML="fail";
                    mathBResultRef.current.style.backgroundColor="red";
                }
            }}>mathsB</button>
             <span ref={mathBResultRef}></span>
            </div>
            <div>
            <label>PHYSICS</label>
            <input ref={physInputRef}></input>
            <button type="button" onClick={()=>{
               physInputRef.current.style.backgroundColor= "lightgrey";
               physInputRef.current.value=55;
                 if(physInputRef.current.value>=21){
                    physResultRef.current.innerHTML="pass";
                    physResultRef.current.style.backgroundColor="green";
                }else{
                    physResultRef.current.innerHTML="fail";
                    physResultRef.current.style.backgroundColor="red";
                }
            }}>physics</button>
             <span ref={physResultRef}></span>
            </div>
            <div>
            <label>CHEMISTRY</label>
            <input ref = {chemInputRef}></input>
            <button type="button" onClick={()=>{
               chemInputRef.current.style.backgroundColor= "lightgrey";
               chemInputRef.current.value=60;
                 if(chemInputRef.current.value>=21){
                    chemResultRef.current.innerHTML="pass";
                    chemResultRef.current.style.backgroundColor="green";
                   
                }else{
                    chemResultRef.current.innerHTML="fail";
                    chemResultRef.current.style.backgroundColor="red";
                }
            }}>chemistry</button>
             <span ref={chemResultRef}></span>
            </div>
            <button type="button" onClick= {() => { 
                let english=Number(engInputRef.current.value);
                let sanskrit=Number(sansInputRef.current.value);
                let mathA=Number(mathAInputRef.current.value);
                let mathB=Number(mathBInputRef.current.value);
                let physics=Number(physInputRef.current.value);
                let chemistry=Number(chemInputRef.current.value);

                let firstName=(nameInputRef.current.value);
                let totalMarks=english+sanskrit+mathA+mathB+physics+chemistry;
                let perc=totalMarks/470*100;
                resultRef.current.innerHTML=`${firstName} got ${totalMarks} marks with ${perc.toFixed(2)}%`;
            }}>Calculate</button>
            <div>
                <p ref={resultRef}></p>
            </div>
        </form>
    </div>
  )
}

export default IntermarksSheet