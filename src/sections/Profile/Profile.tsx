import './Profile.sass';

import Fade from 'react-reveal';

const Profile = () => {
  return (
    <section id="profile">
      <Fade>
        <div className="title-container flex">
          <h2 className="section-title">Profile</h2>
          <div className="section-trailing">イ哀バ</div>
        </div>
        <p>
          Dedicated fullstack developer with 3 years of professional experience
          developing tools and customer solutions for enterprises. Strong
          creative and analytical skills. Team player with an eye for detail.
          React, Vue, Svelte, Node.js, Laravel.
        </p>
      </Fade>
    </section>
  );
};

export default Profile;
