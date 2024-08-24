import React, { useState } from 'react';
import useScrollHandler from '../CustomHooks/useScrollHandler';
import logo from '../../assets/img/logo/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import { useUser } from '../contexts/UserContext';

const Header: React.FC = () => {
  const { isSticky, showBackToTop, scrollToTop } = useScrollHandler();
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleProfilePage = () => {
    setIsDropdownOpen(false);
    navigate('/profile');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      <header>
        <div className="header-area header-transparent">
          <div className={`main-header header-sticky ${isSticky ? 'sticky-bar' : ''}`}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/programs">Programs</Link></li>
                          <li><Link to="/workout_tracker">Workout Tracker</Link></li>
                          <li><Link to="/gallery">Gallery</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-right-btn f-right d-none d-lg-block ml-30">
                    {user ? (
                        <div className="profile-dropdown">
                          <img
                            src={'../../assets/img/logo/profile.png'}
                            alt="Profile"
                            className="profile-picture"
                            onClick={toggleDropdown}
                          />
                          {isDropdownOpen && (
                            <div className="dropdown-menu">
                              <button onClick={handleProfilePage} className="dropdown-item">Profile</button>
                              <button onClick={handleLogout} className="dropdown-item">Log out</button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link to="/login" className="btn header-btn">Become a member</Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none">
                    <div className={`slicknav_menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                      <a href="#" aria-haspopup="true" role="button" tabIndex={0} className={`slicknav_btn ${isMobileMenuOpen ? 'slicknav_open' : 'slicknav_collapsed'}`} style={{outline: "none"}}>
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                        </span>
                      </a>
                      <ul className={`slicknav_nav ${isMobileMenuOpen ? 'slicknav_visible' : 'slicknav_hidden'}`} aria-hidden={!isMobileMenuOpen} role="menu" style={{display: isMobileMenuOpen ? "block" : "none"}}>
                        <li><Link to="/" role="menuitem" tabIndex={0}>Home</Link></li>
                        <li><Link to="/about" role="menuitem" tabIndex={0}>About</Link></li>
                        <li><Link to="/programs" role="menuitem" tabIndex={0}>Programs</Link></li>
                        <li><Link to="/workout_tracker" role="menuitem" tabIndex={0}>Workout Tracker</Link></li>
                        <li><Link to="/gallery" role="menuitem" tabIndex={0}>Gallery</Link></li>
                        <li><Link to="/contact" role="menuitem" tabIndex={0}>Contact</Link></li>
                        {user ? (
                          <>
                            <li><button role="menuitem" tabIndex={0} onClick={handleProfilePage} className="dropdown-item">Profile</button></li>
                            <li><button role='menuitem' tabIndex={0} onClick={handleLogout} className="dropdown-item">Log out</button></li>
                          </>
                        ) : (
                          <li><Link to="/login" role='menuitem' tabIndex={0}>Become a member</Link></li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showBackToTop && (
      <div id="back-top" className={showBackToTop ? 'show' : ''}>
        <a title="Go to Top" href="#" onClick={scrollToTop}><i className="fas fa-level-up-alt"></i></a>
      </div>
      )}
    </>
  );
};

export default Header;
