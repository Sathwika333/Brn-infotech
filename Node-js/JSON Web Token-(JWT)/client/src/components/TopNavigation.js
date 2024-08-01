import React, { useEffect } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function TopNavigation() {

  let navigate = useNavigate();

  let storeObj = useSelector((store)=>{
    return store;
  });

  useEffect(()=>{
    if(storeObj.userDetails.email){
      console.log("valid email");

    }else{
      console.log("Invalid email");
    navigate("/");
    }
  })

  
  return (
   <nav>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/tasks">Tasks</NavLink>
    <NavLink to="/leaves">Leaves</NavLink>
    <NavLink to="/" onClick={()=>{
      localStorage.clear();
    }}>Signout</NavLink>
   </nav>
  )
}

export default TopNavigation;