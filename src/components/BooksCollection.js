import React from 'react';
import { useSelector } from 'react-redux';
import BooksItemList from './BooksItemList';
import AddBookForm from './AddBookForm';

function BooksCollection() {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-container">
      <BooksItemList books={books} />
      <AddBookForm />
    </div>
  );
}

export default BooksCollection;
