import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import listSlice from "./listSlice";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    myList: listSlice.reducer,
    movies: movieSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
