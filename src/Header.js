import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


const renderedLinks = () => {
  return (
    <div className="LinkGrid">
      <a href={'/about'}>About</a>
      <a href={'/gallery'}>Gallery</a>
    </div>
  )
}

const Header = () => {
  return (
    <div className="Header">
      <div className="Grid">
        <div className="Logo">
          <a href={'/'}>
              <img src="logo.png"></img>
          </a>
        </div>
        <nav className="NavLinks">{renderedLinks()}</nav>
        <div className="ActionButton"><button><h4>CALL NOW</h4></button></div>
      </div>
    </div>
  );
}

export default Header;
