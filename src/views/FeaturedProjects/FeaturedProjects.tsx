import React from 'react';
import LeanFit from '../../assets/featured-projects/leanfit.jpg';

import './FeaturedProjects.sass';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      name: 'LeanFit',
      description:
        'An easier way to track your macros, get the app, join the program and wait for a coach to assign you new goals, this way you’ll achieve the body you are looking for.',
      technologies: ['Vue.js', 'Flutter', 'Laravel', 'Conekta', 'FCM'],
      links: [],
      linkIcons: [],
      image: LeanFit,
      side: 'right',
    },
    {
      name: 'Cano Steel',
      description:
        'An easier way to track your macros, get the app, join the program and wait for a coach to assign you new goals, this way you’ll achieve the body you are looking for.',
      technologies: ['Vue.js', 'Flutter', 'Laravel', 'Conekta', 'FCM'],
      links: [],
      linkIcons: [],
      image: LeanFit,
      side: 'left',
    },
    {
      name: 'ID HOME',
      description:
        'An easier way to track your macros, get the app, join the program and wait for a coach to assign you new goals, this way you’ll achieve the body you are looking for.',
      technologies: ['Vue.js', 'Flutter', 'Laravel', 'Conekta', 'FCM'],
      links: [],
      linkIcons: [],
      image: LeanFit,
      side: 'right',
    },
  ];

  return (
    <section>
      <div className='title-container flex'>
        <h2 className='section-title'>Projects</h2>
        <div className='section-trailing'>さ茨果</div>
      </div>
      {featuredProjects.map((project, index) => (
        <div
          className={`flex ${project.side === 'left' ? 'flex-reverse' : ''}`}
          key={index}
        >
          <div className='column'>
            <div className='image-container'>
              <img src={project.image} alt={project.name} />
            </div>
          </div>
          <div
            className={`column ${
              project.side === 'right' ? 'text-align-right' : ''
            }`}
          >
            <div className='section-subtitle'>Featured Project</div>
            <div className='section-title'>{project.name}</div>
            <p className='description'>{project.description}</p>
            <div
              className={`technologies flex  ${
                project.side === 'right' ? 'flex-reverse' : ''
              }`}
            >
              {project.technologies.map((technology, idx) => (
                <div className='technology' key={idx}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProjects;
