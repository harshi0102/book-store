import React from 'react';
import PropTypes from 'prop-types';

export default function BookElement({ title, author }) {
  return (
    <div className="container">
      <div>
        <h2>
          {title}
        </h2>
        <p>
          By
          (
          {author}
          )
        </p>
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

BookElement.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
