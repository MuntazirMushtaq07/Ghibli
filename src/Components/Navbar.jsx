import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
   <>
   <nav>
    <div className="nav-wrapper">
      <Link to="#" className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
   </>
  )
}

export default Navbar