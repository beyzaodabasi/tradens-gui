import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import { SiProbot } from 'react-icons/si';

import './Navbar.styles.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRADENS
            <SiProbot class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <i className="fas fa-home" style={{ paddingRight: '8px' }} />
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/documents"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i
                  className="fas fa-file-alt"
                  style={{ paddingRight: '8px' }}
                />
                Dokümanlar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logs" className="nav-links" onClick={closeMobileMenu}>
                <i
                  className="fas fa-clipboard-list"
                  style={{ paddingRight: '8px' }}
                />
                Geçmiş Kayıtlar
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i
                  className="fas fa-clipboard-list"
                  style={{ paddingRight: '8px' }}
                />
                Yiğido Takımı
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
