import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "My List",
  initialState: { list: [] },
  reducers: {
    addToMyList(state, action) {
      const newList = action.payload;
      const existing = state.list.find((list) => list.id === newList.id);
      if (!existing) {
        state.list.push(action.payload);
      } 
      // else state.list = state.list.filter((list) => list.id !== newList.id);
    },
    removeFromList(state, action) {
      const newList = action.payload;

      state.list = state.list.filter((list) => list.id !== newList);
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
