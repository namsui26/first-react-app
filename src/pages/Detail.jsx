// Detail.jsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updateExpense, deleteExpense } from "../redux/slices/expenseSlice";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const DetailRow = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Input = styled.input`
  width: calc(100% - 120px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#007bff" : "#dc3545")};
  color: white;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #6c757d;
`;

function Detail() {
  const { id } = useParams(); // URL에서 id 파라미터를 가져옴
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedExpense = useSelector((state) =>
    state.expense.expenses.find((expense) => expense.id === id)
  );

  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({ ...selectedExpense });

  if (!selectedExpense) {
    return <Container>지출을 찾을 수 없습니다.</Container>;
  }

  const handleDelete = () => {
    const shouldDelete = window.confirm("정말로 삭제하시겠습니까?"); // 경고창 표시
    if (shouldDelete) {
      dispatch(deleteExpense(id));
      navigate("/");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateExpense({ id, updatedExpense: editedExpense }));
    setIsEditing(false);
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <Container>
      <Title>지출 상세 정보</Title>
      <DetailRow>
        <Label>날짜:</Label>
        {isEditing ? (
          <Input
            type="date"
            name="date"
            value={editedExpense.date}
            onChange={handleChange}
          />
        ) : (
          <span>{selectedExpense.date}</span>
        )}
      </DetailRow>
      <DetailRow>
        <Label>지출 항목:</Label>
        {isEditing ? (
          <Input
            type="text"
            name="item"
            value={editedExpense.item}
            onChange={handleChange}
          />
        ) : (
          <span>{selectedExpense.item}</span>
        )}
      </DetailRow>
      <DetailRow>
        <Label>금액:</Label>
        {isEditing ? (
          <Input
            type="number"
            name="amount"
            value={editedExpense.amount}
            onChange={handleChange}
          />
        ) : (
          <span>{selectedExpense.amount}</span>
        )}
      </DetailRow>
      <DetailRow>
        <Label>설명:</Label>
        {isEditing ? (
          <Input
            type="text"
            name="description"
            value={editedExpense.description}
            onChange={handleChange}
          />
        ) : (
          <span>{selectedExpense.description}</span>
        )}
      </DetailRow>
      {isEditing ? (
        <Button primary onClick={handleSave}>
          저장
        </Button>
      ) : (
        <Button primary onClick={handleEdit}>
          수정
        </Button>
      )}

      <Button onClick={handleDelete}>삭제</Button>
      <SecondaryButton onClick={handleBack}>뒤로가기</SecondaryButton>
    </Container>
  );
}

export default Detail;
