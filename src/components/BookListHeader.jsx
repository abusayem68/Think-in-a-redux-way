import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChanged } from '../redux/filters/actions';

const BookListHeader = () => {
  const { status } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleStatusChanged('all')}
          className={`filter-btn  ${status === 'all' && 'active-filter'}`}
          id="lws-filterAll">
          All
        </button>
        <button
          onClick={() => handleStatusChanged('featured')}
          className={`filter-btn  ${status === 'featured' && 'active-filter'}`}
          id="lws-filterFeatured">
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookListHeader;
