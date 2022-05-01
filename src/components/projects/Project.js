import React from 'react';

const Project = (props) => {
  // Destructuring props
  const { title, id, description, link } = props;

  return (
    <div class='tab'>
      <input type='checkbox' id={id} />
      <label class='tab-label' for={id}>
        {title}
      </label>
      <div class='tab-content'>{description}</div>
    </div>
  );
};

export default Project;
