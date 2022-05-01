// Main Imports
import React, { useRef } from 'react';
import IsVisible from 'react-is-visible';
import { Fade } from 'react-reveal';

// Import Components
import Layout from '../layout/Layout';
import ScrollDown from '../scroll/ScrollDown';

// Import Custom Hook
import useContainerDimensions from '../../hooks/useContainerDimensions';

// Import Assets
import skills from '../../data/skills.json';

// Import Styles
import './skills.css';

const Skills = () => {
  // Use custom hook to help responsive styles
  const skillsWrapper = useRef();
  const { width } = useContainerDimensions(skillsWrapper);

  return (
    <>
      <Layout title='Skills'>
        <Fade duration={1000}>
          <h2 className='skills-title'>Some of the things I've learned.</h2>
          <div className='skills-main'>
            <div style={{ position: 'relative', width: '95%', maxWidth: 600 }}>
              <IsVisible once>
                {(isVisibleSkillsWrapper) => (
                  <div
                    className='skills-wrapper'
                    style={
                      isVisibleSkillsWrapper
                        ? {
                            transition: '1s opacity ease-in-out',
                            transform: `translateX(0)`,
                            opacity: 1,
                          }
                        : {}
                    }>
                    <ul className='skills' ref={skillsWrapper}>
                      {skills.skills.map((skills) => {
                        return (
                          <li
                            className='skill-bar-wrapper'
                            key={skills.skillName}>
                            <div
                              className='skill-bar'
                              style={
                                isVisibleSkillsWrapper
                                  ? {
                                      transition: `${
                                        1 + skills.id / 10
                                      }s width ease-in-out`,
                                      width: width * (skills.amount / 100),
                                    }
                                  : {
                                      width: 1,
                                    }
                              }></div>
                            <div className='skill-name'>{skills.skillName}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </IsVisible>
            </div>
            <div className='other-skills-main'>
              <p>
                Additionally, I've learned how to use many other supporting
                tools and skills.
              </p>
              <div className='other-skills-container'>
                <div>
                  <h3>Libraries & Frameworks</h3>
                  <ul
                    className='other-skills-list'
                    style={{ textAlign: 'left' }}>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>Django</li>
                    <li>Espress.js</li>
                    <li>MUI</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3>Other Tools & Methods</h3>
                  <ul
                    className='other-skills-list'
                    style={{ textAlign: 'left' }}>
                    <li>Postman</li>
                    <li>REST</li>
                    <li>Figma</li>
                    <li>AWS</li>
                    <li>Photoshop</li>
                    <li>Heroku</li>
                  </ul>
                </div>
              </div>
              <p>
                In addition to the skills above, I have also passed the{' '}
                <a
                  className='other-skills-aws'
                  href='https://www.credly.com/badges/9f0b7434-db22-4b5f-a611-95849ef4d4ca'>
                  AWS Certified Cloud Practitioner exam.
                </a>
                Marking the beginning of my understanding of the cloud, and
                using it to streamline and bolster the development of my future
                projects and work.
              </p>
            </div>
          </div>
        </Fade>
        <ScrollDown to='projects' />
      </Layout>
    </>
  );
};

export default Skills;
