import React from 'react';
import { X } from 'react-feather';

import './Menu.sass';

interface IProps {
  visible?: boolean;
  toggleMenu: () => void;
}

const Menu = ({ visible = false, toggleMenu }: IProps) => {
  return (
    <div id='menu' className={`${visible ? 'menu-visible' : ''}`}>
      <a className='close-menu' onClick={() => toggleMenu()}>
        <X color='#FCFBF6' />
      </a>
      <ul>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Experience</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
