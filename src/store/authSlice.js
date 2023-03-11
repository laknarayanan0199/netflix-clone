import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: { isAuth: false },
  reducers: {
    loggedIn(state) {
      state.isAuth = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
