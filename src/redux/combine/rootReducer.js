import { combineReducers } from "redux";
import expenseReducer from "../slices/expenseSlice";
import monthsReducer from "../slices/monthsSlice";

const rootReducer = combineReducers({
  expense: expenseReducer,
  months: monthsReducer,
});

export default rootReducer;
