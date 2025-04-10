import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/UserSlice";
const AppStore = configureStore({
  // take config
  reducer: {
    user: userReducer,
  },
});

export default AppStore;
