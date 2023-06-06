import { BOOK, DELETE } from './actionTypes';

const inittialState = [];

const nextFlightId = (flights) => {
  const maxId = flights.reduce(
    (maxId, flight) => Math.max(maxId, flight.id),
    0
  );
  return maxId + 1;
};

const bookingFlightReducer = (state = inittialState, action) => {
  switch (action.type) {
    case BOOK:
      return [...state, { id: nextFlightId(state), ...action.payload.value }];
    case DELETE:
      return state.filter(
        (bookedFlight) => bookedFlight.id !== action.payload.id
      );
    default:
      return state;
  }
};

export default bookingFlightReducer;
