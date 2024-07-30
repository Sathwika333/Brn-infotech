import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import { useSelector } from "react-redux";

function EditProfile() {

  let [pic,setPic]=useState("./images/noImage.png");

    let firstInputRef = useRef();
    let lastInputRef = useRef();
    let userInputRef = useRef();
    let ageInputRef=useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let confpasswordInputRef = useRef();
    let profilePicInputRef=useRef();

    let storeObj = useSelector((store)=>{
      return store;

    })

    useEffect(()=>{
      console.log(storeObj);

      firstInputRef.current.value=storeObj.userDetails.firstName;
      lastInputRef.current.value=storeObj.userDetails.lastName;
      userInputRef.current.value=storeObj.userDetails.userName;
      ageInputRef.current.value=storeObj.userDetails.age;
      emailInputRef.current.value=storeObj.userDetails.email;
     setPic(`http://localhost:1234/${storeObj.userDetails.profilePic}`);
    },[])


    

    let updateProfileUsingFormData = async()=>{
     
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
      method:"PATCH",
      body:dataToSend,

    };
    
    let JSONData = await fetch("http://localhost:1234/editProfile",reqOptions);

    let JSOData =await JSONData.json();
    alert(JSOData.msg);
    console.log(JSOData);

    };


  return (
    <div className="App">
  <TopNavigation></TopNavigation>
      <form className="App1">
        <h2>Edit Profile</h2>
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
          <input type="email" ref={emailInputRef} readOnly></input>
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
             <button  type="button"onClick={()=>{
        updateProfileUsingFormData();
          }}>Update Profile</button>
        </div>
        <div className="link">
          <p>Already have an account.</p>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;