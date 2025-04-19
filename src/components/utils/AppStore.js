import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/UserSlice";
import moveisReducer from "./moviesSlice";
const AppStore = configureStore({
  // take config
  reducer: {
    user: userReducer,
    movies: moveisReducer,
  },
});

export default AppStore;
