import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import MonthSelector from '../components/MonthSelector';
import ExpenseList from '../components/ExpenseList';
import { useExpenseContext } from '../context/ExpenseContext';

function Home() {
  const { expenses, setExpenses } = useExpenseContext(); // useExpenseContext를 사용하여 context에서 expenses와 setExpenses를 가져옴
  const [selectedMonth, setSelectedMonth] = useState(''); // 선택된 월 상태

  return (
    <div>
      <ExpenseForm setExpenses={setExpenses} />
      <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <ExpenseList selectedMonth={selectedMonth} />
    </div>
  );
}

export default Home;
