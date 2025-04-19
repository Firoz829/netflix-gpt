import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies,",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    PopularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    tvShows: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addTvShows,
} = moviesSlice.actions;
export default moviesSlice.reducer;
