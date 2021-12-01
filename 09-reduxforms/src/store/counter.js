import { createSlice } from '@reduxjs/toolkit';

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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;