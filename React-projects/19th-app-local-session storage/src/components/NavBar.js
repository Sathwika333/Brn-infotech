import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let highlightNavLink = (obj) => {
    if (obj.isActive === true) {
      return {
        backgroundColor: "darkmagenta",
        color: "white",
        textDecoration: "none",
        boxShadow:"2px 2px 10px grey",
     };
    } else {
    }
  };
  return (
    <div>
      <nav>
        <h5>My Application</h5>
        <NavLink
          to="/home"
          style={(obj) => {
            return highlightNavLink(obj);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          style={(obj) => {
            return highlightNavLink(obj);
          }}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          style={(obj) => {
            return highlightNavLink(obj);
          }}
        >
          Signup
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
