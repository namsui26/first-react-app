import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../slices/expenseSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    // 다른 리듀서 추가 가능
  },
});
