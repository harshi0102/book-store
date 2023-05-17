import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookElement from './BookElement';
import AddBookForm from './AddBookForm';
import { getBooks } from '../redux/books/booksSlice';

function BooksCollection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const bookItemList = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {bookItemList.map((book) => {
          const { author, title, id } = book;
          return <BookElement key={`bk-${id}`} title={title} author={author} id={id} />;
        })}
      </ul>
      <AddBookForm />
    </>
  );
}
BooksCollection.defaultProps = {
  books: [],
};
export default BooksCollection;
