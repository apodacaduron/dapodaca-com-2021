import React, { useEffect } from 'react';
import Logo from '../../assets/logo.svg';
import { Events, scroller } from 'react-scroll';
import PDF from '../../assets/CV_Daniel_Apodaca.pdf';
import { Menu } from 'react-feather';

import './Nav.sass';

interface IProps {
  toggleMenu: () => void;
}

const Nav = ({ toggleMenu }: IProps) => {
  //////// Links scroll to sections
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollTo = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <nav>
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <div className='links'>
        <ul className='flex'>
          <li>
            <a onClick={() => scrollTo('profile')}>Profile</a>
          </li>
          <li>
            <a onClick={() => scrollTo('projects')}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollTo('experience')}>Experience</a>
          </li>
          <li>
            <a onClick={() => scrollTo('contact')}>Contact</a>
          </li>
        </ul>
      </div>
      <div className='curriculum'>
        <button onClick={() => window.open(PDF)}>Download CV</button>
      </div>
      <a className='menu' onClick={() => toggleMenu()}>
        <Menu color='#3B393C' />
      </a>
    </nav>
  );
};

export default Nav;
