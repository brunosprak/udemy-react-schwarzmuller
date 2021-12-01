import { createSlice } from '@reduxjs/toolkit';


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

export const authActions = authSlice.actions;
export default authSlice.reducer;