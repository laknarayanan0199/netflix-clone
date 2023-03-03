import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: [] },
  reducers: {
    addUser(state, action) {
      console.log(action.payload);
      const newUser = action.payload;

      state.user.push(newUser);
    },
    // checkUser(state, action) {
    //   const checkExistingUser = action.payload;
    //   if (state.user === checkExistingUser) {
    //     return true;
    //   }
    // },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
