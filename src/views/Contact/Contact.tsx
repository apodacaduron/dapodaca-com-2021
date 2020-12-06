import React from 'react';
import Footer from '../../components/Footer/Footer';

import './Contact.sass';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container text-align-center'>
        <h2 className='section-title'>Get In Touch</h2>
        <div className='section-trailing'>チニ隠</div>
        <p className='description'>
          I am looking for new opportunities, if you are interested in my work
          feel free to send me an email, i'll try my best to get back to you!
        </p>
        <a href='mailto:apodacaduron@gmail.com'>
          <button>Say Hello</button>
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
