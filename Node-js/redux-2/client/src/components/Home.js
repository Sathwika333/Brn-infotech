import React from 'react';
import {useSelector} from 'react-redux';
import TopNavigation from './TopNavigation';

function Home() {
  let storeObj = useSelector((store)=>{
    console.log(store);
    return store;
  });

  let deleteProfle=async()=>{
   let dataToSend = new FormData();
   dataToSend.append("email",storeObj.loginReducer.userDetails.email);

   let reqOptions={
    method:"DELETE",
    body:dataToSend
   }

   let JSONData=await fetch("http://localhost:1234/deleteProfile",reqOptions);
   let JSOData = await JSONData.json();
   alert(JSOData.msg);
   console.log(JSOData);
  }
  return (
    <div className='App2'>
      <TopNavigation></TopNavigation>
      <h1 className='home'>Home</h1>

      <button  className="btn" onClick={()=>{
        deleteProfle();
      }} >Delete profile</button>
      <br></br><br></br>

      <img className='image' src={`http://localhost:1234/${storeObj.loginReducer.userDetails.profilePic}` }  alt='..' ></img>
      <h1>Name:{storeObj.loginReducer.userDetails.userName}</h1>
      <h1>Age:{storeObj.loginReducer.userDetails.age}</h1>
      <br></br>
     
    </div>
  )
}

export default Home;