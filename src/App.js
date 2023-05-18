import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import BooksCollection from './components/BooksCollection';
import CategoriesPage from './components/CategoriesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="user">
        <AiOutlineUser classname="profile" />
      </div>
      <div className="appContainer">
        <nav>
          <ul className="navbar">
            <li className="logo">Bookstore CMS</li>
            <li>
              <Link to="/" className="navbarlink">
                BOOKS
              </Link>
            </li>
            <li>
              <Link to="/categories" className="navbarlink">
                CATEGORIES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<BooksCollection />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
