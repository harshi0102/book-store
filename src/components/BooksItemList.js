import BookElement from './BookElement';

export default function BooksItemList() {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li><BookElement title="Pride and Prejudice" author="Mark Twain" /></li>
      <li><BookElement title="The Great Gatsby" author="F. Scott Fitzgerald" /></li>
      <li><BookElement title="The Book Thief" author="Markus Zusak" /></li>

    </ul>
  );
}
