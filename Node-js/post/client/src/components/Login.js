import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <form className="App1">
        <img className="img" src="./images/login.png" alt="..."></img>
        <h1>LOGIN</h1>
        <div>
          <label>Login:</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password"></input>
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
