import './Nav.sass';

import { Menu } from 'react-feather';
import Fade from 'react-reveal';
import { scroller } from 'react-scroll';

import PDF from '../../assets/CV_Daniel_Apodaca.pdf';
import Logo from '../../assets/logo.svg';

interface IProps {
  toggleMenu: () => void;
}

const Nav = ({ toggleMenu }: IProps) => {
  const scrollTo = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav>
      <Fade cascade top>
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
          <button onClick={() => window.open(PDF)}>Resume</button>
        </div>
        <a className='menu' onClick={() => toggleMenu()}>
          <Menu color='#3B393C' />
        </a>
      </Fade>
    </nav>
  );
};

export default Nav;
