import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../redux/bookStore/thunk/fetchBooks';
import Book from './Book';

const BookLisit = () => {
  const { books } = useSelector((state) => state.books);
  const etiditng = useSelector((state) => state.editing);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch, etiditng.status]);

  const filterByStatus = (book) => {
    if (filters.status === 'featured') {
      return book.featured;
    }
    return book;
  };
  const filterBySearchTerm = (book) => {
    return book.name.trim().toLowerCase().includes(filters.searchTerm);
  };
  // decide what to render
  let content = '';
  if (books && books.length === 0) {
    content = <p>No books found!</p>;
  } else if (books && books.length > 0) {
    content = books
      .filter(filterByStatus)
      .filter(filterBySearchTerm)
      .map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ));
  }
  return <div className="lws-bookContainer">{content}</div>;
};

export default BookLisit;
