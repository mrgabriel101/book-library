import React, { useContext } from 'react';
import { BooksContext } from '../BooksContext';

const Books = () => {
  const books = useContext(BooksContext);

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
