import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import MonthSelector from '../components/MonthSelector';
import ExpenseList from '../components/ExpenseList';
import { addExpense } from '../redux/slices/expenseSlice'; // 액션 생성자 가져오기

function Home() {
  const dispatch = useDispatch(); // useDispatch로 dispatch 함수 가져오기
  const expenses = useSelector(state => state.expense.expenses); // useSelector로 Redux 상태 가져오기
  const [selectedMonth, setSelectedMonth] = useState(''); // 선택된 월 상태

  const handleSetExpenses = (newExpense) => {
    dispatch(addExpense(newExpense)); // 새로운 지출을 추가하기 위해 dispatch 호출
  };

  return (
    <div>
      <ExpenseForm setExpenses={handleSetExpenses} />
      <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <ExpenseList selectedMonth={selectedMonth} />
    </div>
  );
}

export default Home;

