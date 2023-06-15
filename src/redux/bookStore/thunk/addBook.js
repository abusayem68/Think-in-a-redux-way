import { addedBook } from '../actions';

const addBook = (data) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:9000/books', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        author: data.author,
        thumbnail: data.thumbnail,
        price: data.price,
        rating: data.rating,
        featured: data.featured,
      }),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
    const book = await response.json();
    dispatch(addedBook(book));
  };
};

export default addBook;
