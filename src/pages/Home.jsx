import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import MonthSelector from '../components/MonthSelector';
import ExpenseList from '../components/ExpenseList';


function Home({ expenses, setExpenses }) {
  const [selectedMonth, setSelectedMonth] = useState(''); // 선택된 월 상태

  return (
    <div>
      <ExpenseForm setExpenses={setExpenses} />
      <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <ExpenseList expenses={expenses} selectedMonth={selectedMonth} />
    </div>
  );
}

export default Home;


