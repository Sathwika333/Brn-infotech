import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";



function Login() {
    let emailInputRef=useRef();
    let passwordInputRef=useRef();
    let navigate=useNavigate();
    let msgInputRef=useRef();

    useEffect(()=>{
      emailInputRef.current.value=localStorage.getItem("email");
      passwordInputRef.current.value=localStorage.getItem("password");
      // validateLogin();
    })

    let validateLogin=()=>{
      if(emailInputRef.current.value==="doraemon99@gmail.com" && passwordInputRef.current.value==="Doraemon@7"){
        navigate("/home",{state:{msg:msgInputRef.current.value},
      });
      localStorage.setItem("email",emailInputRef.current.value);
      localStorage.setItem("password",passwordInputRef.current.value);
      sessionStorage.setItem("email",emailInputRef.current.value);
      sessionStorage.setItem("password",passwordInputRef.current.value);
      }else{
        alert("Invalid username or password");
      }
    }

  

  return (
    <div className="App">
        <NavBar/> 
      <form className="App1">
        <img className="img" src="./images/login.png" alt=".."></img>
        <h1>LOGIN</h1>
        <div>
            <label htmlFor="email">Login:</label>
            <input type="email" id="email" placeholder="enter email" ref={emailInputRef}></input>
        </div>
        <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="enter password" ref={passwordInputRef}></input>
        </div>
        <div>
                <label>Message:</label>
                <input type="text"  placeholder="enter message" ref={msgInputRef}></input>
        </div>
        <div className="cb">
            <input type="checkbox" id="remember"></input>
            <label htmlFor="remember">Remember Me</label>
        </div>
        <div className="fp">
        <Link to="/forgot password">Forgot Password?</Link>
        </div>
        <div>
         <button type="button" onClick={()=>{
          validateLogin();
         }}>Login</button>
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
