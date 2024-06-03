import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMonth: new Date().getMonth() + 1, // 초기값을 현재 월로 설정
};

const monthsSlice = createSlice({
  name: "months",
  initialState,
  reducers: {
    setSelectedMonth(state, action) {
      state.selectedMonth = action.payload;
    },
  },
});

export const { setSelectedMonth } = monthsSlice.actions;

export default monthsSlice.reducer;
