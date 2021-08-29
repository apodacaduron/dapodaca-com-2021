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
    <div id="menu" className={`${visible ? "menu-visible" : ""}`}>
      <NoiseOverlay opacity={0.5} />
      <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">
        <X color="#FCFBF6" />
      </button>
      <ul>
        <li>
          <button className="anchor" onClick={() => scrollTo("profile")}>
            Profile
          </button>
        </li>
        <li>
          <button className="anchor" onClick={() => scrollTo("projects")}>
            Projects
          </button>
        </li>
        <li>
          <button className="anchor" onClick={() => scrollTo("experience")}>
            Experience
          </button>
        </li>
        <li>
          <button className='anchor' onClick={() => scrollTo("contact")}>Contact</button>
        </li>
        <li>
          <button className="resume" onClick={() => window.open(PDF)}>
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
