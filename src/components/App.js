import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import BooksContainer from './BooksContainer';
import CategoriesPage from './CategoriesPage';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </div>

  );
}

export default App;
