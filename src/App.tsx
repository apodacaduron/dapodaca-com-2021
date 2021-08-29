import './App.sass';

import { lazy, Suspense, useState } from 'react';

import FixedLinks from './components/FixedLinks';
import Menu from './components/Menu';
import Nav from './components/Nav';
import NoiseOverlay from './components/NoiseOverlay';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import FeaturedProjects from './sections/FeaturedProjects';
import Heading from './sections/Heading';
import Profile from './sections/Profile';
import { IExperience } from './utils/interfaces';

const ViewExperience = lazy(() => import('./components/ViewExperience'));

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [experience, setExperience] = useState<IExperience>();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <FixedLinks />
      <Menu visible={menuVisible} toggleMenu={() => toggleMenu()} />
      <Suspense fallback={''}>
        <ViewExperience
          experience={experience}
          visible={experienceVisible}
          close={() => setExperienceVisible(false)}
        />
      </Suspense>
      <div className="scroll">
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
