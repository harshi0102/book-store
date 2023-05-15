export default function AddBookForm() {
  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" placeholder="Book title" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}
