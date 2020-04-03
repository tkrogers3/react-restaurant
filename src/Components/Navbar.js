import React from 'react';
import './Navbar.css';


function Navbar(props){
   
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarNav">
  <a className="navbar-brand" href="#navbar" id="navbarNav">Since 1985</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#home" id="navbarNav">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#menu" id="navbarNav">Menu</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#location" id="navbarNav">Location</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact" id="navbarNav">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }



export default Navbar;