import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookElement from './BookElement';
import AddBookForm from './AddBookForm';
import { getBooks, insertBook } from '../redux/books/booksSlice';

function BooksCollection() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const bookItemList = useSelector((state) => state.books);

  const handleAddBook = async (book) => {
    await dispatch(insertBook(book));
    dispatch(getBooks()); // Refresh the book list after adding a new book
  };

  return (
    <>
      <ul>
        {bookItemList.map((book) => {
          const { id, author, title } = book || {};
          if (id) {
            return <BookElement key={id} title={title} author={author} id={id} />;
          }
          return null;
        })}
      </ul>
      <AddBookForm onAddBook={handleAddBook} />
    </>
  );
}

export default BooksCollection;
