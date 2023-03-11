import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [{ id: 0.2538, email: "test@test.com", password: "test123" }],
  },
  reducers: {
    addUser(state, action) {
      console.log(action.payload);
      state.users.push(action.payload);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
