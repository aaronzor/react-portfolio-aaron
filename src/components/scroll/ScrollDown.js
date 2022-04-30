// Main Imports
import React from 'react';
import { Link } from 'react-scroll';

// Import Icon
import ArrowCircleDown from '@mui/icons-material/ArrowCircleDown';

const ScrollDown = ({ to }) => {
  return (
    <div className='scroll'>
      <Link
        activeClass='active'
        to={to}
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
  );
};

export default ScrollDown;
