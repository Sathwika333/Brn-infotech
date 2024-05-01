import React from 'react'
import NavBar from './NavBar'
import { useLocation } from 'react-router-dom'

function Home() {
  let loc=useLocation();
  return (
    <div className='home'>
        <NavBar/>
        <h4>🏚️ Home</h4>
        <h3>{loc && loc.state && loc.state.msg ? loc.state.msg : ""}</h3>
    </div>
  )
}

export default Home