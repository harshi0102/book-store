import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
  // additional reducers could be added here
});

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer,
  middleware,
});

export default store;
