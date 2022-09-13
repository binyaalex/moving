import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPersonalInfoSubmit: false,
};

export const callBackSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   isPersonalDetails: (state, action) => {
      state.isPersonalInfoSubmit = action.payload;
    },
  },
});

export const { isPersonalDetails } = callBackSlice.actions;

export default callBackSlice.reducer;