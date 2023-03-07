import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: { email: "test@test.com", password: "test123" } },
  reducers: {
    addUser(state, action) {
      // console.log(action.payload);
      const newUser = action.payload;
      console.log(newUser);
      state.user.push(...newUser);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
