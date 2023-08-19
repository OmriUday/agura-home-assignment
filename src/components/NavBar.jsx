import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../app.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <div onClick={closeMenu}>
      <div className={isMenuOpen ? 'main-container' : ''} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img
              alt="agora"
              nitro-lazy-src="https://cdn-ignkj.nitrocdn.com/EBcbHqvmcEXvplSFcDwQVgqrqFDQRzgB/assets/images/optimized/rev-f2fe4ce/agorareal.com/wp-content/uploads/2023/02/Agora-blue-label-1.png"
              className="desktop lazyloaded"
              decoding="async"
              nitro-lazy-empty=""
              id="MTY5OjExMQ==-1"
              src="https://cdn-ignkj.nitrocdn.com/EBcbHqvmcEXvplSFcDwQVgqrqFDQRzgB/assets/images/optimized/rev-f2fe4ce/agorareal.com/wp-content/uploads/2023/02/Agora-blue-label-1.png"
            ></img>
          </NavLink>
          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={location =>
                  location.pathname === '/' ? 'nav-links active' : 'nav-links'
                }
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/store"
                className={location =>
                  location.pathname === '/store'
                    ? 'nav-links active'
                    : 'nav-links'
                }
              >
                Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/books"
                className={location =>
                  location.pathname === '/books'
                    ? 'nav-links active'
                    : 'nav-links'
                }
              >
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/devices"
                className={location =>
                  location.pathname === '/devices'
                    ? 'nav-links active'
                    : 'nav-links'
                }
              >
                Devices
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
