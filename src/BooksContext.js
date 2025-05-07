import React, { createContext, useEffect, useState } from 'react';

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books.json')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <BooksContext.Provider value={books}>{children}</BooksContext.Provider>
  );
};

export { BooksContext, BooksProvider };
