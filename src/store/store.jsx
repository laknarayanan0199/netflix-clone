import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, myList: listSlice.reducer },
});

export default store;
