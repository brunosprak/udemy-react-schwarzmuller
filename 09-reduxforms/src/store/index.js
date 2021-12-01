import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment (state, action) {
            state.counter += action.step;
        },
        decrement (state) {
            state.counter--;
        },
        toggle (state) {
            state.show = !state.show;
        },
    }
  });
  

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INC') {
//     return { counter: state.counter + action.step, show: state.show };
//   }
//   if (action.type === 'DEC') {
//     return { counter: state.counter - action.step, show: state.show };
//   }
//   if (action.type === 'TOGGLE') {
//     return { counter: state.counter, show: !state.show };
//   }
//   return state;
// };

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;
