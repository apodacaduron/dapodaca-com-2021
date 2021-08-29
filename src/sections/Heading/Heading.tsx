import React from 'react';
import Fade from 'react-reveal';

import './Heading.sass';

const Heading = () => {
  return (
    <div id='heading'>
      <Fade cascade>
        <div className='title-container'>
          <h1 className='title'>Daniel</h1>
          <h1 className='title'>Apodaca</h1>
          <div className='subtitle'>I’m a Fullstack Developer & Designer</div>
        </div>
      </Fade>
      <div className='circle'></div>
    </div>
  );
};

export default Heading;
