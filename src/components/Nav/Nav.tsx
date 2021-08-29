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
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <ul className="flex">
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
              <button className="anchor" onClick={() => scrollTo("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="curriculum">
          <button onClick={() => window.open(PDF)}>Resume</button>
        </div>
        <button className="menu" onClick={toggleMenu}>
          <Menu color="#3B393C" />
        </button>
      </Fade>
    </nav>
  );
};

export default Nav;
