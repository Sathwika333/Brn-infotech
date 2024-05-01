import React, { useRef } from 'react'

function StudentDetails() {
    let firstInputRef=useRef();
    let lastInputRef=useRef();
    let fatherInputRef=useRef();
    let motherInputRef=useRef();
    let emailInputRef=useRef();
    let mobileInputRef=useRef();


    let firstResultRef=useRef();
    let lastResultRef=useRef();
    let fatherResultRef=useRef();
    let motherResultRef=useRef();
    let emailResultRef=useRef();
    let mobileResultRef=useRef();




    let firstRegExp = /^[A-Z][a-z]{2,10}$/;
    let lastRegExp = /^[A-Z][a-z]{2,30}$/;
    let fatherRegExp = /^[A-Z][a-zA-Z ]{1,19}$/;
    let motherRegExp = /^[A-Z] [A-Z][a-z]{1,30}$/;
    let emailRegExp=/^(?=.*[0-9].*[0-9])[^@\s]+@[^\s@]+\.[^\s@]+$/;
    let mobileRegExp= /^\d{10}$/;
    let validateName=(inputRef,resultRef,regExp)=>{
        let result= regExp.test(inputRef.current.value);

        if(result === true){
            resultRef.current.innerHTML="valid";
            resultRef.current.style.backgroundColor="green";

        }else{
            resultRef.current.innerHTML="Invalid";
            resultRef.current.style.backgroundColor="red";

        }

    }
  return (
    <div>
         <h1>Details about a student</h1>
      <img src="https://cdnimages.myclassboard.com/Website-2022/Erp/Student-information-system/SISBanner768x728.svg" alt="student information"></img>
     <form>
        <fieldset>
            <legend>Personal Details</legend>
        <div>
            <label>prefix:</label>
            <select>
                <option>Ms.</option>
                <option>Mr.</option>
                <option>Mrs.</option>
            </select>
        </div>
        <div>
            <label htmlFor="name">First Name:</label>
            <input type="text" id="name" placeholder="enter first name" ref={firstInputRef}
            onChange={()=>{
                validateName(firstInputRef,firstResultRef,firstRegExp)
            }}></input>
            <span ref={firstResultRef}></span>
        </div>
        <div>
            <label htmlFor="last"> Last Name:</label>
            <input type="text" id="last" placeholder="enter last name" ref={lastInputRef}
            onChange={()=>{
                validateName(lastInputRef,lastResultRef,lastRegExp)
            }}></input>
            <span  ref={lastResultRef} ></span>
        </div>
        <div>
            <label htmlFor="father"> Father Name:</label>
            <input type="text" id="father" placeholder="enter father's name" ref={fatherInputRef}
            onChange={()=>{
                validateName(fatherInputRef,fatherResultRef,fatherRegExp)
            }}></input>
            <span  ref={fatherResultRef} ></span>
        </div>
        <div>
            <label htmlFor="mother"> Mother Name:</label>
            <input type="text" id="mother" placeholder="enter mother's name" ref={motherInputRef}
            onChange={()=>{
                validateName(motherInputRef,motherResultRef,motherRegExp)
            }}></input>
              <span  ref={motherResultRef} ></span>
        </div>
        <div>
            <label htmlFor="dob">Birth Date:</label>
            <input type="date" id="dob"></input>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="enter email"ref={emailInputRef}
            onChange={()=>{
                validateName(emailInputRef,emailResultRef,emailRegExp)
            }}></input>
            <span  ref={emailResultRef} ></span>
        </div>
        <div>
            <label>Gender:</label>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" value="male"></input>
            <label htmlFor="female" selected>Female</label>
            <input type="radio"  name="gender" id="female" value="female" checked></input>
        </div>
        <div>
            <label htmlFor="Nationality">Nationality:</label>
            <input type="text" id="Nationality"></input>
        </div>
        <div>
            <label htmlFor="Religion">Religion:</label>
            <input type="text" id="Religion"></input>
        </div>
        <div>
            <label htmlFor="mn">Mobile No:</label>
            <input type="number" id="mn" ref={mobileInputRef}
            onChange={()=>{
                validateName(mobileInputRef,mobileResultRef,mobileRegExp)
            }}></input>
            <span  ref={mobileResultRef} ></span>
        </div>
        <div>
            <label htmlFor="mt">Mother Tongue:</label>
            <input type="text" id="mt"></input>
        </div>
        <div>
            <label>Profile picture:</label>
            <button type="file">Browse</button>No file selected.
        </div>
    </fieldset>

    <fieldset>
        <legend>Education Details</legend>
        <div>
        <label>School:</label>
        <input type="text" list="school"></input>
        <datalist id="school">
        <select>
            <option>Gautami modal school</option>
            <option> sri krshina veni talent school</option>
            <option>Madrasa Noor Ul Uloom.</option>
            <option>Shree Netaji Gurudev Gurukul.</option>
            <option>New Nalanda High School.</option> 
            <option>St Mary's High School.</option>
            <option>St Mark's High School.</option>
            <option>Sri Krishnaveni Concept School.</option>
        </select>
        </datalist>
        </div>
        <div>
        <label>High school:</label>
        <select>
            <option>sri chaitanya junior college</option>
            <option>sri gayatri junior college</option>
            <option>Narayana junior college</option>
            <option>Aadhya Group Of Institutions.</option>
            <option>Gandikota Management Academy.</option>
            <option>Sri Vaibhav College.</option>
            <option>Jahnavi Group Of Institutions.</option>
            <option>Ignite Junior College.</option>
            <option>Sri Aadya Junior College.</option> 
            <option>Iqbalia Junior College.</option>
            <option>Ignite IIT and Medical Academy.</option>
        </select>
        </div>
        <div>
        <label>College:</label>
        <select>
            <optgroup label="Telangana">
                <option>BVRIT Hyderabad - BVRIT Hyderabad College of Engineering for Womens</option>
                <option>BITS Hyderabad - BITS Pilani- Hyderabad Campus, Hyderabad</option>
                <option>BIET Ibrahimpatnam - Bharat Institute of Engineering and Technology</option>
                <option>Anurag University - Anurag University, Hyderabad</option>
                <option>CBIT Hyderabad - Chaitanya Bharathi Institute of Technology, Hyderabad</option>
                <option>GNITC Hyderabad - Guru Nanak Institutions Technical Campus</option>
                <option> IARE Hyderabad - Institute of Aeronautical Engineering, Dundigal</option>
                <option>ICFAI Tech- International Institute of Information Technology, Hyderabad</option>
                <option>KMIT Hyderabad - Keshav Memorial Institute of Technology, Hyderabad</option>
                <option>MGIT Hyderabad - Mahatma Gandhi Institute of Technology, Hyderabad</option>
                <option>MLRIT Dundigal - MLR Institute of Technology, Dundigal</option>
                <option>NGIT Uppal - Neil Gogte Institute of Technology, Hyderabad</option>
                <option>Anurag University - Anurag University, Hyderabad</option>
                <option>VJIT Hyderabad - Vidya Jyothi Institute of Technology, Hyderabad</option>
                <option> Sri indu institute of engineering and technology</option>
                <option>siddaratha institute of engineering and technolgy</option>
            </optgroup>
            <optgroup label="Andhra pradesh">
                <option>ANUCET Guntur - ANU College of Engineering and Technology, Guntur</option>
                <option>BEC Bapatla - Bapatla Engineering College, Bapatla</option>
                <option>AITAM Tekkali - Aditya Institute of Technology and Management, Tekkali</option>
                <option>BWEC Bapatla - Bapatla Women's Engineering College, Bapatla</option>
                <option>BITS VIZAG - Baba Institute of Technology and Sciences, Visakhapatnam</option>
                <option>BWEC Bapatla - Bapatla Women's Engineering College, Bapatla</option>
                <option>CEC Chirala - Chirala Engineering College, Chirala</option>
                <option>CIET Guntur - Chalapathi Institute of Engineering and Technology, Guntur</option>
                <option>CREC Tirupati - Chadalawada Ramanamma Engineering College, Tirupati</option>
                <option>GMRIT Rajam - GMR Institute of Technology, Rajam</option>
                <option>GITAM Institute of Technology, Visakhapatnam (GITAM University)</option>
                <option>IIT Tirupati - Indian Institute of Technology Tirupati</option>
            </optgroup>
            <optgroup label="Karnataka">
                <option> Ramaiah Institute of Technology.</option> 
                <option>RV College of Engineering.</option>
                <option>New Horizon College of Engineering.</option>
                <option>Dayanand Sagar College of Engineering.</option>
                <option>Nitte Meenakshi Institute of Technology.</option>
                <option>School of Engineering and Technology, Jain University.</option>
                <option>REVA University.</option>
            </optgroup>
        </select>
    </div>
    </fieldset>
    <div>
        <button>Submit</button>
    </div>
    </form>
    </div>
  )
}

export default StudentDetails