import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


function Signup() {
   
    let firstInputRef=useRef();
    let lastInputRef=useRef();
    let userInputRef=useRef()
    let emailInputRef=useRef();
    let passwordInputRef=useRef();


    let firstResultRef=useRef();
    let lastResultRef=useRef();
    let userResultRef=useRef();
    let emailResultRef=useRef();
    let passwordResultRef=useRef();
    

    let firstRegExp = /^[A-Z][a-z]{2,10}$/;
    let lastRegExp = /^[A-Z][a-z]{2,30}$/;
    let userRegExp = /^[A-Z][a-z]{2,70}$/;
    let emailRegExp=/^(?=.*[0-9].*[0-9])[^@\s]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
    <div className="App">
        <NavBar/>
        <form  className="App1">
            <h2>SIGN UP</h2>
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
            <label htmlFor="user"> User Name:</label>
            <input type="text" id="user" placeholder="enter user name" ref={userInputRef}
            onChange={()=>{
                validateName(userInputRef,userResultRef,userRegExp)
            }}></input>
            <span  ref={userResultRef} ></span>
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
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="enter password" ref={passwordInputRef}
                onChange={()=>{
                    validateName(passwordInputRef,passwordResultRef,passwordRegExp)
                }}></input>
                <span  ref={passwordResultRef} ></span>
            </div>
            <div>
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" id="password" placeholder="enter password" ref={passwordInputRef}
                onChange={()=>{
                    validateName(passwordInputRef,passwordResultRef,passwordRegExp)
                }}></input>
                  <span  ref={passwordResultRef} ></span>
            </div>
            <div className='checkbox'>
                <input type="checkbox" id="policy"></input>
                <label htmlFor="policy">I accept the Terms of Use & Privacy Policy </label>
            </div>
            <div>
                <button type="button">Signup</button>
            </div>
            <div className='link'>
            <p>Already have an account.</p>
            <Link to="/">Login</Link>
            </div>
        </form>
        
    </div>
  )
}

export default Signup