import React from 'react';

import './Heading.sass';

const Heading = () => {
  return (
    <div id='heading'>
      <div className='title-container'>
        <h1 className='title'>
          Daniel <br /> Apodaca
        </h1>
        <div className='subtitle'>I’m a Fullstack Developer & Designer</div>
      </div>
      <div className='circle'></div>
    </div>
  );
};

export default Heading;
