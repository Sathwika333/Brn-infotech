import React,{useRef} from 'react'

function IntermarkSheet(props) {
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
    let resResultRef =useRef();
    let passMarks=35;
    let PassMarks=28;
    let passMark=21;
    // let pass=167;
    let Color='lightgrey';

    const OnFocus=()=>{
        console.log("name:");
        nameInputRef.current.style.backgroundColor="lightsalmon";
        nameInputRef.current.style.width="260px";
    }
    const OnBlur=()=>{
        nameInputRef.current.style.backgroundColor= Color;
    }
   
    const OnClick=()=>{
        engInputRef.current.style.backgroundColor= Color;
        engInputRef.current.value=95;
        if(engInputRef.current.value>=passMarks){
            engResultRef.current.innerHTML= "pass";
            engResultRef.current.style.backgroundColor="green";
        }else{
            engResultRef.current.innerHTML="fail";
           engResultRef.current.style.backgroundColor="red";
        }
    }

    const OnClick1=()=>{
        sansInputRef.current.style.backgroundColor= Color;
        sansInputRef.current.value=99;
        if(sansInputRef.current.value>=passMarks && engInputRef.current.value>=passMarks ){
            sansResultRef.current.innerHTML="pass";
            sansResultRef.current.style.backgroundColor="green";
         }else{
            sansResultRef.current.innerHTML="fail";
            sansResultRef.current.style.backgroundColor="red";
         }
    }

    const OnClick2=()=>{
        mathAInputRef.current.style.backgroundColor= Color;
        mathAInputRef.current.value=75;
        if(mathAInputRef.current.value>=PassMarks || mathBInputRef.current.value>=PassMarks){
         mathAResultRef.current.innerHTML="pass";
         mathAResultRef.current.style.backgroundColor="green";
        }else{
         mathAResultRef.current.innerHTML="fail";
         mathAResultRef.current.style.backgroundColor="red";
        }
    }

    const OnClick3=()=>{
        mathBInputRef.current.style.backgroundColor= Color;
        mathBInputRef.current.value=74;
        if(mathBInputRef.current.value>=PassMarks && mathAInputRef.current.value>=PassMarks ){
            mathBResultRef.current.innerHTML="pass";
            mathBResultRef.current.style.backgroundColor="green";
        }else{
            mathBResultRef.current.innerHTML="fail";
            mathBResultRef.current.style.backgroundColor="red";
        }
    }

    const OnClick4=()=>{
        physInputRef.current.style.backgroundColor= Color;
        physInputRef.current.value=55;
        if(physInputRef.current.value>=passMark || chemInputRef.current.value>=passMark){
         physResultRef.current.innerHTML="pass";
         physResultRef.current.style.backgroundColor="green";
        }else{
        physResultRef.current.innerHTML="fail";
        physResultRef.current.style.backgroundColor="red";
        }
    }

    const OnClick5=()=>{
        chemInputRef.current.style.backgroundColor= Color;
        chemInputRef.current.value=60;
        if(chemInputRef.current.value>=passMark && physInputRef.current.value>=passMark){
            chemResultRef.current.innerHTML="pass";
            chemResultRef.current.style.backgroundColor="green";
        }else{
            chemResultRef.current.innerHTML="fail";
            chemResultRef.current.style.backgroundColor="red";
        } 
    }       
  return (
    <div className="container">
         <form>
            <h2>{props.name}📖✏️</h2>
            <div>
                <label className="name">NAME</label>
                <input ref={nameInputRef}
                  onFocus={()=>{
                    OnFocus();    
                }}
                onBlur={()=>{
                    OnBlur();
                }}
                
                ></input>
            </div>

            <div>
            <label>ENGLISH</label>
            <input ref = {engInputRef} ></input>
            <button type="button" onClick={()=>{
               OnClick();
            }}>english</button>
            <span ref={engResultRef}></span>
            </div>

            <div>
            <label>SANSKRIT</label>
            <input ref = {sansInputRef}></input>
             <button type="button" onClick={()=>{
                OnClick1();
            }}>sanskrit</button>
             <span ref={sansResultRef}></span>
            </div>

            <div>
            <label>MATHS-(A)</label>
            <input ref = {mathAInputRef}></input>
             <button type="button" onClick={()=>{
              OnClick2();
            }}>mathsA</button>
             <span ref={mathAResultRef}></span>
            </div>

            <div>
            <label>MATHS-(B)</label>
            <input ref = {mathBInputRef}></input>
            <button type="button" onClick={()=>{
              OnClick3();
            }}>mathsB</button>
             <span ref={mathBResultRef}></span>
            </div>

            <div>
            <label>PHYSICS</label>
            <input ref={physInputRef}></input>
            <button type="button" onClick={()=>{
              OnClick4();
            }}>physics</button>
             <span ref={physResultRef}></span>
            </div>

            <div>
            <label>CHEMISTRY</label>
            <input ref = {chemInputRef}></input>
            <button type="button" onClick={()=>{
              OnClick5();
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

                if(english>=passMarks && sanskrit>=passMarks && mathA>=PassMarks && mathB>=PassMarks && physics>=passMark && chemistry>=passMark){
                    resResultRef.current.innerHTML="pass";
                    resResultRef.current.style.backgroundColor="green";
                }else{
                    resResultRef.current.innerHTML="fail";
                    resResultRef.current.style.backgroundColor="red";
                }     
                
                let firstName=(nameInputRef.current.value);
                let totalMarks=english+sanskrit+mathA+mathB+physics+chemistry;
                let perc=totalMarks/470*100;
               
                resultRef.current.innerHTML=`${firstName} got ${totalMarks} marks with ${perc.toFixed(2)}%`;
            }}>Calculate</button>
             <span ref={resResultRef}></span>
            <div>
                <p ref={resultRef}></p>
            </div>
        </form>
   
    </div>
  )
}

export default IntermarkSheet;