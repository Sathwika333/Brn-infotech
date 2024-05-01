import joeTrailer from "./video/Joe.mp4";
import joe from "./images/joe.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main main1">
        <h1>JOE</h1>
        <div className="child">
          <video src={joeTrailer} controls muted loop></video>
        </div>
        <div className="child child1">
          <audio src="./audio/Cultural.mp3" controls></audio>
          <audio src="./audio/KarigiKarigi.mp3" controls></audio>
          <audio src="./audio/KarigiKarigiFemale.mp3" controls></audio>
        </div>
        <div className="child">
          <img src={joe} alt="joe"></img>
        </div>
      </div>
      <div className="main main2">
        <h1>PEHLWAAN</h1>
        <div className="child">
          <video
            src="https://services.brninfotech.com/tws/media2/trailers/Pehlwaan.mp4"
            controls
            muted
          ></video>
        </div>
        <div className="child">
          <audio
            src="https://services.brninfotech.com/tws/media2/songs/Pahalwan/01 - Vachaadayyo Pahalwan (Theme Song).mp3"
            controls
          ></audio>
          <audio
            src="https://services.brninfotech.com/tws/media2/songs/Pahalwan/02 - Kanne Pichuka.mp3"
            controls
          ></audio>
          <audio
            src="https://services.brninfotech.com/tws/media2/songs/Pahalwan/03 - Jai Ho Pahalwan.mp3"
            controls
          ></audio>
          <audio
            src="https://services.brninfotech.com/tws/media2/songs/Pahalwan/04 - Fire U Brandu.mp3"
            controls
          ></audio>
          <audio
            src="https://services.brninfotech.com/tws/media2/songs/Pahalwan/05 - Dhruvataara.mp3"
            controls
          ></audio>
          <audio
            src="https://services.brninfotech.com/tws/media2/songs/Pahalwan/06 - Yodhudaa.mp3"
            controls
          ></audio>
        </div>
        <div className="child">
          <img
            src="https://1.bp.blogspot.com/-g-oBeHscoNA/XXnaRK21CLI/AAAAAAAAJmA/2EzUBmEsvNE6bNFlQNJvDGKerhdN5VaqACLcBGAsYHQ/w1200-h630-p-k-no-nu/pailwaan-pehlwaan-movie-poster.jpg"
            alt="pehlwaan"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
