import './App.css';

import { Routes, Route } from 'react-router-dom';
import BooksCollection from './BooksCollection';
import CategoriesPage from './CategoriesPage';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<BooksCollection />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </div>

  );
}

export default App;
