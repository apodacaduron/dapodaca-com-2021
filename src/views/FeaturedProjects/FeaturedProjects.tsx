import React from 'react';
import LeanFit from '../../assets/featured-projects/leanfit.jpg';
import CanoSteel from '../../assets/featured-projects/cano-steel.jpg';
import IdHome from '../../assets/featured-projects/id-home.jpg';
import { ExternalLink, Smartphone, Play } from 'react-feather';

import './FeaturedProjects.sass';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      name: 'LeanFit',
      description:
        'An easier way to track your macros, get the app, join the program and wait for your week to start, based on your stats the server will automatically assign you new goals each week.',
      technologies: ['Vue.js', 'Flutter', 'Laravel', 'Conekta', 'FCM'],
      links: [
        {
          url: 'https://leanfit.mx',
          icon: <ExternalLink />,
        },
        {
          url:
            'https://play.google.com/store/apps/details?id=mx.com.controlla.leanfit_app',
          icon: <Play />,
        },
      ],
      image: LeanFit,
      side: 'right',
    },
    {
      name: 'Cano Steel',
      description:
        'Developed an app to allow customers of Cano Steel to track down the progress of manufacture of their different steel structures, and comunicate between eachother.',
      technologies: ['Vue.js', 'Flutter', 'Laravel', 'Conekta', 'FCM'],
      links: [
        {
          url:
            'https://play.google.com/store/apps/details?id=com.controlla.cano_mobile',
          icon: <Play />,
        },
        {
          url: 'https://apps.apple.com/mx/app/cano-steel/id1513753715',
          icon: <Smartphone />,
        },
      ],
      image: CanoSteel,
      side: 'left',
    },
    {
      name: 'ID HOME',
      description:
        'A website for a premium furniture store that allows them to showcase the finest products to their customers, and also manage contact messages and inventory.',
      technologies: ['Vue.js', 'Flutter', 'Laravel', 'Conekta', 'FCM'],
      links: [
        {
          url: 'https://idhome.com.mx',
          icon: <ExternalLink />,
        },
      ],
      image: IdHome,
      side: 'right',
    },
  ];

  return (
    <section id='projects'>
      <div className='title-container flex'>
        <h2 className='section-title'>Projects</h2>
        <div className='section-trailing'>さ茨果</div>
      </div>
      {featuredProjects.map((project, index) => (
        <div
          className={`flex ${project.side === 'left' ? 'flex-reverse' : ''} ${
            index === 0 ? 'padding-project-title' : 'padding-project'
          }`}
          key={index}
        >
          <div
            className={`project-image column flex ${
              project.side === 'left' ? 'text-align-right flex-end' : ''
            }`}
          >
            <div className='image-container'>
              <img src={project.image} alt={project.name} />
            </div>
            <div
              className={`circle ${
                project.side === 'left' ? 'circle-right' : 'circle-left'
              }`}
            ></div>
          </div>
          <div
            className={`project-text column ${
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
            <div
              className={`links flex  ${
                project.side === 'right' ? 'flex-reverse' : ''
              }`}
            >
              {project.links.map((link, idx) => (
                <div className='link' key={idx}>
                  <a href={link.url} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                  </a>
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
