import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Detail({ expenses, setExpenses }) {
  const { id } = useParams(); // URL에서 id 파라미터를 가져옴
  const navigate = useNavigate();
  const selectedExpense = expenses.find(expense => expense.id === id); // id와 일치하는 지출을 찾음

  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({ ...selectedExpense });

  if (!selectedExpense) {
    return <div>지출을 찾을 수 없습니다.</div>;
  }

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?"); // 경고창 표시
    if (shouldDelete) {
      // 삭제할 지출 데이터를 제외한 전체 지출 데이터 배열 생성
      const updatedExpenses = expenses.filter(expense => expense.id !== id);
      setExpenses(updatedExpenses);
      // 상세 페이지를 나가고 홈 페이지로 이동
      navigate('/');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // 수정된 지출 데이터를 반영한 전체 지출 데이터 배열 생성
    const updatedExpenses = expenses.map(expense =>
      expense.id === id ? editedExpense : expense
    );
    setExpenses(updatedExpenses);
    setIsEditing(false);
    navigate('/'); // 메인페이지로 이동
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div>
      <h2>지출 상세 정보</h2>
      <div>
        날짜:
        {isEditing ? (
          <input
            type="date"
            name="date"
            value={editedExpense.date}
            onChange={handleChange}
          />
        ) : (
          selectedExpense.date
        )}
      </div>
      <div>
        지출 항목:
        {isEditing ? (
          <input
            type="text"
            name="item"
            value={editedExpense.item}
            onChange={handleChange}
          />
        ) : (
          selectedExpense.item
        )}
      </div>
      <div>
        금액:
        {isEditing ? (
          <input
            type="number"
            name="amount"
            value={editedExpense.amount}
            onChange={handleChange}
          />
        ) : (
          selectedExpense.amount
        )}
      </div>
      <div>
        설명:
        {isEditing ? (
          <input
            type="text"
            name="description"
            value={editedExpense.description}
            onChange={handleChange}
          />
        ) : (
          selectedExpense.description
        )}
      </div>
      {isEditing ? (
        <button onClick={handleSave}>저장</button>
      ) : (
        <button onClick={handleEdit}>수정</button>
      )}
      <button onClick={handleDelete}>삭제</button>
      <button onClick={handleBack}>뒤로가기</button>
    </div>
  );
}

export default Detail;

