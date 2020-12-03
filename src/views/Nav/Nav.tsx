import React from 'react';
import Logo from '../../assets/logo.svg';

import './Nav.sass';

const Nav = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <div className='links'>
        <ul className='flex'>
          <li>
            <a href=''>Profile</a>
          </li>
          <li>
            <a href=''>Projects</a>
          </li>
          <li>
            <a href=''>Experience</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </div>
      <div className='curriculum'>
        <button>Download CV</button>
      </div>
    </nav>
  );
};

export default Nav;
