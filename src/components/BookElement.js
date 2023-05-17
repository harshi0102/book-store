// import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

/* eslint-disable react/prop-types */
function BookElement(props) {
  const { title, author, id } = props;
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
        <a href="./" id={id} className="deletebtn" onClick={handleDelete}>Remove</a>
      </div>
    </li>
  );
}

export default BookElement;
