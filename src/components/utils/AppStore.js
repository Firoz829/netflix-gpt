import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/UserSlice";
import moveisReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const AppStore = configureStore({
  // take config
  reducer: {
    user: userReducer,
    movies: moveisReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default AppStore;
