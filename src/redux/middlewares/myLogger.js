import { BOOK } from '../bookingFlight/actionTypes';

const myLogger = (store) => (next) => (action) => {
  const currentState = store.getState().bookedFlights;
  if (action.type === BOOK) {
    if (currentState.length < 3) {
      return next(action);
    }
    return alert('You have reach max flight booking');
  }
  return next(action);
};

export default myLogger;
