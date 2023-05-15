import React from 'react';
import PropTypes from 'prop-types';
import BookElement from './BookElement';

function BooksItemList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <BookElement
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}

BooksItemList.propTypes = {
  books: PropTypes.arrayOf(BookElement.propTypes.book).isRequired,
};

export default BooksItemList;
