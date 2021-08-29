import './FixedLinks.sass';

import { Camera, GitHub, Instagram, Linkedin } from 'react-feather';

import EmailAddress from '../../assets/email-address.svg';

const FixedLinks = () => {
  return (
    <div id="fixed-links">
      <div className="left-links">
        <div className="vertical-icons">
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
        </div>
        <div className="vertical-line"></div>
      </div>
      <div className="right-links">
        <div className="vertical-email">
          <a href="mailto:apodacaduron@outlook.com" aria-label="Email">
            <img src={EmailAddress} alt="apodacaduron@outlook.com" />
          </a>
        </div>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default FixedLinks;
