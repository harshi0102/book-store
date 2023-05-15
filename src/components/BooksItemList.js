import BookElement from './BookElement';

export default function BooksItemList() {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li><BookElement booktitle="Pride and Prejudice" bookauthor="Mark Twain" /></li>
      <li><BookElement booktitle="The Great Gatsby" bookauthor="F. Scott Fitzgerald" /></li>
      <li><BookElement booktitle="The Book Thief" bookauthor="Markus Zusak" /></li>

    </ul>
  );
}
