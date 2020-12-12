import React, { FC } from 'react';
import Controlla from '../../assets/experiences/controlla.svg';
import Xnet from '../../assets/experiences/xnet.svg';
import Unsplash from '../../assets/experiences/unsplash.png';
import Deskode from '../../assets/experiences/deskode.png';
import Itsncg from '../../assets/experiences/itsncg.png';
import Video from '../../assets/experiences/video.svg';
import { IExperience } from '../../utils/interfaces';
import Fade from 'react-reveal';

import './Experience.sass';

interface IProps {
  onClick?: (experience: IExperience) => void;
}

const Experience: FC<IProps> = ({ onClick }) => {
  const experiences = [
    {
      logo: Controlla,
      title: 'Controlla Technologies',
      description:
        'Designed and coded landing pages, worked on specific custom CRM and ERP systems, mobile apps on flutter, REST API usage, synchronized a COMPAQ local database through an electron client to store in the cloud, designed and integrated and interactive map for house selling, web deployment, database managment, general troubleshooting, computer support for company members and video/design for marketing occasionally.',
      url: 'http://controlla.com.mx/',
      from: '12-2018',
      to: '',
      isCurrent: true,
    },
    {
      logo: Xnet,
      title: 'Xnet Total Solutions',
      description:
        'Developed several Landing Pages, contributed on PHP Invoice Systems, added new features to a restaurant order taking system from a big restaurant franchise, created and managed websites through ssh on a Linux server and collaborated with the installation of Access Points on a building in Acapulco, Guerrero.',
      url: 'https://www.xnet.com.mx/',
      from: '07-2018',
      to: '12-2018',
      isCurrent: false,
    },
    {
      logo: Itsncg,
      title: 'ITSNCG',
      description:
        'Worked as a photographer, video editor, motion graphics artist and managing social media.',
      url: 'http://itsncg.edu.mx/',
      from: '09-2016',
      to: '05-2018',
      isCurrent: false,
    },
    {
      logo: Unsplash,
      title: 'Photographer',
      description:
        'I have contributed on Unsplash with more than 80 professional photographies and generated over 52 million views and 408,089 downloads, placing me under the 1000th most downloaded contributors ever, the pictures have been featured on big platforms like Trello, Adobe Spark, BuzzFeed, PicsArt, Unfold, Invision, Over and more independent businesses.',
      url: 'http://unsplash.com/danielapodaca96',
      from: '03-2017',
      to: '03-2018',
      isCurrent: false,
    },
    {
      logo: Video,
      title: 'Freelance Video Producer',
      description:
        'Produced music videos and music for local artists, from recording, editing, mastering and publishing.',
      url: 'http://itsncg.edu.mx/',
      from: '03-2015',
      to: '03-2017',
      isCurrent: false,
    },
    {
      logo: Deskode,
      title: 'Deskode',
      description:
        "Worked as a motion graphics artists, animating advertising for local city TV's.",
      url: 'http://deskode.com/',
      from: '07-2015',
      to: '10-2016',
      isCurrent: false,
    },
  ];

  return (
    <section id='experience'>
      <Fade cascade>
        <div className='title-container flex'>
          <h2 className='section-title'>Experience</h2>
          <div className='section-trailing'>逸し宛</div>
        </div>
        <div className='experience-layout'>
          {experiences.map((experience, index) => (
            <a
              className='experience-item'
              key={index}
              onClick={() => onClick && onClick(experience)}
            >
              <img src={experience.logo} alt={experience.title} />
            </a>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
