import React, { useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';

function Login() {
  let emailInputRef= useRef();
  let passwordInputRef = useRef();

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let onLoginBtnClick= async()=>{
    let dataToSend = new FormData();

       dataToSend.append("email", emailInputRef.current.value);
        dataToSend.append("password", passwordInputRef.current.value);

    let reqOptions={
      method:"POST",
      body:dataToSend
    };

    let JSONData = await fetch("http://localhost:1234/validateLogin",reqOptions);
    let JSOData = await JSONData.json();

    if(JSOData.status === "success"){
      dispatch({type:"login",data:JSOData.data});
      navigate("/home");
    }else{
      alert(JSOData.msg);
    }
    console.log(JSOData)
  }
  return (
    <div className="App">
      <form className="App1">
        <img className="img" src="./images/login.png" alt="..."></img>
        <h1>LOGIN</h1>
        <div>
          <label>Login:</label>
          <input ref={emailInputRef} type="email"></input>
        </div>
        <div>
          <label>Password:</label>
          <input ref={ passwordInputRef} type="password"></input>
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
            onLoginBtnClick();
          }}>Login</button>
        </div>
        <div className="link">
          <p>Don't have an account?</p>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
