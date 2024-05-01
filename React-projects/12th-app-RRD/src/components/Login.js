import React, { useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";



function Login() {
    let emailInputRef=useRef();
    let passwordInputRef=useRef();

    let emailResultRef=useRef();
    let passwordResultRef=useRef();

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
      <form className="App1">
        <img className="img" src="./images/login.png" alt="..."></img>
        <h1>LOGIN</h1>
        <div>
            <label htmlFor="email">Login:</label>
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
        <div className="cb">
            <input type="checkbox" id="remember"></input>
            <label htmlFor="remember">Remember Me</label>
        </div>
        <div className="fp">
        <Link to="/forgot password">Forgot Password?</Link>
        </div>
        <div>
         <button type="button">Login</button>
        </div >
        <div className="link">
        <p>Don't have an account?</p>
        <Link to="/signup">Signup</Link>
        </div>
      </form>
      
    </div>
  );
}

export default Login;
