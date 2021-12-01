import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload.step;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});
const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, payload) {
      console.log(payload);
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
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
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
