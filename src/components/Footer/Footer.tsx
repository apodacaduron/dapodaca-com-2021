import './Footer.sass';

import { Camera, GitHub, Instagram, Linkedin, Mail } from 'react-feather';

const Footer = () => {
  return (
    <footer>
      <div className="links flex">
        <a
          href="https://www.linkedin.com/in/danielapodaca96/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <Linkedin className="icon" color="#3B393C" />
        </a>
        <a
          href="https://www.instagram.com/danielapodaca96"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="icon" color="#3B393C" />
        </a>
        <a
          href="https://github.com/apodacaduron"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <GitHub className="icon" color="#3B393C" />
        </a>
        <a
          href="https://unsplash.com/@danielapodaca96"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Unsplash"
        >
          <Camera className="icon" color="#3B393C" />
        </a>
        <a href="mailto:apodacaduron@gmail.com" aria-label="Email">
          <Mail className="icon" color="#3B393C" />
        </a>
      </div>
      <div className="credit">Designed & Built by Daniel Apodaca</div>
    </footer>
  );
};

export default Footer;
