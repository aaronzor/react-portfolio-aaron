// Main Imports
import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Import Assets
import { ArrowUpward } from '@mui/icons-material';

// Import Styles
import './TopButton.css';

const TopButton = () => {
  // When the user scrolls down from the top of the document, show the button
  // Initialise visible state of button
  const [topButtonVisible, setTopButtonVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > window.innerHeight + 63 ||
      document.documentElement.scrollTop > window.innerHeight + 63
    ) {
      setTopButtonVisible(true);
    } else {
      setTopButtonVisible(false);
    }
  };
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  };
  return (
    <Link
      activeClass='active'
      to='about'
      spy={true}
      smooth={true}
      duration={500}
      offset={-63}>
      <button
        className={'topButton ' + (topButtonVisible ? 'on' : 'off')}
        title='Go to top'>
        <i aria-hidden='true'>
          <ArrowUpward />
        </i>
      </button>
    </Link>
  );
};

export default TopButton;
