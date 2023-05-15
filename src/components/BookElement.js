import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function BookElement({ book }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <h3>{book.category}</h3>
      <h2>{book.title}</h2>
      <h5>{book.author}</h5>
      <div>
        <button type="button" onClick={() => handleRemove(book.id)}>Remove</button>
      </div>
    </li>
  );
}

BookElement.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookElement;
