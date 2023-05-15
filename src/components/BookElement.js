import React from 'react';
import PropTypes from 'prop-types';

export default function BookElement({ booktitle, bookauthor }) {
  return (
    <div className="container">
      <div>
        <h2>
          {booktitle}
        </h2>
        <p>
          By
          (
          {bookauthor}
          )
        </p>
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

BookElement.propTypes = {
  booktitle: PropTypes.string.isRequired,
  bookauthor: PropTypes.string.isRequired,
};
