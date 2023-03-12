const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movie and series",
  initialState: { data: [] },
  reducers: {
    addData(state, action) {
      if (state.data.length < 120) {
        console.log(state.data.length);
        state.data.push(...action.payload);
      }
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
