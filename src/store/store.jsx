import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    myList: listSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export default store;
