import './Menu.sass';

import { X } from 'react-feather';
import { scroller } from 'react-scroll';

import PDF from '../../assets/CV_Daniel_Apodaca.pdf';
import NoiseOverlay from '../NoiseOverlay/NoiseOverlay';

interface IProps {
  visible?: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<IProps> = ({ visible = false, toggleMenu }) => {
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
