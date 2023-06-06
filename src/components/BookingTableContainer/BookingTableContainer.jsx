import { useSelector } from 'react-redux';
import BookedTable from '../BookedTable/BookedTable';

const BookingTableContainer = () => {
  const state = useSelector((state) => state.bookedFlights);

  // decide what to render
  let content = '';
  if (state && state.length > 0) {
    content = (
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody
          className="divide-y divide-gray-300/20"
          id="lws-previewBooked">
          {state.map((bookedFlight) => (
            <BookedTable
              key={bookedFlight.id}
              flightInfo={bookedFlight}
            />
          ))}
        </tbody>
      </table>
    );
  } else {
    content = <div className="not-found">No booked flight found!</div>;
  }
  return <>{content}</>;
};

export default BookingTableContainer;
