import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses.push(action.payload);
    },
    setExpenses(state, action) {
      state.expenses = action.payload;
    },
    fetchExpenses(state) {
      // 여기에 지출을 가져오는 비동기 작업을 수행합니다. (예: API 호출)
      // 이 예시에서는 사용할 수 없는 함수입니다.
    },
  },
});

export const { addExpense, setExpenses, fetchExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;
