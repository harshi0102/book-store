import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const INSERT_BOOK = 'bookstore/books/INSERT_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

export const insertBook = createAsyncThunk(INSERT_BOOK, async (book, { dispatch }) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7J88ab57HvQlIbDye75B/books/', {
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
    payload: book,
  });
});

export const getBooks = createAsyncThunk(GET_BOOKS, async (args, { dispatch }) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7J88ab57HvQlIbDye75B/books/', {
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

export const deleteBook = createAsyncThunk(DELETE_BOOK, async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7J88ab57HvQlIbDye75B/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(insertBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const id = action.payload;
        return state.filter((book) => book.id !== id);
      })
      .addCase(getBooks.fulfilled, (state, action) => action.payload);
  },
});

export default booksSlice.reducer;
