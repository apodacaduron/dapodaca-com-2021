import React, { useEffect } from 'react';
import { X } from 'react-feather';
import NoiseOverlay from '../NoiseOverlay/NoiseOverlay';
import { Events, scroller } from 'react-scroll';
import PDF from '../../assets/CV_Daniel_Apodaca.pdf';

import './Menu.sass';

interface IProps {
  visible?: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<IProps> = ({ visible = false, toggleMenu }) => {
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
    toggleMenu();
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div id='menu' className={`${visible ? 'menu-visible' : ''}`}>
      <NoiseOverlay opacity={0.5} />
      <a className='close-menu' onClick={() => toggleMenu()}>
        <X color='#FCFBF6' />
      </a>
      <ul>
        <li>
          <a href='/#' onClick={() => scrollTo('profile')}>
            Profile
          </a>
        </li>
        <li>
          <a href='/#' onClick={() => scrollTo('projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href='/#' onClick={() => scrollTo('experience')}>
            Experience
          </a>
        </li>
        <li>
          <a href='/#' onClick={() => scrollTo('contact')}>
            Contact
          </a>
        </li>
        <li>
          <button className='resume' onClick={() => window.open(PDF)}>
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
