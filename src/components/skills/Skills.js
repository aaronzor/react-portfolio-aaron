import React, { useRef } from 'react';
import IsVisible from 'react-is-visible';
import { Fade } from 'react-reveal';
import skills from '../../data/skills.json';
import useContainerDimensions from '../../hooks/useContainerDimensions';
import Layout from '../layout/Layout';
import './skills.css';

const Skills = () => {
  const skillsWrapper = useRef();
  const { width } = useContainerDimensions(skillsWrapper);

  return (
    <Layout title='Skills'>
      <h2 style={{ textAlign: 'center' }}>Some of the things I've learned</h2>
      <Fade duration={1000}>
        <div className='skills-main'>
          <div style={{ position: 'relative', width: '100%', maxWidth: 500 }}>
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
              Additionally, I've learned how to use many other supporting tools
              and skills.
            </p>
            <div className='other-skills-container'>
              <div>
                <h3>Libraries & Frameworks</h3>
                <ul className='other-skills-list' style={{ textAlign: 'left' }}>
                  <li>React</li>
                  <li>jQuery</li>
                  <li>Django</li>
                  <li>MUI</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3>Other Tools & Methods</h3>
                <ul className='other-skills-list' style={{ textAlign: 'left' }}>
                  <li>Postman</li>
                  <li>REST</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default Skills;
