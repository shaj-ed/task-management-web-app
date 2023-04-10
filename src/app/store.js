import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import themeReducer from "../features/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
  },
});

export default store;
