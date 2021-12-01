import { createStore } from 'redux';

const counterReducer = (state = { counter: 0, show: true }, action) => {
  if (action.type === 'INC') {
    return { counter: state.counter + action.step, show: state.show };
  }
  if (action.type === 'DEC') {
    return { counter: state.counter - action.step, show: state.show };
  }
  if (action.type === 'TOGGLE') {
    return { counter: state.counter, show: !state.show };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
