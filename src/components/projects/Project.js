// Main Imports
import React from 'react';

// Import Github Icon
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = (props) => {
  // Destructuring props
  const { title, id, description, link } = props;

  return (
    <div class='tab'>
      <input type='checkbox' id={id} />
      <label class='tab-label' for={id}>
        {title}
      </label>
      <div class='tab-content'>
        {description}
        <a href={link}>
          <GitHubIcon
            style={{
              border: '0.1rem solid #32e0c4',
              borderRadius: '50%',
              color: '#32e0c4',
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
