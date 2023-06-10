import React from 'react';
import BookLisit from './BookLisit';
import BookListHeader from './BookListHeader';

const BookListContainer = () => {
  return (
    <div className="order-2 xl:-order-1">
      <BookListHeader />
      <BookLisit />
    </div>
  );
};

export default BookListContainer;
