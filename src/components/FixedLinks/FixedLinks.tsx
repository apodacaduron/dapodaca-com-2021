import React from 'react';
import { Camera, GitHub, Instagram, Linkedin } from 'react-feather';
import EmailAddress from '../../assets/email-address.svg';

import './FixedLinks.sass';

const FixedLinks = () => {
  return (
    <div id='fixed-links'>
      <div className='left-links'>
        <div className='vertical-icons'>
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
        </div>
        <div className='vertical-line'></div>
      </div>
      <div className='right-links'>
        <div className='vertical-email'>
          <a href='mailto:apodacaduron@gmail.com'>
            <img src={EmailAddress} alt='' />
          </a>
        </div>
        <div className='vertical-line'></div>
      </div>
    </div>
  );
};

export default FixedLinks;
