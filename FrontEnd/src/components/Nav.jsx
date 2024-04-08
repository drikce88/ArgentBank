import React from 'react';
import logo from '../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';



export default function Nav() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/');
  };
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
  {isAuthenticated ? (
          <button onClick={handleLogout} className="main-nav-item button-logout">
            <FontAwesomeIcon icon={faUserCircle} />
            Logout
          </button>
        ) : (
    <NavLink to='/SignIn' className="main-nav-item">
      <FontAwesomeIcon icon={faUserCircle} />
      Sign In
    </NavLink>
    )}
  </div>
  </nav>
)
}