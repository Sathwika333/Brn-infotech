import React from 'react'

function interMarksheet(props) {
    let eng=Number(props.eng);
    let sansk=Number(props.sansk);
    let mathA=Number(props.mathA);
    let mathB=Number(props.mathB);
    let phys=Number(props.phys);
    let chem=Number(props.chem);
    let engMark = Number(88);
    let sanskMark=Number(99);
    let mathAMark=Number(75);
    let mathBMark=Number(74);
    let physMark=Number(52);
    let chemMark=Number(58);
    let practicalsPhys=Number(30);
    let practicalsChem=Number(30);

    let GrandTotal = eng+sansk+mathA+mathB+phys+chem+engMark+sanskMark+mathAMark+mathBMark+physMark+chemMark+practicalsPhys+practicalsChem;
    let perc = GrandTotal/1000*100;
    
  return (
    <div>
        <table>
        <caption>{props.name}</caption>
        <thead>
            <tr>
                <th colspan="2"></th>
                <th colspan="2">part-1</th>
                <th colspan="2">part-2</th>
                <th colspan="2">part-3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>YEAR</th>
                <th>SUBJECT</th>
                <th>ENGLISH</th>
                <th>SANSKRIT</th>
                <th>MATHS-(A)</th>
                <th>MATHS-(B)</th>
                <th>PHYSICS</th>
                <th>CHEMISTRY</th>
            </tr>
            <tr>
                <td rowspan="2">1st YEAR</td>
                <td>MAX MARKS</td>
                <td colspan="2">100</td>
                <td colspan="2">75</td>
                <td colspan="2">60</td>
            </tr>
            <tr>
                <td>MARKS SECURED</td>
                <td>{props.eng} {props.eng >=35 ? "P" : "F" }</td>
                <td>{props.sansk} {props.sank >=35 ? "P" : "F" }</td>
                <td>{props.mathA} {props.mathA >=28 ? "P" : "F" }</td>
                <td>{props.mathB}  {props.mathB >=28 ? "P" : "F" }</td>
                <td>{props.phys} {props.phys >=21 ? "P" : "F" }</td>
                <td>{props.chem} {props.chem >=21 ? "P" : "F" }</td>
            </tr>
            <tr>
                <td rowspan="2">2nd YEAR</td>
                <td>MAX MARKS</td>
                <td colspan="2">100</td>
                <td colspan="2">75</td>
                <td colspan="2">60</td>
            </tr>
            <tr>
                <td>MARKS SECURED</td>
                <td>{engMark} {engMark >=35 ? "P" : "F" }</td>
                <td>{sanskMark} {sanskMark >=35 ? "P" : "F" }</td>
                <td>{mathAMark} {mathA >=28 ? "P" : "F" }</td>
                <td>{mathBMark} {mathB >=28 ? "P" : "F" }</td>
                <td>{physMark} {physMark >=60 ? "P" : "F" }</td>
                <td>{chemMark} {chemMark >=21 ? "P" : "F" }</td>
            </tr>
            <tr>
                <td rowspan="2">PRACTICALS</td>
                <td>MAX MARKS</td>
                <td colspan="4"></td>
                <td colspan="2" >30</td>
                
            </tr>
            <tr>
                <td>MARKS SECURED</td>
                <td colspan="4"></td>
                <td>{practicalsPhys}</td>
                <td>{practicalsChem}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>GRAND TOTAL:</td>
                <td colspan="2">{GrandTotal}</td>
                <td>PERCENTAGE:</td>
                <td>{perc}%</td>
                <td colspan="3">GRAND TOTAL(in words):{props.inWords}</td>
            </tr>
        </tfoot>

    </table>
    </div>
  )
}

export default interMarksheet