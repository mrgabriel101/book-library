import React, { use, useContext, useEffect } from 'react';
import { BooksContext } from '../BooksContext';
import { useLocation } from 'react-router-dom';

const Books = () => {
  const query = new URLSearchParams(useLocation().search);
  // console.log(query);

  const books = useContext(BooksContext);

  useEffect(() => {
    console.log(query);
  });

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
