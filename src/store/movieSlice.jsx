const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: [], series: [] },
  reducers: {
    addMovies(state, action) {
      if (state.movies.length < 80) {
        state.movies.push(...action.payload);
        // console.log("movies", state.movies);
      }
    },
    addSeries(state, action) {
      if (state.series.length < 80) {
        state.series.push(...action.payload);
        // console.log("series", state.series);
      }
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
