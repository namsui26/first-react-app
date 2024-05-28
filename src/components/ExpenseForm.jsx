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

    // 날짜 형식 확인
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(expense.date)) {
      alert('올바른 날짜 형식(YYYY-MM-DD)으로 입력해주세요.');
      return;
    }
    
    // 지출 추가하기
    setExpenses(prevExpenses => [...prevExpenses, expense]);
    // 폼 초기화
    e.target.reset();
  };

  return (
    <div>
      <h2>지출 등록</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">날짜</label>
          <input type="text" id="date" name="date" placeholder="YYYY-MM-DD" required />
        </div>
        <div>
          <label htmlFor="item">항목</label>
          <input type="text" id="item" name="item" placeholder="지출 항목" required />
        </div>
        <div>
          <label htmlFor="amount">금액</label>
          <input type="number" id="amount" name="amount" placeholder="지출 금액" required />
        </div>
        <div>
          <label htmlFor="description">내용</label>
          <input type="text" id="description" name="description" placeholder="지출 내용" required />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default ExpenseForm;


