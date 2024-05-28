import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Detail({ expenses, setExpenses }) {
  const { id } = useParams(); // URL에서 id 파라미터를 가져옴
  const selectedExpense = expenses.find(expense => expense.id === id); // id와 일치하는 지출을 찾음
  const navigate = useNavigate();

  if (!selectedExpense) {
    return <div>지출을 찾을 수 없습니다.</div>;
  }

  const handleDelete = () => {
    // 삭제할 지출 데이터를 제외한 전체 지출 데이터 배열 생성
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    // 상세 페이지를 나가고 홈 페이지로 이동
    navigate('/');
  };

  return (
    <div>
      <h2>지출 상세 정보</h2>
      <div>날짜: {selectedExpense.date}</div>
      <div>지출 항목: {selectedExpense.item}</div>
      <div>금액: {selectedExpense.amount}</div>
      <div>설명: {selectedExpense.description}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default Detail;








