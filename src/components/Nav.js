import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <div className="book-container nav-flex">
        <h1>
          <Link to="/" className="logo">Bookstore CMS</Link>
        </h1>
        <nav>
          <ul className="nav-flex">
            <li>
              <Link to="/" className="my-booklinks">Books</Link>
            </li>
            <li>
              <Link to="/categories" className="my-booklinks">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
