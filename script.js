// select dom element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// action identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// intitial state
const initialState = {
  value: 0,
};

//create reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return { ...state, value: state.value + action.payload };
  } else if (action.type === 'decrement') {
    return { ...state, value: state.value - action.payload };
  } else {
    return state;
  }
};

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

render();

// subscribe to store
store.subscribe(render);

// event listen in dom element
incrementEl.addEventListener('click', () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener('click', () => {
  store.dispatch(decrement(5));
});
