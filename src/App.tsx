import React, { useEffect, useRef } from 'react';
import useWindowSize from './hooks/useWindowSize';
import FixedLinks from './components/FixedLinks/FixedLinks';
import NoiseOverlay from './components/NoiseOverlay/NoiseOverlay';
import useMouseMove from './hooks/useMouseMove';

import './App.sass';
import Heading from './views/Heading/Heading';
import Profile from './views/Profile/Profile';
import Nav from './views/Nav/Nav';

const App = () => {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    if (scrollContainer.current) {
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    }

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current?.getBoundingClientRect().height
    }px`;
  };

  return (
    <div ref={app} className='App'>
      <FixedLinks />
      <div ref={scrollContainer} className='scroll'>
        <NoiseOverlay />
        <Nav />
        <Heading />
        <Profile />
      </div>
    </div>
  );
};

export default App;
