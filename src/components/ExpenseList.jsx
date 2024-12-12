import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExpenseList({ expenses, selectedMonth }) {
  const navigate = useNavigate();

  if (!selectedMonth) {
    return <div>월을 선택해주세요.</div>;
  }

  // 선택된 월에 해당하는 지출 리스트 필터링 함수
  const filteredExpenses = expenses.filter(expense => {
    const expenseMonth = expense.date.split('-')[1]; // 지출 날짜에서 월 부분 추출
    return expenseMonth === selectedMonth.padStart(2, '0');
  });

  // 텍스트 자르기 함수
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div>
      <h2>지출 리스트</h2>
      <ul>
        {filteredExpenses.map(expense => (
          <li key={expense.id} onClick={() => navigate(`/detail/${expense.id}`)}>
            <div>날짜: {expense.date}</div>
            <div>지출 항목: {truncateText(expense.item, 10)}</div>
            <div>금액: {expense.amount}</div>
            <div>설명: {truncateText(expense.description, 20)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;


