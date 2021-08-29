
import './NoiseOverlay.sass';

import { useEffect, useState } from 'react';

const NoiseOverlay = ({ opacity = 1 }) => {
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    setBodyHeight(document.body.clientHeight);
  }, []);

  return (
    <div
      id="noise-overlay"
      style={{ opacity: opacity, height: bodyHeight }}
    ></div>
  );
};

export default NoiseOverlay;
