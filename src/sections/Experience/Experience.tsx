import './Experience.sass';

import { FC } from 'react';
import Fade from 'react-reveal';

import Controlla from '../../assets/experiences/controlla.svg';
import Deskode from '../../assets/experiences/deskode.png';
import Itsncg from '../../assets/experiences/itsncg.png';
import Unsplash from '../../assets/experiences/unsplash.png';
import Video from '../../assets/experiences/video.svg';
import Xnet from '../../assets/experiences/xnet.svg';
import ZoomCatalog from '../../assets/experiences/zoomcatalog.png';
import { IExperience } from '../../utils/interfaces';

interface IProps {
  onClick?: (experience: IExperience) => void;
}

const Experience: FC<IProps> = ({ onClick }) => {
  const experiences = [
    {
      logo: ZoomCatalog,
      title: "ZOOMCatalog",
      description:
        "Collaborated creating and improving custom design system, marketing tools and services for customers in the promotional industry, worked in the frontend team close to product designers and backend engineers.",
      url: "https://www.zoomcatalog.com/",
      from: "04-2021",
      to: "",
      isCurrent: true,
    },
    {
      logo: Controlla,
      title: "Controlla Technologies",
      description:
        "Created complete custom solutions based on customer requirements, database design, backend and frontend development, unit testing and deployment of web and mobile applications. Eventually developed a partnership and became team lead.",
      url: "http://controlla.com.mx/",
      from: "12-2018",
      to: "04-2021",
      isCurrent: false,
    },
    {
      logo: Xnet,
      title: "Xnet Total Solutions",
      description:
        "Developed custom solutions based on customer requirements, and helped to improve existing invoice systems and point of sales. Worked directly with the client, to write the business blueprint.",
      url: "https://www.xnet.com.mx/",
      from: "07-2018",
      to: "12-2018",
      isCurrent: false,
    },
    {
      logo: Itsncg,
      title: "ITSNCG",
      description:
        "Worked in the communication and dissemination department as a designer, was in charge of social media, marketing and photography of events, video producer, and overall publicity of the university.",
      url: "http://itsncg.edu.mx/",
      from: "09-2016",
      to: "05-2018",
      isCurrent: false,
    },
    {
      logo: Unsplash,
      title: "Photographer",
      description:
        "I have contributed on Unsplash with more than 80 professional photographies and generated over 52 million views and 408,089 downloads, placing me under the 1000th most downloaded contributors ever, the pictures have been featured on big platforms like Trello, Adobe Spark, BuzzFeed, PicsArt, Unfold, Invision, Over and more independent businesses.",
      url: "http://unsplash.com/danielapodaca96",
      from: "03-2017",
      to: "03-2018",
      isCurrent: false,
    },
    {
      logo: Video,
      title: "Freelance Video Producer",
      description:
        "Produced music videos and music for local artists, from recording, editing, mastering and publishing.",
      url: "http://itsncg.edu.mx/",
      from: "03-2015",
      to: "03-2017",
      isCurrent: false,
    },
    {
      logo: Deskode,
      title: "Deskode",
      description:
        "Worked as a motion graphics artists, animating advertising for local city TV's.",
      url: "http://deskode.com/",
      from: "07-2015",
      to: "10-2016",
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
            <button
              className='experience-item'
              key={index}
              onClick={() => onClick && onClick(experience)}
            >
              <img src={experience.logo} alt={experience.title} />
            </button>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
