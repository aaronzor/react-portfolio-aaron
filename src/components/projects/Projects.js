import React from 'react';
import { Fade } from 'react-reveal';
import projects from '../../data/projects.json';

// Import Components
import Layout from '../layout/Layout';
import ScrollDown from '../scroll/ScrollDown';
import Project from './Project';

// Import Styles
import './projects.css';

const Projects = () => {
  return (
    <Layout title='Projects'>
      <Fade duration={1000}>
        <div class='projects-main'>
          <div class='col'>
            <h2 className='projects-desc'>What I've been working on.</h2>
            <div class='tabs'>
              <p className='projects-desc'>
                Take a look at some of my work below, use the GitHub icon in
                each section to view more detailed documentation for each
                project.
              </p>
              {projects.projects.map((projects) => {
                return (
                  <Project
                    title={projects.title}
                    id={projects.id}
                    description={projects.description}
                    link={projects.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
      <ScrollDown to='contact' />
    </Layout>
  );
};

export default Projects;
