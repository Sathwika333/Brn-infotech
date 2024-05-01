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
    let resResultRef =useRef();
    let Color='lightgrey';
    const OnFocus=()=>{
        nameInputRef.current.style.backgroundColor="lightsalmon";
        nameInputRef.current.style.width="260px";
    }
    const OnBlur=()=>{
        nameInputRef.current.style.backgroundColor= Color;
    }
    let inputOnClick=(inputRef,passMarks,resultRef,maxMarks)=>{

        inputRef.current.style.backgroundColor= Color;
        let marks=inputRef.current.value;
        
        if(marks>=0 && marks<=maxMarks){
            if(marks>=passMarks){
                resultRef.current.innerHTML= "pass";
                resultRef.current.style.backgroundColor="green";
            }else{
               resultRef.current.innerHTML="fail";
               resultRef.current.style.backgroundColor="red";
            }
        }else{
            resultRef.current.innerHTML= "invalid";
            resultRef.current.style.backgroundColor="deeppink";  
    }
    }
   
  return (
    <div className="container">
        <form>
            <h2>{props.name}📖✏️</h2>
            <div >
                <label >NAME</label>
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
               inputOnClick(engInputRef,35,engResultRef,99);
            }}>english</button>
            <span ref={engResultRef}></span>
            </div>

            <div>
            <label>SANSKRIT</label>
            <input ref = {sansInputRef}></input>
             <button type="button" onClick={()=>{
                inputOnClick(sansInputRef,35,sansResultRef,99);
            }}>sanskrit</button>
             <span ref={sansResultRef}></span>
            </div>

            <div>
            <label>MATHS-(A)</label>
            <input ref = {mathAInputRef}></input>
             <button type="button" onClick={()=>{
             inputOnClick(mathAInputRef,27,mathAResultRef,75);
            }}>mathsA</button>
             <span ref={mathAResultRef}></span>
            </div>

            <div>
            <label>MATHS-(B)</label>
            <input ref = {mathBInputRef}></input>
            <button type="button" onClick={()=>{
              inputOnClick(mathBInputRef,29,mathBResultRef,75);
            }}>mathsB</button>
             <span ref={mathBResultRef}></span>
            </div>

            <div>
            <label>PHYSICS</label>
            <input ref={physInputRef}></input>
            <button type="button" onClick={()=>{
              inputOnClick(physInputRef,21,physResultRef,60);
            }}>physics</button>
             <span ref={physResultRef}></span>
            </div>

            <div>
            <label>CHEMISTRY</label>
            <input ref = {chemInputRef}></input>
            <button type="button" onClick={()=>{
             inputOnClick(chemInputRef,21,chemResultRef,60);
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
                if(totalMarks>=0 && totalMarks<=470){
                    if(totalMarks>=167){
                        resultRef.current.innerHTML= "pass";
                        resultRef.current.style.backgroundColor="green";
                    }else{
                       resultRef.current.innerHTML="fail";
                       resultRef.current.style.backgroundColor="red";
                    }
                }else{
                    resultRef.current.innerHTML= "invalid";
                    resultRef.current.style.backgroundColor="deeppink";  
            }
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

export default IntermarksSheet; 