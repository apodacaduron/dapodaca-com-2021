import React from 'react';
import Unsplash from '../../assets/social-media/unsplash.svg';

import './FixedLinks.sass';

const FixedLinks = () => {
  return (
    <div id='fixed-links'>
      <div className='left-links'>
        <div className='vertical-icons'>
          <img className='icon' src={Unsplash} alt='' />
        </div>
        <div className='vertical-line'></div>
      </div>
      <div className='right-links'>
        <div className='vertical-email'>
          <a href='mailto:apodacaduron@gmail.com'>apodacaduron@gmail.com</a>
        </div>
        <div className='vertical-line'></div>
      </div>
    </div>
  );
};

export default FixedLinks;
