import React from 'react';
import { Fade } from 'react-reveal';
import projects from '../../data/projects.json';

// Import Components
import Layout from '../layout/Layout';
import Project from './Project';

// Import Styles
import './projects.css';

const Projects = () => {
  return (
    <Layout title='Projects'>
      <Fade duration={1000}>
        <div class='projects-main'>
          <div class='col'>
            <h2>What I've been working on.</h2>
            <div class='tabs'>
              {projects.projects.map((projects) => {
                return (
                  <Project
                    title={projects.title}
                    id={projects.id}
                    description={projects.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default Projects;
