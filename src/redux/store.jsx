import { configureStore } from "@reduxjs/toolkit";
import openPopupReducer from "./slice/navBarSlice";

export const store = configureStore({
  reducer: {
    popupNav: openPopupReducer,
  },
});
