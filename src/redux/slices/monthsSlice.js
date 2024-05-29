import { createSlice } from "@reduxjs/toolkit";

const monthsSlice = createSlice({
  name: "months",
  initialState: {
    selectedMonth: null,
  },
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  },
});

export const { setSelectedMonth } = monthsSlice.actions;
export default monthsSlice.reducer;
