import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isPopupOpen: false,
};

export const popupOptions = createSlice({
  name: "navbarOption",
  initialState: initialValue,
  reducers: {
    openPopup: (state) => {
      state.isPopupOpen = true;
    },
    closePopup: (state) => {
      state.isPopupOpen = false;
    },
    togglePopup: (state) => {
      state.isPopupOpen = !state.isPopupOpen;
    },
  },
});

export const { openPopup, closePopup, togglePopup } = popupOptions.actions;
export default popupOptions.reducer;
