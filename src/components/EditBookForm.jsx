import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addBook from '../redux/bookStore/thunk/addBook';
import updateBook from '../redux/editBook/thunk/updateBook';

const EditBookForm = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [featured, setFeatured] = useState(false);

  const { books } = useSelector((state) => state.books);
  const { status, bookId } = useSelector((state) => state.editing);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookId && books) {
      const selectedBook = books.find((book) => book.id === bookId);
      setName(selectedBook.name);
      setAuthor(selectedBook.author);
      setThumbnail(selectedBook.thumbnail);
      setPrice(selectedBook.price);
      setRating(selectedBook.rating);
      setFeatured(selectedBook.featured);
    }
  }, [bookId, books]);

  const resetForm = () => {
    setName('');
    setAuthor('');
    setThumbnail('');
    setPrice('');
    setRating('');
    setFeatured('');
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (typeof price === 'number' && typeof rating === 'number') {
      dispatch(
        updateBook({
          bookId,
          bookInfo: {
            name,
            author,
            thumbnail,
            price,
            rating,
            featured,
          },
        })
      );
      resetForm();
    } else {
      alert('Invalid input!');
    }
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
        <form
          onSubmit={handleOnsubmit}
          className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              onChange={(e) => setThumbnail(e.target.value)}
              value={thumbnail}
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                value={price}
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                onChange={(e) => setRating(parseInt(e.target.value))}
                value={rating}
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              onChange={(e) => setFeatured(e.target.checked)}
              checked={featured}
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
            />
            <label
              htmlFor="featured"
              className="ml-2 text-sm">
              {' '}
              This is a featured book{' '}
            </label>
          </div>

          <button
            type="submit"
            className="submit"
            id="submit">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBookForm;
