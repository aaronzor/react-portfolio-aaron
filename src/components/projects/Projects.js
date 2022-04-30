import React from 'react';

// Import Components
import Layout from '../layout/Layout';

// Import Styles
import './projects.css';

const Projects = () => {
  return (
    <Layout title='Projects'>
      <div class='projects-main'>
        <div class='col'>
          <h2>What I've been working on.</h2>
          <div class='tabs'>
            <div class='tab'>
              <input type='checkbox' id='chck1' />
              <label class='tab-label' for='chck1'>
                Item 1
              </label>
              <div class='tab-content'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
                reiciendis!
              </div>
            </div>
            <div class='tab'>
              <input type='checkbox' id='chck2' />
              <label class='tab-label' for='chck2'>
                Item 2
              </label>
              <div class='tab-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;