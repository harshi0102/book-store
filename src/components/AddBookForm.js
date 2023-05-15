import { React, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

function AddBookForm() {
  const titleRef = useRef();
  const authorRef = useRef();
  const categoryRef = useRef();
  const dispatch = useDispatch();

  function submitBook(event) {
    event.preventDefault();
    const newBook = {
      id: nanoid(),
      title: titleRef.current.value,
      author: authorRef.current.value,
      category: categoryRef.current.value,
    };
    dispatch(addBook(newBook));
    titleRef.current.value = '';
    authorRef.current.value = '';
    categoryRef.current.value = '';
  }

  return (
    <div>
      <h2>Add new book</h2>
      <form onSubmit={submitBook}>
        <input type="text" name="name" placeholder="Book Title" id="title" ref={titleRef} required />
        <input type="text" name="author" placeholder="author" id="author" ref={authorRef} required />
        <input type="text" name="category" placeholder="Category" id="category" ref={categoryRef} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookForm;
