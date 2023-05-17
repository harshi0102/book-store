import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const AddBookForm = ({ onAddBook }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    item_id: '',
    category: 'fiction',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author) {
      onAddBook(book); // Invoke the onAddBook function passed as prop
      setBook({
        title: '',
        author: '',
        item_id: '',
        category: 'fiction',
      });
    }
  };

  const handleRead = (e) => {
    setBook({
      ...book,
      item_id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <h1>ADD A NEW BOOK</h1>
      <form className="inputs">
        <input type="text" name="title" placeholder="Book-title" value={book.title} onChange={handleRead} />
        <input type="text" name="author" placeholder="Book-author" value={book.author} onChange={handleRead} />
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};
AddBookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default AddBookForm;
