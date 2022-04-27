// Main Imports
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Fade, Bounce } from 'react-reveal';
import TypewriterComponent from 'typewriter-effect';

// Import Assets
import linkedin from '../../assets/images/linkedin.png';
import avatar from '../../assets/images/avatar.jpg';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

// Import Styles
import particlesConfig from '../../config/particlesConfig';
import './home.css';
import Link from 'react-scroll/modules/components/Link';

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
            <h2 className='greeting-text'>
              <TypewriterComponent
                options={{
                  strings: [
                    '< I like building things for the web.',
                    '< I am passionate about learning.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: ' />',
                  delay: 100,
                }}
              />
            </h2>
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
            <div className='scroll-down'>
              <Link
                activeClass='active'
                to='NOTHING YET'
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}>
                <ArrowCircleDownIcon
                  fontSize='large'
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
