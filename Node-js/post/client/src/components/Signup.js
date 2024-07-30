import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Signup() {
    let firstInputRef = useRef();
    let lastInputRef = useRef();
    let userInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let confpasswordInputRef = useRef();
   let genderSelectRef=useRef();
   let profilePicInputRef=useRef();

    let sendDataToServerUsingJSON = async()=>{
        let myHeader = new Headers();
        myHeader.append("content-type","application/json");
        let dataToSend={
            firstName: firstInputRef.current.value,
            lastName: lastInputRef.current.value,
            userName: userInputRef.current.value,
            gender:genderSelectRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            confirmpassword: confpasswordInputRef.current.value,
           profilePic:profilePicInputRef.current.value,
        }

        let reqOptions={
            method:"POST",
            headers:myHeader,
            body:JSON.stringify(dataToSend),
        };

        let JSONData=await fetch ("http://localhost:1234/signup",reqOptions);
        let JSOData = await JSONData.json();
        alert(JSOData.msg);
        console.log(JSOData);
    }


  return (
    <div className="App">
      <form className="App1">
        <h2>Signup</h2>
        <div>
          <label>First Name:</label>
          <input type="text" ref={firstInputRef}></input>
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" ref={lastInputRef}></input>
        </div>
        <div>
          <label>User Name:</label>
          <input type="text" ref={userInputRef}></input>
        </div>
        <div>
          <label>Gender:</label>
          <select ref={genderSelectRef}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordInputRef}></input>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" ref={confpasswordInputRef}></input>
        </div>
        <div>
          <label>Profile Pic:</label>
          <input type="file" ref={profilePicInputRef} ></input>
        </div>
        <div className="checkbox">
          <input type="checkbox" ></input>
          <label>
            I accept the Terms of Use & Privacy Policy
          </label>
        </div>
        <div>
          <button type="button"onClick={()=>{
           sendDataToServerUsingJSON ();
          }}
          >Signup</button>
        </div>
        <div className="link">
          <p>Already have an account.</p>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
