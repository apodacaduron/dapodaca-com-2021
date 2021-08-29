import './App.sass';

import React, { useEffect, useRef, useState } from 'react';

import FixedLinks from './components/FixedLinks';
import Menu from './components/Menu';
import Nav from './components/Nav';
import NoiseOverlay from './components/NoiseOverlay';
import ViewExperience from './components/ViewExperience';
import { useMobileDetect, useWindowSize } from './hooks';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import FeaturedProjects from './sections/FeaturedProjects';
import Heading from './sections/Heading';
import Profile from './sections/Profile';
import { IExperience } from './utils/interfaces';

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [experience, setExperience] = useState<IExperience>();
  const requestRef = React.useRef<number | null>();

  const size = useWindowSize();
  const {isMobile} = useMobileDetect();

  const app = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (!isMobile) {
      if (!menuVisible) {
        requestRef.current && cancelAnimationFrame(requestRef.current);
      } else {
        requestAnimationFrame(() => skewScrolling());
      }
    }
  };

  const skewScrolling = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    if (scrollContainer.current) {
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    }

    requestRef.current = requestAnimationFrame(() => skewScrolling());
  }

  useEffect(() => {
    if (!isMobile) {
      requestRef.current = requestAnimationFrame(() => skewScrolling());
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      setBodyHeight();
    }
  }, [size.height, size.width, isMobile]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current?.getBoundingClientRect().height
    }px`;
  };

  return (
    <div ref={app} className={`App ${!isMobile ? 'smooth-scroll' : ''}`}>
      <FixedLinks />
      <Menu visible={menuVisible} toggleMenu={() => toggleMenu()} />
      <ViewExperience
        experience={experience}
        visible={experienceVisible}
        close={() => setExperienceVisible(false)}
      />
      <div ref={scrollContainer} className='scroll'>
        <NoiseOverlay />
        <Nav toggleMenu={() => toggleMenu()} />
        <Heading />
        <Profile />
        <FeaturedProjects />
        <Experience
          onClick={(exp) => {
            setExperience(exp);
            setExperienceVisible(true);
          }}
        />
        <Contact />
      </div>
    </div>
  );
};

export default App;
