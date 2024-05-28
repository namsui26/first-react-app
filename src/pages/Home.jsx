import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import MonthSelector from '../components/MonthSelector';
import ExpenseList from '../components/ExpenseList';

function Home({ selectedMonth, setSelectedMonth, expenses, setExpenses }) {
  return (
    <>
      <ExpenseForm setExpenses={setExpenses} />
      <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default Home;
