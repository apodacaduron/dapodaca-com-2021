import React from 'react';

import './NoiseOverlay.sass';

const NoiseOverlay = ({ opacity = 1 }) => {
  return <div id='noise-overlay' style={{ opacity: opacity }}></div>;
};

export default NoiseOverlay;
