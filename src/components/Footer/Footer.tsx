import React from 'react';

import { Camera, GitHub, Instagram, Linkedin, Mail } from 'react-feather';

import './Footer.sass';

const Footer = () => {
  return (
    <footer>
      <div className='links flex'>
        <a
          href='https://www.linkedin.com/in/danielapodaca96/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin className='icon' color='#3B393C' />
        </a>
        <a
          href='https://www.instagram.com/danielapodaca96'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Instagram className='icon' color='#3B393C' />
        </a>
        <a
          href='https://github.com/apodacaduron'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHub className='icon' color='#3B393C' />
        </a>
        <a
          href='https://unsplash.com/@danielapodaca96'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Camera className='icon' color='#3B393C' />
        </a>
        <a href='mailto:apodacaduron@gmail.com'>
          <Mail className='icon' color='#3B393C' />
        </a>
      </div>
      <div className='credit'>Designed & Built by Daniel Apodaca</div>
    </footer>
  );
};

export default Footer;
