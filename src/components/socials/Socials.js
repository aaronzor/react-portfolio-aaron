import React from 'react';
import './socials.css';
import { Bounce } from 'react-reveal';
import Layout from '../layout/Layout';

// Import assets
import linkedin from '../../assets/images/social/linkedin.png';
import github from '../../assets/images/social/github.png';
import insta from '../../assets/images/social/insta.png';

const Socials = () => {
  return (
    <Layout title='Socials'>
      <Bounce cascade>
        <div className='links'>
          <a
            href='https://github.com/aaronzor'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={github} alt='Github Logo' width='40px' />
          </a>
          <a
            href='https://www.linkedin.com/in/aaron-mcmullan-685621211/'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={linkedin} alt='Linkedin Logo' width='40px' />
          </a>

          <a
            href='https://www.instagram.com/aaron_sham224/'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={insta} alt='Facebook Logo' width='40px' />
          </a>
        </div>
      </Bounce>
    </Layout>
  );
};

export default Socials;
