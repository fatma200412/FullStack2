import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productReducer from "./slices/productsSlices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});
