import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

function BookElement({ title, author, id }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBook(id));
  };

  return (
    <li>
      <div className="bookinfo">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        {id && (
          <a href="/" id={id} className="deletebtn" onClick={handleDelete}>
            Remove
          </a>
        )}
      </div>
    </li>
  );
}

BookElement.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string,
};

BookElement.defaultProps = {
  id: null,
};

export default BookElement;
