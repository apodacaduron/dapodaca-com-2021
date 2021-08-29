import './Profile.sass';

import Fade from 'react-reveal';

const Profile = () => {
  return (
    <section id='profile'>
      <Fade cascade>
        <div className='title-container flex'>
          <h2 className='section-title'>Profile</h2>
          <div className='section-trailing'>イ哀バ</div>
        </div>
        <p>
          Computer Systems Engineer who has developed personal products and for
          enterprise clients from Mexico and the United States. I usually work
          with custom projects specific to the business needs of a client, from
          Web Applications (Frontend / Backend), Mobile Apps, Database / Server
          Management, Graphic Design and more. <br />
          <br />
          Here are a few technologies I've been working with recently:
        </p>
        <div className='technologies flex'>
          <ul>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Flutter</li>
          </ul>
          <ul>
            <li>Laravel</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>CPanel</li>
            <li>Elastic Beanstalk</li>
          </ul>
        </div>
      </Fade>
    </section>
  );
};

export default Profile;
