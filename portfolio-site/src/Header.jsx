import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return(
    <header>
      <h1>Portfolio</h1>
      <div className="routes">
        <p className="route"><Link to="/">home</Link></p>
        <p className="route"><Link to="/about">about</Link></p>
        <p className="route"><Link to="/works">works</Link></p>
        <p className="route"><Link to="/contact">contact</Link></p>
      </div>
    </header>
  )
};

export default Header