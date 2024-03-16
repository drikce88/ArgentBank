import React from 'react';
import logo from '../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


export default function Nav() {
return (
  <nav className="main-nav">
  <div className="main-nav-logo">
    <NavLink to="/">
      <img
        className="main-nav-logo-image"
        src={logo} alt="Argent Bank Logo"
      />
    </NavLink>
    <h1 className="sr-only">Argent Bank</h1>
  </div>
  <div>
    <NavLink to='/SignIn' className="main-nav-item">
      <FontAwesomeIcon icon={faUserCircle} />
      Sign In
    </NavLink>
  </div>
  </nav>
)
}