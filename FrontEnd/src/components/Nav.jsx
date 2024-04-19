import React from 'react';
import logo from '../img/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';



export default function Nav() {
  const isSignIn = localStorage.getItem("token");
  const userName = useSelector(state => state.userProfile.userName);
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
  {isSignIn ? (
    <>
    <span className='name-nav-item'>{userName}</span>
          <button onClick={handleLogout} className="main-nav-item button-logout">
            <FontAwesomeIcon icon={faUserCircle} />
            Logout
          </button>
          </>
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