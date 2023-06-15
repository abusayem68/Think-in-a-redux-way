import { updated } from '../actions';

const updateBook = ({ bookId, bookInfo }) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: 'PATCH',
      body: JSON.stringify(bookInfo),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const book = await response.json();
    dispatch(updated(book));
  };
};

export default updateBook;
