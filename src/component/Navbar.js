
import React from 'react';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';  

const Navbar = () => {
  let Navigate =useNavigate();
  const loginNaviagation =()=>{
    Navigate("/login")
  }
  return (
    <div className="header" id="header" >
        <nav id="navbar">
        <h2 id="title"> onpatient</h2>
    <ul>
        <li><NavLink to="/"  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li> 

        <li><NavLink to="/profile"  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Profile</NavLink></li>
        <li><NavLink to="/apointment"  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Appointment</NavLink></li>
    </ul>
    <div>
        <button onClick={loginNaviagation}>Log in</button>
    </div>
        </nav>
    </div>
  );
}

export default Navbar;