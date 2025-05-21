import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "house",
  initialState: {
    items: [],
  },
  reducers: {
    addData: (state, action) => {
      state.items.push(action.payload);
    },
    removeData: (state) => (state.items = []),
  },
});

export const { addData, removeData } = dataSlice.actions;
export default dataSlice.reducer;
