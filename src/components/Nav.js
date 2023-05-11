import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <div className="container flex">
        <h1>
          <Link to="/" className="logo">Bookstore CMS</Link>
        </h1>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/" className="my-link">Books</Link>
            </li>
            <li>
              <Link to="/categories" className="my-link">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
