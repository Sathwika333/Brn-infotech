import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Leaves from "./components/Leaves";
import EditProfile from "./components/EditProfile";
import axios from "axios";
import { useEffect } from "react";

function App() {
  axios.defaults.baseURL = "";
  if (localStorage.getItem("token")) {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/leaves" element={<Leaves />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
