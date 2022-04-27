// Main Imports
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Fade, Bounce } from 'react-reveal';

// Import Assets
import linkedin from '../../assets/images/linkedin.png';
import avatar from '../../assets/images/avatar.jpg';

// Import Styles
import particlesConfig from '../../config/particlesConfig';
import './home.css';

// Initialise Particles
const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='home'>
        <Particles
          className='particles'
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
        <div className='greeting'>
          <Fade bottom distance='40px'>
            <img
              className='profile'
              alt='aaron mcmullan profile avatar'
              src={avatar}
            />
            <h1 className='greeting-text'>
              Hi, I'm <span className='name'>Aaron</span>.{' '}
            </h1>
            <Bounce cascade>
              <div className='links'>
                <a
                  href='https://www.linkedin.com/in/aaron-mcmullan-685621211/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={linkedin} alt='Linkedin Logo' width='50px' />
                </a>
              </div>
            </Bounce>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
