import React from 'react';


function Movie(props) {
  return (
    <div className="main main1">
      <h1>{props.name}</h1>
        <div className="child">
          <video src={props.video} controls muted loop ></video>
        </div>
        <div className="child child1">
          <audio src={props.audio}controls muted></audio>
          <audio src={props.audio1} controls muted></audio>
          <audio src="./audio/KarigiKarigiFemale.mp3" controls muted></audio>
        </div>
        <div className="child">
          <img src={props.pic} alt="joe"></img>
        </div>
      </div>
  )
}

export default Movie