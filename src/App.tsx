import React, { useEffect, useRef } from 'react';
import useWindowSize from './hooks/useWindowSize';
import './App.sass';
import useMouseMove from './hooks/useMouseMove';
import NoiseOverlay from './components/NoiseOverlay/NoiseOverlay';
import FixedLinks from './components/FixedLinks/FixedLinks';

function App() {
  const pos = { x: 0, y: 0 };
  const speed = 0.2;
  const cursor = useRef<HTMLDivElement>(null);
  const cursorDot = useRef<HTMLDivElement>(null);
  const mouse = useMouseMove();

  const updatePosition = () => {
    console.log(mouse.clientX, pos.x);
    pos.x += Math.round((mouse.clientX - pos.x) * speed);
    pos.y += Math.round((mouse.clientY - pos.y) * speed);
    if (cursor.current && cursorDot.current) {
      cursor.current.style.transform =
        'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
      cursorDot.current.style.transform =
        'translate3d(' + mouse.clientX + 'px ,' + mouse.clientY + 'px, 0)';
    }
    requestAnimationFrame(() => updatePosition());
  };

  useEffect(() => {
    requestAnimationFrame(() => updatePosition());
  }, []);

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

  return (
    <div ref={app} className='App'>
      <div ref={cursor} id='cursor'>
        <div className='cursor--inner--circle'></div>
      </div>
      <div ref={cursorDot} id='cursor-dot'>
        <div className='cursor--inner--dot'></div>
      </div>
      <div ref={scrollContainer} className='scroll'>
        <NoiseOverlay />
        <FixedLinks />
      </div>
    </div>
  );
}

export default App;
