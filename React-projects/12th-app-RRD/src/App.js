import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
