import React, {useRef} from 'react'

function InterMark(props) {

    let engInputRef  = useRef();
    let sansInputRef = useRef();
    let mathAInputRef  = useRef();
    let mathBInputRef = useRef();
    let physInputRef  = useRef();
    let chemInputRef = useRef();
    let resultRef = useRef();

  return (
    <div>
        <form>
            <h2>{props.name}</h2>
            <div>
            <label>ENGLISH</label>
            <input ref = {engInputRef}></input>
            </div>
            <div>
            <label>SANSKRIT</label>
            <input ref = {sansInputRef}></input>
            </div>
            <div>
            <label>MATHS-(A)</label>
            <input ref = {mathAInputRef}></input>
            </div>
            <div>
            <label>MATHS-(B)</label>
            <input ref = {mathBInputRef}></input>
            </div>
            <div>
            <label>PHYSICS</label>
            <input ref = {physInputRef}></input>
            </div>
            <div>
            <label>CHEMISTRY</label>
            <input ref = {chemInputRef}></input>
            </div>
            <button type="button" onClick= {() => { 

            // engInputRef.current.style.backGroundColor= "blue";
               

                let english=Number(engInputRef.current.value);
                let sanskrit=Number(sansInputRef.current.value);
                let mathsA=Number(mathAInputRef.current.value);
                let mathsB=Number(mathBInputRef.current.value);
                let physics=Number(physInputRef.current.value);
                let chemistry=Number(chemInputRef.current.value);

                let totalMarks=english+sanskrit+mathsA+mathsB+physics+chemistry;
                // alert(totalMarks);
                resultRef.current.innerHTML=`I got ${totalMarks} marks in 1st year`;
            }}>Calculate</button>
            <div>
                <p ref={resultRef}></p>
            </div>
        </form>

    </div>
  )
}

export default InterMark