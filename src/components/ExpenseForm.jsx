import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ExpenseForm({ setExpenses }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4(); // 새로운 지출을 위한 고유한 id 생성
    // 입력한 지출 데이터
    const expense = {
      id: id,
      date: e.target.date.value,
      item: e.target.item.value,
      amount: parseFloat(e.target.amount.value),
      description: e.target.description.value
    };
    // 지출 추가하기
    setExpenses(prevExpenses => [...prevExpenses, expense]);
    // 폼 초기화
    e.target.reset();
  };

  return (
    <div>
      <h2>지출 등록</h2>
      <form onSubmit={handleSubmit}>
        {/* 지출 등록 폼 */}
      </form>
    </div>
  );
}

export default ExpenseForm;

