import { createAsyncThunk } from '@reduxjs/toolkit';

const INSERT_BOOK = 'bookstore / books / INSERT_BOOK';
const DELETE_BOOK = 'bookstore / books / DELETE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const insertBook = createAsyncThunk(INSERT_BOOK, async (book, { dispatch }) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(book),
  });
  dispatch({
    type: INSERT_BOOK,
    book,
  });
});
const getBooks = createAsyncThunk(GET_BOOKS, async (args, { dispatch }) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/', {
    method: 'GET',
  });
  const data = await response.json();
  const bookIDs = Object.entries(data);
  const books = [];
  bookIDs.forEach(([key, book]) => {
    const id = key;
    const { title, author, category } = book[0];
    books.push({
      id, title, author, category,
    });
  });
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
  return books;
});

const deleteBook = createAsyncThunk(DELETE_BOOK, async (id, { dispatch }) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
  dispatch({
    type: DELETE_BOOK,
    id,
  });
});
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case INSERT_BOOK: {
      return [...state, action.book];
    }
    case GET_BOOKS: {
      return [...action.payload];
    }
    case DELETE_BOOK: {
      return state.filter((book) => book.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
export default booksReducer;
export { insertBook, deleteBook, getBooks };
