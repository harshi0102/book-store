import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/booksSlice';
import statusReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: statusReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
