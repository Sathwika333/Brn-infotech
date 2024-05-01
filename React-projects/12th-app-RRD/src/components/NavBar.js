import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav>
        <h5>My Application</h5>
            <Link to="/home">Home</Link>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
        </nav>
    </div>
  )
}

export default NavBar