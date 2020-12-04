import React from 'react';
import Unsplash from '../../assets/social-media/unsplash.svg';
import Github from '../../assets/social-media/github.svg';
import Instagram from '../../assets/social-media/instagram.svg';
import Linkedin from '../../assets/social-media/linkedin.svg';
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
            <img className='icon' src={Linkedin} alt='' />
          </a>
          <a
            href='https://www.instagram.com/danielapodaca96'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='icon' src={Instagram} alt='' />
          </a>
          <a
            href='https://github.com/apodacaduron'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='icon' src={Github} alt='' />
          </a>
          <a
            href='https://unsplash.com/@danielapodaca96'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='icon' src={Unsplash} alt='' />
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
