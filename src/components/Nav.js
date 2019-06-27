import React from 'react';
import './Nav.css';
import Logo from '../images/403-445.png';

const Nav = () => {
  return (
    <div className="navigation">
      <img src={Logo} alt="company logo" />
    </div>
  );
};

export default Nav;
