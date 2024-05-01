
import './App.css';
import Movie from './components/Movie';
import joe from './video/Joe.mp4';
import joepic from './images/joe.webp';

function App() {
  return (
    <div className="App">
     <Movie name="Joe" video={joe} pic={joepic} audio="./audio/Cultural.mp3" audio1="./audio/karigikarigi.mp3" ></Movie>
    </div>
  );
}

export default App;
