import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksCollection from './components/BooksCollection';
import CategoriesPage from './components/CategoriesPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BooksCollection />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
