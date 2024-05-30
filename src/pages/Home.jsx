// Home.jsx

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import MonthSelector from "../components/MonthSelector";
import ExpenseList from "../components/ExpenseList";
import { addExpense, fetchExpenses } from "../redux/slices/expenseSlice"; // fetchExpenses 추가

function Home() {
  const dispatch = useDispatch(); // useDispatch로 dispatch 함수 가져오기
  const expenses = useSelector((state) => state.expense.expenses); // useSelector로 Redux 상태 가져오기
  const selectedMonth = useSelector((state) => state.expense.selectedMonth); // 선택된 월 상태 가져오기

  useEffect(() => {
    dispatch(fetchExpenses()); // 컴포넌트가 마운트될 때 지출 데이터 가져오기
  }, [dispatch]);

  const handleSetExpenses = (newExpense) => {
    dispatch(addExpense(newExpense)); // 새로운 지출을 추가하기 위해 dispatch 호출
  };

  const filteredExpenses = expenses.filter((expense) =>
    selectedMonth ? expense.month === selectedMonth : true
  );

  return (
    <div>
      <ExpenseForm setExpenses={handleSetExpenses} />
      <MonthSelector />
      <ExpenseList expenses={filteredExpenses} selectedMonth={selectedMonth} />
    </div>
  );
}

export default Home;
