import { combineReducers } from 'redux';
import bookingFlightReducer from './bookingFlight/bookingFlightReducer';

const rootReducer = combineReducers({
  bookedFlights: bookingFlightReducer,
});

export default rootReducer;
