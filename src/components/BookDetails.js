import React, { useContext, useEffect } from 'react';
import { BooksContext } from '../BooksContext';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useContext(BooksContext);
  const book = books.find((book) => book.id === parseInt(bookId));
  console.log(book);

  useEffect(() => {
    // Fetch book details based on bookId
    // This is a placeholder for the actual fetch logic
    console.log(`Fetching details for book ID: ${bookId}`);
    console.log(book);
  }, [bookId]);

  return <div>{/* Book details will be displayed here */}</div>;
};

export default BookDetails;
