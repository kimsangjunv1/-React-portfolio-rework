import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./../components/utils/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
