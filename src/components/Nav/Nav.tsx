import React, { useEffect } from 'react';
import Logo from '../../assets/logo.svg';
import { Link, Element, Events, scroller } from 'react-scroll';

import './Nav.sass';

const Nav = () => {
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
        <button onClick={() => console.log('test')}>Download CV</button>
      </div>
    </nav>
  );
};

export default Nav;
