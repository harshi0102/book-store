/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { useSelector } from 'react-redux';
import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import BooksCollection from './components/BooksCollection';
import Header from './components/Header';
import CategoriesPage from './components/CategoriesPage';

function App() {
  const state = useSelector((state) => state);
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<BooksCollection />} />
          <Route path="/categories" element={<CategoriesPage categories={state.categories} />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
