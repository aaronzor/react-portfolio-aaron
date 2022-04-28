// Main Imports
import React from 'react';
import Layout from '../layout/Layout.js';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import TypewriterComponent from 'typewriter-effect';

// Import Styles
import './aboutMe.css';
import ArrowCircleDown from '@mui/icons-material/ArrowCircleDown';

const AboutMe = () => {
  return (
    <Layout title='About'>
      <div className='about-content'>
        <Fade duration={1000}>
          <div className='about-text'>
            <h2>A little bit about me.</h2>
            <p>I'm Aaron.</p>
            <div className='location-wrapper'>
              <svg
                className='octicon octicon-location'
                viewBox='0 0 16 16'
                version='1.1'
                width='16'
                height='16'
                aria-hidden='true'>
                <path
                  fill='white'
                  fillRule='evenodd'
                  d='M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z'></path>
              </svg>
              <p>Bangor, Northern Ireland</p>
            </div>
            <p>
              I'm a self taught software engineer who likes to work on Front and
              Back-end web, as well as emerging technologies such as Blockchain.
            </p>
            <div className='typewriter'>
              <p className='typewriter-start'>I love</p>

              <TypewriterComponent
                options={{
                  strings: [
                    'Science-fiction.',
                    'Learning new things.',
                    'Walking and hiking.',
                    'Setting and achieving goals.',
                    'My two cats.',
                    'Gaming.',
                    'Solving complex problems.',
                  ],
                  autoStart: true,
                  delay: 65,
                  loop: true,
                  cursor: '<',
                }}
              />
            </div>
            <p>
              In 2020 I made the decision to set out on a journey to do
              something that I had always wanted to do - learn how to create
              software and forge a career from it.
            </p>
            <p>
              Below you'll find out more about some of the things I've spent the
              last year learning, as well as some of the projects that I've put
              together!
            </p>
          </div>
        </Fade>
        <div className='scroll'>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-63}
            duration={500}>
            <ArrowCircleDown
              fontSize='large'
              style={{ pointerEvents: 'fill', cursor: 'pointer' }}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
