import { configureStore } from "@reduxjs/toolkit";
import callBackReducer from "../src/redux/features/callback/callBackSlice"

export const store = configureStore({
  reducer: { callBackReducer },
});
