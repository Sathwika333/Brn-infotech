import React from 'react';
import {useSelector} from 'react-redux';
import TopNavigation from './TopNavigation';

function Home() {
  let storeObj = useSelector((store)=>{
    return store;
  })
  return (
    <div className='App2'>
      <TopNavigation></TopNavigation>
      <h1 className='home'>Home</h1>
      <img className='image' src={`http://localhost:1234/${storeObj.userDetails.profilePic}` }  alt='..' ></img>
      <h1>Name:{storeObj.userDetails.userName}</h1>
      <h1>Age:{storeObj.userDetails.age}</h1>
      <br></br>
     
    </div>
  )
}

export default Home;