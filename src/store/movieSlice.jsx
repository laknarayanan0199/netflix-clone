const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: [], series: [] },
  reducers: {
    addMovies(state, action) {
      if (state.movies.length < 60) {
        state.movies.push(...action.payload);
      }
    },
    addSeries(state, action) {
      state.series = action.payload;
      // console.log(state.series);
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
