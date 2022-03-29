import React from 'react';
import './Header.css';

function Header({ black }) {
  return (
    <header className={black ? 'header--black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="Usuario"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
