// Main Imports
import React from 'react';
import { Fade } from 'react-reveal';

// Import Styles
import './layout.css';

const Layout = (props) => {
  return (
    <section className={props.title.toLowerCase()}>
      <Fade left duration={1000} distance='70px'>
        <h1 className='section-title'>{props.title}</h1>
      </Fade>
      <Fade right duration={1000}>
        <div className='underline'></div>
      </Fade>
      {props.children}
    </section>
  );
};

export default Layout;
