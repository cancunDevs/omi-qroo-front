import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable-next-line */
const Feed = ({ title, date, description, url }) => {
  return (
    <a href={url} className='list-group-item list-group-item-action flex-column align-items-start'>
      <div className='d-flex w-100 justify-content-between'>
        <h5>{title}</h5>
        <small>{date}</small>
      </div>
      <p className='mb-1' dangerouslySetInnerHTML={{ __html: description }} />
    </a>
  );
};

Feed.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Feed;
