import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>지출 리스트</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            <div>날짜: {expense.date}</div>
            <div>지출 항목: {expense.item}</div>
            <div>금액: {expense.amount}</div>
            <div>설명: {expense.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

