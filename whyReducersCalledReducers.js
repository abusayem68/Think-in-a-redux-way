const actions = [
  { type: 'increment', payload: 5 },
  { type: 'increment', payload: 5 },
  { type: 'increment', payload: 5 },
  { type: 'increment', payload: 5 },
  { type: 'decrement', payload: 3 },
];

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === 'decrement') {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

const finalResult = actions.reduce(counterReducer, initialState);

console.log(finalResult);
