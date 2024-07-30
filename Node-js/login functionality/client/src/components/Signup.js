import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

  let [pic,setPic]=useState("./images/noImage.png");

    let firstInputRef = useRef();
    let lastInputRef = useRef();
    let userInputRef = useRef();
    let ageInputRef=useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let confpasswordInputRef = useRef();
    let profilePicInputRef=useRef();





    let sendDataToServerUsingJSON = async()=>{
        let myHeader = new Headers();
        myHeader.append("content-type","application/json");
        let dataToSend={
            firstName: firstInputRef.current.value,
            lastName: lastInputRef.current.value,
            userName: userInputRef.current.value,
            age:ageInputRef.current.value,
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
    };

    let sendDataToServerUsingURLEncoded = async()=>{
      let myHeader = new Headers();
      myHeader.append("content-type","application/x-www-form-urlencoded");
      let dataToSend=new URLSearchParams();
        dataToSend.append("firstName", firstInputRef.current.value);
        dataToSend.append("lastName", lastInputRef.current.value);
        dataToSend.append("userName", userInputRef.current.value);
        dataToSend.append("age",ageInputRef.current.value);
        dataToSend.append("email", emailInputRef.current.value);
        dataToSend.append("password", passwordInputRef.current.value);
        dataToSend.append("confirmpassword", confpasswordInputRef.current.value);
        dataToSend.append("profilePic",profilePicInputRef.current.value);

    let reqOptions={
      method:"POST",
      headers:myHeader,
      body:dataToSend,

    };
    
    let JSONData = await fetch("http://localhost:1234/signup",reqOptions);

    let JSOData =await JSONData.json();
    console.log(JSOData);

    };

    let sendDataToServerUsingFormData = async()=>{
     
      let dataToSend=new FormData();
        dataToSend.append("firstName", firstInputRef.current.value);
        dataToSend.append("lastName", lastInputRef.current.value);
        dataToSend.append("userName", userInputRef.current.value);
        dataToSend.append("age",ageInputRef.current.value);
        dataToSend.append("email", emailInputRef.current.value);
        dataToSend.append("password", passwordInputRef.current.value);
        dataToSend.append("confirmpassword", confpasswordInputRef.current.value);
        for(let i=0;i<=profilePicInputRef.current.files.length;i++){
        dataToSend.append("profilePic",profilePicInputRef.current.files[i]);
        }

    let reqOptions={
      method:"POST",
      body:dataToSend,

    };
    
    let JSONData = await fetch("http://localhost:1234/signup",reqOptions);

    let JSOData =await JSONData.json();
    alert(JSOData.msg);
    console.log(JSOData);

    };


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
       <label>Age:</label>
       <input ref={ageInputRef}></input>
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
          <input type="file" ref={profilePicInputRef} onChange={(eo)=>{
            let selectImage=URL.createObjectURL(eo.target.files[0]);
            setPic(selectImage);
          }}></input>
        </div>
        <div>
          <img className="pic" src={pic} alt=".."></img>
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
          <button  type="button"onClick={()=>{
         sendDataToServerUsingURLEncoded();
          }}>Signup(urlEN)</button>
             <button  type="button"onClick={()=>{
        sendDataToServerUsingFormData() 
          }}>Signup(urlFD)</button>
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
